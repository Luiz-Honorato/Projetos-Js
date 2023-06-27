
const prencherForm = (data) => {
    document.querySelector("#estado").value = `${data.uf}`;
    document.querySelector("#address").value = `${data.logradouro}`;
    document.querySelector("#city").value = `${data.localidade}`;
    document.querySelector("#bairro").value = `${data.bairro}`;
    document.querySelector("#estado").value = `${data.uf}`;
}

function clearCamp() {
    document.querySelector("#estado").value;
    document.querySelector("#address").value;
    document.querySelector("#city").value;
    document.querySelector("#bairro").value;
    document.querySelector("#estado").value;
}

function cepValido(cep) {
   return cep.length === 8 && /^[0-9]+$/.test(cep)
}
const searcheCep = () => {
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    if(cepValido(cep)) {
        clearCamp();
        fetch(url).then((res) => {
            res.json().then((data) => {
                if(data.hasOwnProperty('erro')) {
                    document.querySelector("#address").value = "Cep Não encontrado";
                    return
                } else {
                    prencherForm(data);
                }
            })
        })
    } else {
        document.querySelector("#address").value = "Cep inválido";
        return
    }


}
document.querySelector("#cep").addEventListener('focusout', searcheCep);