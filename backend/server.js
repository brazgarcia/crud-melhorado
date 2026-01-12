const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let idCounterUser = 1;

let products = [];
let idCounterProduct = 1;

// Users
    // Create
    app.post('/users', (req, res) => {
        const user = {
            id: idCounterUser++,
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            cidade: req.body.cidade
        };
        users.push(user);
        res.status(201).json(user);
    });

    // Read
    app.get('/users', (req, res) => {
        res.json(users);
    });

    // Update
    app.put('/users/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const user = users.find(u => u.id === id);

        if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

        user.nome = req.body.nome;
        user.email = req.body.email;
        user.telefone = req.body.telefone;
        user.cidade = req.body.cidade;
        res.json(user);
    });

    // Delete
    app.delete('/users/:id', (req, res) => {
        users = users.filter(u => u.id !== parseInt(res.params.id));
        res.status(204).send();
    });

// Products
    // Creat
    app.post('/products', (req, res) => {
        const product = {
            id: idCounterProduct++, 
            nomeProduto: req.body.nomeProduto,
            codBarras: req.body.codBarras,
            descricao: req.body.descricao,
            categoria: req.body.categoria
        };
        products.push(product);
        res.status(201).json(product);
    });

    // Read
    app.get('/products', (req, res) => {
        res.json(products);
    });

    // Update
    app.put('/products/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const product = products.find(u => u.id === id);

        if(!product) return res.status(404).json({ error: "Produto não encontrado" });

        product.nomeProduto = req.body.nomeProduto;
        product.codBarras = req.body.codBarras;
        product.descricao = req.body.descricao;
        product.categoria = req.body.categoria;
        res.json(product);
    });

    // Delete
    app.delete('/products/:id', (req, res) => {
        products = products.filter(u => u.id !== parseInt(req.params.id));
        res.status(204).send();
    });

// Startar servidor
app.listen(3000, () => {
    console.log("Servidor rodando no link http://localhost:3000");
})


