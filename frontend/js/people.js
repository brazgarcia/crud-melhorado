const API_URL_people = 'http://localhost:3000/people';

const personForm = document.getElementById('personForm');
const personList = document.getElementById('personList');

// Criar usuário
personForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cidade = document.getElementById('cidade').value;

    await fetch (API_URL_people, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, cpf, email, telefone, cidade })
    });

    personForm.reset();
    loadPeople();
});


// Carregar lista de usuários
async function loadPeople() {
    const res = await fetch(API_URL_people);
    const people = await res.json();

    personList.innerHTML = '';
    people.forEach(person => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${person.nome}</td>
            <td>${person.cpf}</td>
            <td>${person.email}</td>
            <td>${person.telefone}</td>
            <td>${person.cidade}</td>
            <td><button 
                class="botao botao-responsividade" 
                onclick="editPerson(this)"
                data-id="${person.id}"
                data-nome="${person.nome}"
                data-cpf="${person.cpf}"
                data-email="${person.email}"
                data-telefone="${person.telefone}"
                data-cidade="${person.cidade}"
            >Atualizar</button></td>
            <td><button class="botao botao-responsividade" onclick="deletePerson(${person.id})">Excluir</button></td>
        `;
        personList.appendChild(tr);    
    });
}

// Atualizar usuário
function editPerson(button) {

    document.getElementById('nome').value = button.dataset.nome;
    document.getElementById('cpf').value = button.dataset.cpf;
    document.getElementById('email').value = button.dataset.email;
    document.getElementById('telefone').value = button.dataset.telefone;
    document.getElementById('cidade').value = button.dataset.cidade;
 
}


// Deletar usuário
async function deletePerson(id) {
    await fetch(`${API_URL_people}/${id}`, {method: 'DELETE' });
    loadPeople();
}

loadPeople();

