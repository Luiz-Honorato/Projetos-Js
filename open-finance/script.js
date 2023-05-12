function createForm() {
    let divTable = document.getElementById('table');
    let iTitle = document.createElement('input');
    let iValueMoney = document.createElement('input');
    let iCategory = document.createElement('input');
    let iDate = document.createElement('input');
    let BtnRegister = document.createElement('button');

    divTable.innerHTML = "";
    iDate.type = "date";
    iCategory.type = "text";
    iTitle.type = "text";
    iValueMoney.type = "number";

    iTitle.placeholder = "Título"
    iCategory.placeholder = "Categoria";
    iValueMoney.placeholder = "100,00";

    BtnRegister.innerText = "Enviar";

    document.getElementById('form').innerHTML += "Título:"
    document.getElementById('form').appendChild(iTitle);
    document.getElementById('form').innerHTML += "Valor:";
    document.getElementById('form').appendChild(iValueMoney);
    document.getElementById('form').innerHTML += "Categoria:";
    document.getElementById('form').appendChild(iCategory);
    document.getElementById('form').innerHTML += "Data:";
    document.getElementById('form').appendChild(iDate);
    document.getElementById('form').appendChild(BtnRegister);

    BtnRegister.addEventListener('click', function () {
        console.log(iTitle, iValueMoney, iCategory, iDate);
        if (iTitle.value !== "" && iValueMoney.value !== "" && iCategory.value !== "" && iDate.value !== "") {
            // exibe alerta de sucesso
            alert("Formulário enviado com sucesso!");
            // limpa os campos do formulário
            iTitle.value = "";
            iValueMoney.value = "";
            iCategory.value = "";
            iDate.value = "";
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    })
    
}

document.getElementById('newTransition').addEventListener('click', function () {
    createForm();
    document.getElementById('newTransition').disabled = true;
});
