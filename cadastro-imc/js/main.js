class User {
    constructor(name, age, height, weight, imc) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.imc = imc;
    }
}

class Imc {

    constructor() {
        this.btn = document.getElementById('btnForm');
        this.nameImput = document.getElementById('name');
        this.ageImput = document.getElementById('age');
        this.heightImput = document.getElementById('height');
        this.weightImput = document.getElementById('weight');
        this.users = [];
        this.btn.addEventListener("click", () => this.validateForm());
    }

    validateForm() {
        const name = this.nameImput.value;
        const age = this.ageImput.value;
        const height = this.heightImput.value;
        const weight = this.weightImput.value;

        if (name && age && height && weight) {
            const imc = this.imcCalculation(weight, height)
            const user = new User(name, age, height, weight, imc)
            const sucesso = `Enviado com sucesso.`

            this.users.push(user);
            this.msgSendinData(sucesso, "#4eeb5a47")
            this.cleanForm();
        } else {
            const fail = `Faltam dados.`;

            this.msgSendinData(fail, "#ff00004f");
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
        this.users.forEach((user, index) => {
            console.log(`Usuários ${index + 1}`)
            console.log(`Nome: ${user.name}; Idade: ${user.age}; Altura: ${user.height}; Peso: ${user.weight}`);
        })
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

new Imc()


