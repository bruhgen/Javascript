function meuEscopo() {
    const form = document.querySelector('.form');
    const exibe = document.querySelector('.exibe');
  
    const pessoas = [];
  
    function recebeEventoForm(event) {
      event.preventDefault(); // Não deixa a página dar reload
  
      const nome = form.querySelector('#nome').value;
      const sobreNome = form.querySelector('#sobrenome').value;
      const peso = form.querySelector('#peso').value;
      const altura = form.querySelector('#altura').value;
  
      pessoas.push({
        nome,
        sobreNome,
        peso,
        altura
      })
  
      console.log(pessoas)
  
      exibe.innerHTML += `
        <p class="p">
          Nome: ${ nome } 
          ${ sobreNome },
          Peso: ${ peso }kl, 
          Altura: ${ altura }
        </p>`
    }
  
    form.addEventListener('submit', recebeEventoForm);
  }
  
  meuEscopo();