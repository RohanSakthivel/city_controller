const messagesDiv = document.getElementById('messages');
const inputField = document.getElementById('input');

// WebSocket connection
const socket = new WebSocket('ws://localhost:3000');

// Function to add messages to the messages div
function addMessage(message) {
  const p = document.createElement('p');
  p.innerText = message;
  messagesDiv.appendChild(p);
}

// Function to send a message
function sendMessage() {
  const message = inputField.value;
  if (message.trim() !== '') {
    socket.send(message);
    inputField.value = '';
  }
}

// Event listener for receiving messages
socket.addEventListener('message', function(event) {
  const message = event.data;
  addMessage(message);
});

// Event listener for WebSocket connection open
socket.addEventListener('open', function() {
  addMessage('Connected to the server');
});
