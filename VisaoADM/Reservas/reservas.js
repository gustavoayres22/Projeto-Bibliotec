const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const statusRetirda = document.querySelectorAll(".status");

checkboxes.forEach((caixinha, indice) => {
    // console.log("caixinha: " , caixinha);
    // console.log("indicie: " , indice);
    // console.log("lista: " , caixinha);

    caixinha.addEventListener("change", () => {
        
        if(caixinha.checked == true) {
            statusRetirada[indice].classList.remove("Aguardando");
            statusRetirada[indice].classList.add("retirado");
            statusRetirada[indice].Textcontent="Retirado";
        }
        else {
            
            statusRetirada[indice].classList.remove("Retirado");
            statusRetirada[indice].classList.add("Aguardando");
            statusRetirada[indice].Textcontent="Aguardando retirada";
        }

    })
})