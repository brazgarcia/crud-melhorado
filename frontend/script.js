const API_URL = 'http://localhost:3000/users';

const form = document.getElementById('userForm');
const list = document.getElementById('usersList');

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cidade = document.getElementById('cidade').value;

    await fetch (API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, cpf, email, telefone, cidade })
    });

    form.reset();
    loadUsers();
});

async function loadUsers() {
    const res = await fetch(API_URL);
    const users = await res.json();

    list.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = `${user.nome} | ${user.cpf} | ${user.email} | ${user.telefone} | ${user.cidade}<button onclick="deleteUser(${user.id})">Excluir</button>`;
        list.appendChild(li);    
    });
}
 
async function deleteUser(id) {
    await fetch(`${API_URL}/${id}`, {method: 'DELETE' });
    loadUsers();
}

loadUsers();