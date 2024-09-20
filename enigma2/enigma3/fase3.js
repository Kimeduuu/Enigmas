const accesKey2 = localStorage.getItem('fase2Key')
const accessKey = localStorage.getItem("fase3Key")

if (accessKey === null) {
    window.location.href = "../fase2.html";
} else if(accessKey){
    window.location.href = "./enigma4/fase4.html";
}


function Vsenha() {
    const senhaCriada = "DESERTO"
    var password = document.getElementById('resposta').value.toUpperCase()


    if (password === senhaCriada) {
        localStorage.setItem("fase3Key", "05b47e00-4df8-4fd4-8d49-c3ada26d08da");
        window.location.href = "enigma4/fase4.html"
        // window.location.href = "enigma4/fase4.html"
    } else {
        alert("Erro")
    }
}