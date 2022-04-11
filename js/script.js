// Ativar links do menu

const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
  const url = location.href
  const href = link.href
  if (url.includes(href)) {
    link.classList.add('ativo')
  }
}

links.forEach(ativarLink)

// Ativar parâmetros do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro)
  if(elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controles = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controles)

  resposta.classList.toggle('ativo');
  const ativo = resposta.classList.contains('ativo')
  pergunta.setAttribute('area-expanded', ativo)
}


function eventoPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventoPerguntas);

// Galeria de imagens

const galeria = document.querySelectorAll(".bicicleta-imgs img")
const galeriaContainer = document.querySelector(".bicicleta-imgs")

function mostrarImagem(event) {
  const imagem = event.currentTarget
  const media = matchMedia('(min-width: 1000px)').matches
  if (media) {
    galeriaContainer.prepend(imagem)
  }
}

function EventosGaleria(img) {
  img.addEventListener('click', mostrarImagem)
} 

galeria.forEach(EventosGaleria)
