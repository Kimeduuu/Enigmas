const accessKey2 = localStorage.getItem("fase2Key")

if(accessKey2){
    window.location.href = "./enigma2/fase2.html"
}

function Vsenha() {
    const senhaCriada = "CHINA"
    var password = document.getElementById('password').value.toUpperCase()



    if (password === senhaCriada) {
        localStorage.setItem("test", "389e2557-6b24-4222-8668-fc4257b2a8da");
        
        window.location.href = "enigma2/fase2.html"

    } else {
        alert("Erro");
    }
}
