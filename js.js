function initMap() {
    var options = {
        zoom: 8,
        center: { lat: 43.212030, lng:  27.900408 }
    }
    var map = new google.maps.Map(document.getElementById('map'), options);
}
document.addEventListener('DOMContentLoaded', function() {
    const chatbox = document.getElementById('chatbox');
    const chatboxToggle = document.getElementById('chatbox-toggle');
    const chatboxMessages = document.getElementById('chatbox-messages');
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');
    const closeChat = document.getElementById('closeChat');

    chatboxToggle.addEventListener('click', () => {
        chatbox.style.transform = chatbox.style.transform === 'scale(1)' ? 'scale(0)' : 'scale(1)';
    });

    closeChat.addEventListener('click', () => {
        chatbox.style.transform = 'scale(0)';
    });

    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            const messageDiv = document.createElement('div');
            messageDiv.textContent = `You: ${message}`;
            chatboxMessages.appendChild(messageDiv);
            chatInput.value = '';
            chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
        }
    }
});
