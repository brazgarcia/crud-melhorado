const API_URL_users = 'http://localhost:3000/users';

const userList = document.getElementById('userList');

loadusers();

// Carregar lista de usuários
async function loadusers() {
    const res = await fetch(API_URL_users);
    const users = await res.json();

    userList.innerHTML = '';
    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.nome}</td>
            <td>${user.email}</td>
            <td>${user.nivel}</td>
            <td><button 
                class="botao botao-responsividade" 
                onclick="edituser(this)"
                data-id="${user.id}"
                data-nome="${user.nome}"
                data-email="${user.email}"
                data-nivel="${user.nivel}"
            >Atualizar</button></td>
            <td><button class="botao botao-responsividade" onclick="deleteuser(${user.id})">Excluir</button></td>
        `;
        userList.appendChild(tr);    
    });
}

// Atualizar usuário
function edituser(button) {
    document.getElementById('nome').value = button.dataset.nome;
    document.getElementById('email').value = button.dataset.email;
    document.getElementById('senha').value = button.dataset.role;
    document.getElementById('nivel').value = button.dataset.nivel;
}

// Deletar usuário
async function deleteuser(id) {
    await fetch(`${API_URL_users}/${id}`, {method: 'DELETE' });
    loadusers();
}

loadusers();