import os
import time
import signal
import ws_server
import webapp_server
import argparse

parser = argparse.ArgumentParser()
parser.add_argument(
    "-d",
    "--device-port",
    type=str,
    help="Path to serial port",
    default="/dev/null",
)

optarg = parser.parse_args()

if (c1 := os.fork()) == 0:
    # Fork and serve controller webapp
    ws_server.serve(8000, "cntl")
if (c2 := os.fork()) == 0:
    # Fork and serve websocket
    webapp_server.main(optarg.device_port)

try:
    while True:
        # wait for SIGINT
        time.sleep(1)
finally: # WSL orphans children
    os.kill(c1, signal.SIGINT)
    os.kill(c2, signal.SIGINT)