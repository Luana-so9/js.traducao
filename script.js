const imagens = [
    "imagens/imagem_1.webp",
    "imagens/imagem_2.webp.png",
    "imagens/pagina_inicial.png",
    "imagens/imagem_4.webp",
    "imagens/imagem_6.webp",
    "imagens/imagem_5.webp",
    "imagens/ima.png",
    "imagens/imagem_7.webp.webp",
    
   
 
   
];

let indice = 0;

function mostrarImagem() {
    document.getElementById("foto").src = imagens[indice];
}

function proxima() {
    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }

    mostrarImagem();
}

function anterior() {
    indice--;

    if (indice < 0) {
        indice = imagens.length - 1;
    }

    mostrarImagem();
}
