// alert("World Hello!")
// prompt("Digite seu nome: ")
// confirm("Você tem certeza?")
// var nome = prompt("Qual é o seu nome?")
// var idade = prompt("Quantos anos você tem?")
// var job = prompt("Qual é a sua profissão?")
// console.log(`Olá ${nome}, você tem ${idade} anos e trabalha como ${job}!`)
// var numero = 5**2**3**2**3**4**7**5




// console.log('Olá ' + nome + ' seja bem-vindo!')
// console.log(`Olá ${nome} , seja bem-vindo!`)

// console.log(typeof nome)
// console.error("Erro")
// console.info("INFO")

function mostrarMensagem(){
    var numero1 = parseFloat(document.getElementById("n1").value);
    var numero2 = parseFloat(document.getElementById("n2").value);
    var resultado = numero1 + numero2;
    
    
    console.log(`O resultado da soma é: ${resultado}`);


}
function Subtrair(){
    var numero1 = parseFloat(document.getElementById("n1").value);
    var numero2 = parseFloat(document.getElementById("n2").value);
    var resultado = numero1 - numero2;
    console.log(`O resultado da subtração é: ${resultado}`);

}

function multiplicar(){
    var numero1 = parseFloat(document.getElementById("n1").value);
    var numero2 = parseFloat(document.getElementById("n2").value);
    var resultado = numero1 * numero2;
    console.log(`O resultado da multiplicação é: ${resultado}`);

}

function divisao(){
    var numero1 = parseFloat(document.getElementById("n1").value);
    var numero2 = parseFloat(document.getElementById("n2").value);
    var resultado = numero1 / numero2;
    console.log(`O resultado da divisão é: ${resultado}`);

}