function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

function recebeEventoform (evento){
    evento.preventDefault(); //para o reload da página

const nome = form.querySelector('.nome');
const mail = form.querySelector('.email');
const peso = form.querySelector('.peso');
const altura = form.querySelector('.altura');

pessoas.push({
nome: nome.nodeValue,
mail: mail.nodeValue,
peso: peso.nodeValue,
altura: altura.nodeValue
});

resultado.innerHTML += `<p>${nome.value} ${mail.value} ${peso.value} ${altura.value}</p>`
console.log(pessoas)
form.addEventListener('submit', recebeEventoform);
}
