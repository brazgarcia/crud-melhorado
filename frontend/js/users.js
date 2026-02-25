const API_URL_users = 'http://localhost:3000/users';

const userForm = document.getElementById('userForm');

// Criar usuário
userForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const nivel = document.getElementsByName('role').value;

    await fetch (API_URL_users, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha, nivel })
    });

    userForm.reset();
    // loadusers();
});



