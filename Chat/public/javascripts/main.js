let socket = io();

$('#btnSend').click(() => {
	let chatMessage = {
		nick: $('#nick').val(),
		message: $('#message').val()
	}
	socket.emit('chat:message', chatMessage);
});

socket.on('chat:message', (data) => {
	enviarNotificacion(data.nick, data.message);
	$('#messages').append(`<li class="list-group-item"><b>${data.nick}:</b> ${data.message} - ${moment().format('DD-MM-YYYY kk:mm:ss')}</li>`)
});

socket.on('chat:users', (data) => {
	$('#numUsers').text(`Usuarios conectados: ${data}`);
});

function enviarNotificacion(nick, message) {
	if(Notification.permission === 'granted') {
		new Notification(`${nick} ha enviado un mensaje`, {
			body: message
		});
	}
	else {
		Notification.requestPermission((permission) => {
			if(permission === 'granted') {
				new Notification(`${nick} ha enviado un mensaje`, {
					body: message
				});
			}
		})
	}
}