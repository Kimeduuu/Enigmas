const accessKey = localStorage.getItem("test")
const accessKey2 = localStorage.getItem("fase2Key")

if (accessKey == null) {
    window.location.href = "../index.html";
} else if(accessKey2){
    window.location.href = "./enigma3/fase3.html"
}

function Vsenha() {
    const senhaCriada = "01:23"
    var password = document.getElementById('resposta').value


    if (password === senhaCriada) {
        localStorage.setItem("fase3Key", "fd07fe97-5c65-4c0a-8e1d-57759d89a8dc");
        window.location.href = "enigma3/fase3.html"
        
    } else {
        alert("Erro");
    }
}