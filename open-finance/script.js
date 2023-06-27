function createForm() {
    let divTable = document.getElementById('table');

    let iTitle = document.createElement('input');
    let iValueMoney = document.createElement('input');
    let iCategory = document.createElement('input');
    let iDate = document.createElement('input');
    let BtnRegister = document.createElement('button');
    let select = document.createElement('select');
    let optionPayment = document.createElement('option')
    let optionDoor = document.createElement('option')
    let sellTransition = document.createElement('option');
    let sTitle = document.createElement('span')
    let sValueMoney = document.createElement('span')
    let sCategory = document.createElement('span')
    let sDate = document.createElement('span')

    iTitle.id = 'title';
    iValueMoney.id = 'money';
    iCategory.id = 'category';
    iDate.id = 'Date';

    divTable.innerHTML = "";
    iDate.type = "date";
    iCategory.type = "text";
    iTitle.type = "text";
    iValueMoney.type = "number";

    sTitle.innerText = "Título:"
    sValueMoney.innerText = "Valor:"
    sCategory.innerText = "Categoria:"
    sDate.innerText = "Data:"

    iTitle.placeholder = "Título"
    iCategory.placeholder = "Categoria";
    iValueMoney.placeholder = "100,00";

    BtnRegister.innerText = "Enviar";

    sellTransition.innerText = "Selecione a transação"
    optionPayment.value = "saida"
    optionDoor.value = "entrada";
    optionPayment.innerText = 'Saída';
    optionDoor.innerText = 'Entrada'

    select.appendChild(sellTransition);
    select.appendChild(optionDoor);
    select.appendChild(optionPayment);

    document.getElementById('form').appendChild(select);
    document.getElementById('form').appendChild(sTitle)
    document.getElementById('form').appendChild(iTitle);
    document.getElementById('form').appendChild(sValueMoney)
    document.getElementById('form').appendChild(iValueMoney);
    document.getElementById('form').appendChild(sCategory)
    document.getElementById('form').appendChild(iCategory);
    document.getElementById('form').appendChild(sDate)
    document.getElementById('form').appendChild(iDate);
    document.getElementById('form').appendChild(BtnRegister);

    BtnRegister.addEventListener('click', () => {
        console.log(selectedOption, iValueMoney.value, iCategory.value, iDate.value)
        sendForm(select.value, iTitle.value, iValueMoney.value, iCategory.value, iDate.value);
        cleanForm();
    })

    let selectedOption = "";
    document.querySelector('select').addEventListener('change', () => {
        selectedOption = select.options[select.selectedIndex].value;
    })

}

function sendForm(select, title, valueMoney, category, date) {
    if (select !== "" && title !== "" && valueMoney !== "" && category !== "" && date !== "") {
        let info = {
            typeTransition: select,
            title: title,
            value: valueMoney,
            category: category,
            date: date
        }
        optionSelected(info.typeTransition, info.value)
        alert("Formulário enviado com sucesso!");
        console.log(info)
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function cleanForm() {
    document.getElementById('title').value = "";
    document.getElementById('money').value = "";
    document.getElementById('category').value = "";
}

let cashInflow = 0;
let saida = 0;
let total = 0;

function optionSelected(transition, value) {
    if (transition == "entrada") {
        cashInflow += Number(value);
        document.getElementById('entrada').innerText = `+R$ ${cashInflow},00`
    } else if (transition == "saida") {
        saida += Number(value);
        if (saida > cashInflow) {
            alert("Saldo insuficiente")
        } else {
            document.getElementById('saida').innerText = `-R$ ${saida}`;
        }

        total = cashInflow - saida;
        if(total < 0) {
            total = 0;
        }
        
        document.getElementById('total').innerText = `R$ ${total},00`;
    }
}



document.getElementById('newTransition').addEventListener('click', function () {
    createForm();
    document.getElementById('newTransition').disabled = true;
});
