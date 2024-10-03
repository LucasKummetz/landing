// Função para definir um cookie seguro
function setSecureCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; Secure; HttpOnly; SameSite=Strict`;
}

// Adiciona um listener para o envio do formulário
document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;

    // Define um cookie seguro com o nome e email do usuário
    setSecureCookie('username', name, 7);
    setSecureCookie('useremail', email, 7);

    // Exibe a mensagem de confirmação
    const messageElement = document.createElement('div');
    messageElement.textContent = 'Registro concluído!';
    messageElement.className = 'confirmation-message'; // Adiciona a nova classe
    this.appendChild(messageElement); // Adiciona a mensagem abaixo do formulário

    // Limpa o formulário após 3 segundos
    setTimeout(() => {
        this.reset(); // Limpa os campos do formulário
        messageElement.remove(); // Remove a mensagem
    }, 5000);
});
