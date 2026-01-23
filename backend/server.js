const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

let users = [];
let idCounter = 1;

// Users
    // Create
    app.post('/users', (req, res) => {
        const user = {
            id: idCounter++,
            nome: req.body.nome,
            cpf: req.body.cpf,
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
        user.cpf = req.body.cpf;
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

// Startar servidor
app.listen(port, () => {
    console.log(`Servidor rodando no link http://localhost:${port}`);
})


