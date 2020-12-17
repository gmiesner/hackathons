const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
})

io.on('connection', socket => {
    console.log('User Online');
    socket.on('canvas-data', data => {
        socket.broadcast.emit('canvas-data', data)
    })
})

const server_port = 9000
http.listen(server_port, () => {
    console.log('Listening on 9000');
})