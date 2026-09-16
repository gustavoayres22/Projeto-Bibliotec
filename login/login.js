// console.log("Hello World!");
// alert("Hello World!");

// var nome = "marcos" NÂO VAMOS USAR NUNCAAAAAAAAAA 

const campoSenha = document.getElementById("senha");
const btnSenha = document.querySelector("#mostrar-senha");

btnSenha.addEventListener("click", function() {
    
    campoSenha.type = campoSenha.type == "password" ? "text" : "password";

    // if(campoSenha.type == "password") {
    //     campoSenha.type = "text";
    // } else {
    //     campoSenha.type = "password";
    // }
})