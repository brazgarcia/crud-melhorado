const API_URL = 'http://localhost:3000/users';

const form = document.getElementById('userForm');
const list = document.getElementById('usersList');

form.addEventListeners('submit', async(e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cidade = document.getElementById('cidade').value;

    await fetch ()
});

 