const API_URL_users = 'http://localhost:3000/users';

const userForm = document.getElementById('userForm');
const userList = document.getElementById('userList');

// Criar usuário
userForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cidade = document.getElementById('cidade').value;

    await fetch (API_URL_users, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, cpf, email, telefone, cidade })
    });

    userForm.reset();
    loadUsers();
});


// Carregar lista de usuários
async function loadUsers() {
    const res = await fetch(API_URL_users);
    const users = await res.json();

    userList.innerHTML = '';
    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.nome}</td>
            <td>${user.cpf}</td>
            <td>${user.email}</td>
            <td>${user.telefone}</td>
            <td>${user.cidade}</td>
            <td><button class="botao botao-responsividade" onclick="putUser(${user.id})">Atualizar</button><td>
            <td><button class="botao botao-responsividade" onclick="deleteUser(${user.id})">Excluir</button><td>
        `;
        userList.appendChild(tr);    
    });
}

// Atualizar usuário
async function putUser(id) {
   document.getElementById('nome').value = 'user.nome';
}


// Deletar usuário
async function deleteUser(id) {
    await fetch(`${API_URL_users}/${id}`, {method: 'DELETE' });
    loadUsers();
}

loadUsers();

