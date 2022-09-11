const numero = Number(prompt('Digite um número: '));
const numerTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numerTitulo.innerHTML = numero;
texto.innerHTML += `<p>A raiz quadrada dos números é ${numero ** 0.5}</p>`; 
texto.innerHTML += `<p>O número ${numero} é inteiro ${Number.isInteger(numero)} </p>`; 
texto.innerHTML += `<p>É NaN? ${Number.isNaN(numero)}</p>`; 
texto.innerHTML += `<p>Arredondando para baixo ${Math.floor(numero)}</p>`; 
texto.innerHTML += `<p>A raiz quadrada dos números é ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)}</p>`;  