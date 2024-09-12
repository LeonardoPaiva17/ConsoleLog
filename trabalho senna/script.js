
function armazenar(){
    var numeroInput = document.getElementById("numeroInput").value;
    localStorage.setItem("numeroSalvo", numeroInput);
    console.log("Número registrado com sucesso!")
}
