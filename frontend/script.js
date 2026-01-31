const API_URL = 'http://localhost:3000/users';

const form = document.getElementById('userForm');
const list = document.getElementById('userList');

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
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${user.nome}</td><td>${user.cpf}</td><td>${user.email}</td><td>${user.telefone}</td><td>${user.cidade}</td><td><button class="botao" onclick="putUser(${user.id})">Atualizar</button><td><td><button class="botao" onclick="deleteUser(${user.id})">Excluir</button><td>`;
        list.appendChild(tr);    
    });
}

 
async function deleteUser(id) {
    await fetch(`${API_URL}/${id}`, {method: 'DELETE' });
    loadUsers();
}

loadUsers();