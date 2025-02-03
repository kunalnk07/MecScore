// Basic Calculator Function
function add() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    document.getElementById('result').textContent = result.toFixed(2);
}

// Chatbot Functionality
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatLog = document.getElementById('chat-log');
    chatLog.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    // Add chatbot response logic here
    document.getElementById('user-input').value = '';
}
