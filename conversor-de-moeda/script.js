/*function convert() {
    let select = document.getElementById("select-moeda")
    let valor = select.options[select.selectedIndex].value;
    
    let selectTwo = document.getElementById("select-moeda-2");
    let valueTwo = selectTwo.options[selectTwo.selectedIndex].value;
    
    const url = `https://economia.awesomeapi.com.br/json/last/${valor}-${valueTwo}`
    fetch(url).then((res) => {
        res.json().then((data) => {
            console.log(data);
        })
    })
}*/

async function convert() {
    let select = document.getElementById("select-moeda")
    let valor = select.options[select.selectedIndex].value;
    let selectTwo = document.getElementById("select-moeda-2");
    let valueTwo = selectTwo.options[selectTwo.selectedIndex].value;
    
    const url = `https://economia.awesomeapi.com.br/json/last/${valor}-${valueTwo}`
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}