function consultarEndereco() {
    const cep = document.getElementById("cep").value
    
    if(cep.length !== 8) {
        alert("cep inválido");
        return;
    }

    const url = `http://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then((res) => {
        res.json().then((data) => {
            console.log(data)
            mostraNaTela(data);
        })
    })
}

function mostraNaTela(dados){
    let result = document.querySelector("#result")

    result.innerHTML = `<p>Localidade: ${dados.localidade}.</p>
                        <p>ddd: ${dados.ddd}.</p>
                        <p>Logradouro: ${dados.logradouro}.</p>
                        <p>Uf: ${dados.uf}.</p>
    
    `
} 