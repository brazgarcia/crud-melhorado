const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

let users = [];
let idCounter = 1;

let people = [];
let idCounterPeople = 1;

let products = [];
let idCounterProducts = 1;

// Users
    // Create
    app.post('/users', (req, res) => {
        const user = {
            id: idCounter++,
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            role: req.body.role
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
        user.cpf = req.body.cpf;
        user.email = req.body.email;
        user.telefone = req.body.telefone;
        user.cidade = req.body.cidade;
        res.json(user);
    });

    // Delete
    app.delete('/users/:id', (req, res) => {
        users = users.filter(u => u.id !== parseInt(req.params.id));
        res.status(204).send();
    });

// People
    // Create
    app.post('/people', (req, res) => {
        const person = {
            id: idCounterPeople++,
            nome: req.body.nome,
            cpf: req.body.cpf,
            email: req.body.email,
            telefone: req.body.telefone,
            cidade: req.body.cidade
        };
        people.push(person);
        res.status(201).json(person);
    });

    // Read
    app.get('/people', (req, res) => {
        res.json(people);
    });

    // Update
    app.put('/people/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const person = people.find(u => u.id === id);

        if (!person) return res.status(404).json({ error: "Pessoa não encontrada" });

        person.nome = req.body.nome;
        person.cpf = req.body.cpf;
        person.email = req.body.email;
        person.telefone = req.body.telefone;
        person.cidade = req.body.cidade;
        res.json(person);
    });

    // Delete
    app.delete('/people/:id', (req, res) => {
        people = people.filter(u => u.id !== parseInt(req.params.id));
        res.status(204).send();
    });

  
// Products
    // Create
    app.post('/products', (req, res) => {
        const product = {
            id: idCounterProducts++,
            nomeProduto: req.body.nomeProduto,
            codBarras: req.body.codBarras,
            categoria: req.body.categoria,
            marca: req.body.marca, 
            descricao: req.body.descricao
        };
        products.push(product)
        res.status(201).json(product);
    });

    // Read
    app.get('/products', (req, res) => {
        res.json(products);
    });

    // Put
    app.put('/products/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const product = products.find(u => u.id === id);

        if(!product) return res.status(404).json({ error: 'Produto não encontrado!' });

        product.nomeProduto = req.body.nomeProduto;
        product.codBarras = req.body.codBarras;
        product.categoria = req.body.categoria;
        product.marca = req.body.marca;
        product.descricao = req.body.descricao;
        res.json(product);
    });

    // Delete
    app.delete('/products/:id', (req, res) => {
        products = products.filter(u => u.id !== parseInt(req.params.id));
        res.status(204).send();
    })

// Startar servidor
app.listen(port, () => {
    console.log(`Servidor rodando no link http://localhost:${port}`);
})


