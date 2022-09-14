const form = document.querySelector('#form')

form.addEventListener('submit', function(e){
e.preventDefault();

const inputPeso = e.target.querySelector('#peso');
const inputAltura = e.target.querySelector('#altura');

const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);

if(!peso){
  setResultado('Peso inválido', false);
  return;
  }
  if(!altura){
    setResultado('Altura', false);
  }
});

function criaP() {
  const p = document.createElement('P');
  return;
}

function setResultado (msg, isValid){
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
  const p = criaP();
  p.innerHTML = msg;
  resultado.appendChild(p) 
}
