class User {
    constructor(name, age, height, weight, imc) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.imc = imc;
    }
}

class Bd {
    constructor() {
        let id = localStorage.getItem('id');
        if (id === null) {
            localStorage.setItem('id', 0);
        }
    }

    getNextId() {
        let nextId = localStorage.getItem('id');
        return parseInt(nextId) + 1;
    }

    saveData(user) {
        let id = this.getNextId();
        localStorage.setItem(id, JSON.stringify(user));
        localStorage.setItem('id', id);
    }

    recuperationData() {
        let users = [];
        const id = localStorage.getItem('id')
        
        for (let i = 1; i <= id; i++) {
            const userData = JSON.parse(localStorage.getItem(i));

            if(userData === null) continue;
            else users.push(userData);
        }
        return users;
    }

}

class Imc {

    constructor() {
        this.nameImput = document.getElementById('name');
        this.ageImput = document.getElementById('age');
        this.heightImput = document.getElementById('height');
        this.weightImput = document.getElementById('weight');
    }


    registerForm() {
        const name = this.nameImput.value;
        const age = this.ageImput.value;
        const height = this.heightImput.value;
        const weight = this.weightImput.value;

        if (name && age && height && weight) {
            const imc = this.imcCalculation(weight, height)
            const user = new User(name, age, height, weight, imc)
            const sucesso = `Dados enviado com sucesso.`

            BD.saveData(user);
            this.msgSendinData(sucesso, "#4eeb5a47")
            this.cleanForm();
        } else {
            const msgFailed = `Todos os dados são obrigatórios.`;

            this.msgSendinData(msgFailed, "#ff00004f");
            console.log("Não existe nome")
        }
    }


    cleanForm() {
        this.nameImput.value = "";
        this.ageImput.value = "";
        this.heightImput.value = "";
        this.weightImput.value = "";
    }

    imcCalculation(weight, height) {
        const imc = parseFloat(weight / (height * height));
        return imc.toFixed(4);
    }

    listAll() {
        let listUsers= BD.recuperationData()
        let tbodyUser = document.getElementById('tbodyUser');
        
        listUsers.forEach(e => {
            let row = tbodyUser.insertRow();
            
            row.insertCell(0).innerHTML = `${e.name}`;
            row.insertCell(1).innerHTML = `${e.age}`;
            row.insertCell(2).innerHTML = `${e.height}`;
            row.insertCell(3).innerHTML = `${e.weight}`;
            row.insertCell(4).innerHTML = `${e.imc}`;
        });    
    }

    msgSendinData(msg, bgcolor) {
        const divMsg = document.getElementById("msg");
        const span = document.createElement("span");

        divMsg.innerHTML = "";
        divMsg.style.display = "block";
        divMsg.style.border = "1px solid #33333";
        divMsg.style.backgroundColor = `${bgcolor}`;
        span.innerText = `${msg}`;
        divMsg.appendChild(span);

        setTimeout(() => {
            divMsg.style.display = "none";
        }, 3000)
    }

}
const BD = new Bd();
const imc = new Imc();
const pathName = () => {

    if (document.location.pathname === '/index.html') {
        window.addEventListener('load', () => {
            imc.listAll();
        });
    }

    if (document.location.pathname === '/cadastro.html') {
        const btnForm = document.getElementById('btnForm');
        btnForm.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário
            imc.registerForm();
        });
    }

}
pathName();



