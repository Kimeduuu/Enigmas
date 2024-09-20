const accessKey = localStorage.getItem("fase3Key")
const accessKey4 = localStorage.setItem("fase4Key");

if (accessKey == null) {
    window.location.href = "../fase3.html";
} else if (accessKey4){
    window.location.href = "../fase5.html";
}


function Vsenha() {
    const senhaCriada = "4"
    var password = document.getElementById('resposta').value


    if (password === senhaCriada) {
        localStorage.setItem("fase4Key", "fc19083e-eab6-49e3-b1b9-444c242a2f19");
        console.log('teste')
        window.location.href = "enigma5/fase5.html"
    } else {
        alert("Erro")
    }
}