const livros = document.querySelectorAll(".livro");

const botaoAnterior = document.getElementById("pagina-anterior");
const botaoProxima = document.getElementById("proxima-pagina");
const numeroPagina = document.querySelector(".pagina-atual");
const quantidadeLivros = document.querySelector(".quantidade-livros");

// Configuração da paginação

// define quando livros serão mostrados em cada página
const livrosPorPagina = 4;

let paginaAtual = 1;

// calculando o total de paginas

// divide a quantidade de livros pela quantidade de livros por pagina
// Math.ceil() -> arredonda o resultado para cima
const totalPagina = Math.ceil(livros.length / livrosPorPagina)
 
// funcao responsavel por mostrar a pagina (atualizar os elementos)
function mostrarPagina() {
    const inicio = (paginaAtual - 1) * livrosPorPagina

    const fim = inicio + livrosPorPagina

    livros.forEach((livro, indice) => {
        if(indice >= inicio && indice < fim){
            // se estiver, mostra o livro
            livro.style.display = "grid";
        } else {
            // se não estiver. esconde o livro
            livro.style.display = "none";
        }
    });

    // atualiza no HTML, o numero da pagina atual
    numeroPagina.textContent = paginaAtual

    // inicialmente, consideramos "fim" como a posição do ultimo livro mostrando
    let ultimoLivro = fim;

    // se o valor calculado ultrapassar a quantidade real de livros, usamos a quantidade total
    if(ultimoLivro > livros.length) {
        ultimoLivro = livros.length
    }

    // atualiza o texto que informa quantos livros que estão sendo mostrados 
    quantidadeLivros.textContent = `Mostrando ${ultimoLivro} de ${livros.length} livros`;
}

// evento de click no botão de próxima página
botaoProxima.addEventListener("click", () => {

    // só permite avançar se ainda existir uma próxima página
    if(paginaAtual < totalPagina) {
        
        // avança uma página
        paginaAtual++

        mostrarPagina();
    }
})

// evento de click no botão de página anterior
botaoAnterior.addEventListener("click", () => {

    // só permite voltar se não estivermos na primeira página
    if(paginaAtual > 1) {

        // voltamos uma página 
        paginaAtual--

        mostrarPagina();
    }
})

// quando a página carregar, precisamos executar a função de mostrar página uma vez para esconder os livros
mostrarPagina();
