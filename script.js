document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        
        console.log('Tentativa de login detectada para fins de simulação.');
        console.log(`Nome de Usuário: ${username}`);
        console.log(`Senha: ${password}`);
        
        
        alert('Dados enviados. Esta é uma simulação de phishing. Verifique sempre o endereço do site!');

        
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    });
});