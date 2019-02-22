const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const chatuser = require('./routes/chatuser.route')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/api/users', chatuser)

app.get('/', (req, res) => {
  res.json({
    name: "EMS Chat Server",
    version: {
      major: 1,
      minor: 0
    }
  })
})

app.get('/chat', (req, res) => {
  res.render('chat')
})

server = app.listen(3000)

const io = require('socket.io')(server)

io.on('connection', (socket) => {
  console.log("[+] New conn:", socket.id)

  socket.username = "Anonymous"

  socket.on('change_username', (data) => {
    console.log("[*]", socket.id, "changed name:", data.username);
    socket.username = data.username
  })

  socket.on('new_message', (data) => {
    io.sockets.emit('new_message', {
      message: data.message,
      username: socket.username
    })
  })
})
