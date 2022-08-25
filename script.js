//<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
// Projeto calculadora.

const display = document.querySelector('.display');
const numeros = document.querySelectorAll('[class*=tecla]');
const operacao = document.querySelectorAll('[class*=op]');
const ac = document.querySelector('.clean');

// console.log(numeros);


// var calculadora = document.querySelectorAll('.botao');

// operacao.forEach((event) =>
//   event.addEventListener('click', () => {
//     display.innerHTML = event.innerHTML;
//   })
// );

// numeros.forEach((event) =>
//   event.addEventListener('click', () => {
//     display.innerHTML += event.innerHTML;
//   })
// );

function limpar(e) {
    
  ac.addEventListener('click', () => {
      display.innerHTML = '';
  });
}
limpar();

function calcular() {
     display.innerHTML
     if(display){
        display.innerHTML = eval(display.innerHTML); 
     }
}

function clickTeclado(numero) {
    if (display === '0'){
        display.innerHTML = numero;
    } else {
        display.innerHTML += numero
    }
  }

// const calculadora = (num1, operacao, num2) =>  operacao(num1, num2);

// const soma = (n1, n2) => n1 + n2;
// const sub = (n1, n2) => n1 - n2;
// const div = (n1, n2) => n1 / n2;
// const mult = (n1, n2) => n1 * n2;

// console.log(calculadora(50, div, 20));
