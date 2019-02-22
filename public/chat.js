$(() => {
  var socket = io.connect('http://localhost:3000')

  var message = $("#message")
  var send_message = $("#send-message")
  var username = $("#username")
  var change_username = $("#change-username")
  var chatroom = $("#chatroom")

  change_username.click(() => {
    socket.emit('change_username', {
      username: username.val()
    })
  })

  send_message.click(() => {
    socket.emit('new_message', {
      message: message.val()
    })
  })

  socket.on('new_message', (data) => {
    chatroom.append("<p>"+data.username+": "+data.message+"</p>")
  })
})
