const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let idCounterUser = 1;

let products = [];
let idCounterProducts = 1;

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
        const user = (u => u.id === id);

        if(!user) return res.status(404).json({Error: "Usuário não encontrado" });

        user.nome = req.body.nome;
        user.email = req.body.email;
        user.telefone = req.body.telefone;
        user.cidade = req.bosy.cidade;
        res.json(users);
    });

    // Delete
    app.delete('/users/:id', (req, res) => {
        users = users.filter(u => u.id !== parseInt(res.params.id));
        res.status(204).send();
    });

// Products
    // Creat
    app.post('/products', (req, res) => {
        product = {
            id: idCounterProducts++, 
            nomeProduto: req.params.nome-produto,
            codBarra: req.params.codBarras,
            descricao: req.params.descricao,
            categoria: req.params.categoria
        };
        products.push(product);
        app.status(201).json();
    });

    // Read
    app.get('/produtcs', (req, res) => {
        res.json(products);
    });

    // Update
    app.put('/products/:id', (req, res) => {
        
    })

app.listen(3000, () => {
    console.log("Servidor rodando no link http://localhost:3000");
})


