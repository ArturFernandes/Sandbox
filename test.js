document.getElementById("subjectForm").addEventListener("submit", function(event){
    event.preventDefault();
    console.log({event});

    let formId = new FormData(event.target);

    //setar const das matérias no geral e da última estudada
    const studiedSubjects = document.getElementById("studiedSubjects");
    const lastStudiedSubject = document.createElement("div");
    
    //adicionar a útltima matéria estuada por meio da função .add com o valor do input
    lastStudiedSubject.classList.add("oldSubject");
    lastStudiedSubject.innerHTML = formId.get("inputSubject");

    //colocar o item criado acima dentro da div "studiedSubjects"
    studiedSubjects.append(lastStudiedSubject);
})

