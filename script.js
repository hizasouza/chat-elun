const sendButton = document.getElementById('sendButton');
const userInput = document.getElementById('userInput');
const chatBox = document.getElementById('chatBox');

// Substitua pelo valor real da sua cadeia de conexão do Copilot Studio
const CONNECTION_STRING = "SUA_CADEIA_DE_CONEXAO_AQUI";

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const text = userInput.value.trim();
    if (text === '') return;

    // Exibe a mensagem do usuário na tela
    appendMessage(text, 'user-message');
    userInput.value = '';

    // Simula a integração da API/SDK de comunicação
    fetchBotResponse(text);
}

function appendMessage(text, className) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    messageElement.textContent = text;
    chatBox.appendChild(messageElement);
    
    // Rola a caixa de chat para baixo automaticamente
    chatBox.scrollTop = chatBox.scrollHeight;
}

function fetchBotResponse(userQuery) {
    // Exemplo de integração simulando a chamada ao endpoint/SDK
    setTimeout(() => {
        const botResponse = `(Resposta do Elun baseada nos documentos): Você perguntou: "${userQuery}". O sistema do Elun processou a consulta com sucesso!`;
        appendMessage(botResponse, 'bot-message');
    }, 1000);
}