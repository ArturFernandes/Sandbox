function buttonClick(){
    let nome = document.getElementById("inputName").value;

    if (nome==0) {
        document.getElementById("generalText").innerHTML = "Nenhum nome foi digitado";
    } else if (nome.indexOf(Number)!=-1) {
        document.getElementById("generalText").innerHTML = "Apenas letras são aceitas!";
    } else {
        document.getElementById("resultado").innerHTML = "O nome digitado foi " + nome;
    }
}
