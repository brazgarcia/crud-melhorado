const API_URL_products = 'http://localhost:3000/products';

const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');

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
        headers: { 'Content-Type': 'application/json' },
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
        <td><button 
            class="botao botao-responsividade" 
            onclick="editProduct(this)"
            data-id="${product.id}"
            data-nomeProduto="${product.nomeProduto}"
            data-codBarras="${product.codBarras}"
            data-categoria="${product.categoria}"
            data-marca="${product.marca}"
            data-descricao="${product.descricao}"
        >Atualizar</button></td>
        <td><button class="botao botao-responsividade" onclick="deleteProduct(${product.id})">Deletar</button></td>
        `;
        productList.appendChild(tr);
    });
}

// Atualizar produto
function editProduct(button) {

    document.getElementById('nomeProduto').value = button.dataset.nomeproduto;
    document.getElementById('codBarras').value = button.dataset.codbarras;
    document.getElementById('categoria').value = button.dataset.categoria;
    document.getElementById('marca').value = button.dataset.marca;
    document.getElementById('descricao').value = button.dataset.descricao;

}

// Deletar produto
async function deleteProduct(id) {
    await fetch(`${API_URL_products}/${id}`, {method: 'DELETE'});
    loadProducts();
}

loadProducts();