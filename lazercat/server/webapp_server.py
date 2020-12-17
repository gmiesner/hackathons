# This module exposes the interface between the browser UI and
# Windows COM port assigned to a bluetooth device. Basically
# we want our browser to be able to use bluetooth.

import os
import websocket_server
import json
import threading
import time
import contextlib
import queue
import enum
import serial
import posix
from termios import *

import asyncio
import posix
import sys
from posix import (
    O_RDWR,
    O_NONBLOCK,
    O_NOCTTY,
)  
import termios
import typing
import time
import logging
logger = logging.getLogger(__name__)



class SerialBLE:
    TIMEOUT_MS = 250
    

    def __init__(self, path, loop=None, baud=None, timeout_ms=None):
        loop = asyncio.get_event_loop() if loop is None else loop
        self.timeout_ms = self.TIMEOUT_MS
        self.loop = loop
        self.path = path
        self.fd = -1
        self._fdcond = asyncio.Condition(loop=loop)
        self._rw_event = asyncio.Event(loop=loop)
        self._rw_event.clear()

        self._rx = asyncio.Queue(loop=loop)
        self._tx = asyncio.Queue(loop=loop)
        self._timer = self.timeout_ms
        self._bytes = 0
      
        self.baud = baud

        def read_handler(task):
            if task.exception():
                logger.debug(f"Task failed {task.exception()}")
                loop.create_task(self._read())
        
        conn = self.loop.create_task(self._connection())
        self.loop.create_task(self._read()).add_done_callback(
            read_handler
        )
        self.loop.create_task(self._write()).add_done_callback(read_handler)
    
    async def read(self):
        return await self._rx.get()

    async def write(self, data):
        return await self._tx.put(data)
    

    async def _write(self):
        while True:
            await asyncio.sleep(1/1000)
            if self.fd != -1:
                byte = await self._tx.get()
                try:
                    res = posix.write(self.fd, bytearray([byte] + [0 for _ in range(63)]))
                except OSError:
                    print(sys.exc_info())                   
                else:
                    self._timer = self.timeout_ms
                    print(res)
                self._tx.task_done()

    async def _read(self):        
        while True: 
            if self.fd != -1:
                try:
                    res = posix.read(self.fd, 1)
                    size = len(res)
                except:
                    self._timer -= 1
                    if self._timer < 0:
                        error = sys.exc_info()[1]
                        async with self._fdcond:
                            posix.close(self.fd)
                            self.fd = -1
                            self._timer = self.timeout_ms
                            logger.debug(f"BLE: Disconnected {error}")
                            self._fdcond.notify_all()
                else:
                    self._timer = self.timeout_ms
            await asyncio.sleep(1/1000) 
                   
    async def _connection(self):
        def set_fd():
            try:
                self.fd = posix.open(self.path, O_RDWR | O_NOCTTY | O_NONBLOCK, 0)
            except BlockingIOError:
                self.fd = -1
                logger.debug("BLE: failed to open")
            except OSError as e:
                logger.debug(f"{e}")
                self.fd = -1 
            except:
                logger.debug("unknown exception")
            else:
                set_raw_tty(self.fd, self.baud)
                logger.debug(f"BLE: opened file at {self.path}")
                

        while True:
            await asyncio.sleep(0.001)
            async with self._fdcond:
                await self._fdcond.wait_for(lambda: self.fd < 0)
                await self.loop.run_in_executor(None, set_fd)
                
# [iflag, oflag, cflag, lflag, ispeed, ospeed, cc]
def set_raw_tty(fd, speed=None):
    term = tcgetattr(fd)
    term[0] &= ~(IXON | IXOFF | IXANY)
    term[1] &= ~OPOST                    # o_flag
    term[2] |= (CLOCAL | CREAD)  # cflag
    term[3] &= ~(ICANON | ECHO | ECHOE | ISIG)
    if speed is not None:
        term[4] = term[5] = speed    
    tcsetattr(fd, TCSANOW, term)
    tcflush(fd, TCIOFLUSH)


def open_tty(path, flags, mode, speed=None):
    fd = posix.open(path, flags, mode)
    set_raw_tty(fd, speed)
    return fd
@contextlib.contextmanager
def fdopen_ctx(_serial):
    s = serial.Serial(_serial, 9600)
    try:
        yield s
    finally:
        s.close()

def main(serial):
    loop = asyncio.get_event_loop()
    dev = SerialBLE(serial, loop=loop)

    server = websocket_server.WebsocketServer(8001)
    server.set_fn_message_received(
        lambda client, server, message: loop.create_task(dev.write(json.loads(message)))
        
    )
    threading.Thread(
        target=server.run_forever,
        daemon=True,
    ).start()
    loop.run_forever()

if __name__ == "__main__":
    main()


