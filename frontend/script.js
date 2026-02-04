const API_URL_users = 'http://localhost:3000/users';
const API_URL_products = 'http://localjost:3000/products';

const userForm = document.getElementById('userForm');
const userList = document.getElementById('userList');
const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList'); 


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

// Deletar usuário
async function deleteUser(id) {
    await fetch(`${API_URL_users}/${id}`, {method: 'DELETE' });
    loadUsers();
}

// Criar Produto
productForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    
    const nomeProduto = document.getElementById('nomeProduto').value;
    const codBarras = document.getElementById('codBarras').value;
    const categoria = document.getElementById('categoria').value;
    const marca = document.getElementById('marca').value;
    const descricao = document.getElementById('descricao').value;

    await fetch (API_URL_products, {
        method: 'POST',
        headers: { 'content-type': 'application/json '},
        body: JSON.stringify({ nomeProduto, codBarras, categoria, marca, descricao })
    });

    productForm.reset();
    loadProducts();
});

// Carregar lista de produtos
async function loadProducts() {
    const res = await fetch(API_URL_products);
    const products = await res.json();

    productList.innerHTML = '';
    products.forEach(product => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${product.nomeProduto}</td>
        <td>${product.codBarras}</td>
        <td>${product.categoria}</td>
        <td>${product.marca}</td>
        <td>${product.descricao}</td>
        <td><button class="botao botao-responsividade" onclick="putProduct">${product.id}</button></td>
        <td><button class="botao botao-responsividade" onclick="deleteProduct">${product.id}</button></td>
        `;
        productList.appendChild(tr);
    });
}

// Deletar produto
async function deleteProduct(id) {
    await fetch(`${API_URL_products}/${id}`, {method: 'DELETE'});
    loadProducts();
}

loadUsers();
loadProducts();