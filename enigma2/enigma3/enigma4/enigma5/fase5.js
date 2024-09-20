

function Vsenha() {
    var password = document.getElementById('resposta').value.toUpperCase()
    var verdadeira = 'PAPA' 


    if (password === verdadeira) {
        // localStorage.setItem("fase3Key", "05b47e00-4df8-4fd4-8d49-c3ada26d08da");
        console.log("sua vida")
        window.location.href = "enigma4/fase4.html"
        // window.location.href = "enigma4/fase4.html"
    } else {
        alert("Erro")
    }
}