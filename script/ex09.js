/*Variáveis GLOBAIS */
let nomes = [0,1,2,3,4]
let nome
let idade
let peso
let altura
let estadocivil
let nacionalidade


/*FUNÇÂO ADICIONAR NOMES E QUALIDADES */


function adicionarNomes(){
  for (let i = 0; i < 5; i++) {
    nomes[i] = Array
    nome = prompt("Qual é o seu nome?")
    idade = prompt("Quantos anos você tem?"+"("+[i+1]+"º indivíduo)")
    peso = prompt("Qual o seu peso?"+"("+[i+1]+"º indivíduo)")
    altura = prompt("Qual a sua altura em centimetros?"+"("+[i+1]+"º indivíduo)")
    estadocivil = prompt("Qual é o seu estado civil?"+"("+[i+1]+"º indivíduo)")
    nacionalidade = prompt("Qual a sua nacionalidade"+"("+[i+1]+"º indivíduo)")
    let adc = {nome, idade, peso, altura, estadocivil, nacionalidade}
    nomes[i] = adc
  }
}


/*FUNÇÂO IMPRIMIR ARRAY EM TABELA */


function preencherTabela(array) {
  var tabela = document.getElementById("tabela");

  for (var i = 0; i < array.length; i++) {
    var linha = tabela.insertRow(-1); 
    var colunaNome = linha.insertCell(0);
    var colunaIdade = linha.insertCell(1);
    var colunaPeso = linha.insertCell(2);
    var colunaAltura = linha.insertCell(3);
    var colunaEstadoCivil = linha.insertCell(4);
    var colunaNacionalidade = linha.insertCell(5);

    colunaNome.innerHTML = array[i].nome;
    colunaIdade.innerHTML = array[i].idade;
    colunaPeso.innerHTML = array[i].peso;
    colunaAltura.innerHTML = array[i].altura;
    colunaEstadoCivil.innerHTML = array[i].estadocivil;
    colunaNacionalidade.innerHTML = array[i].nacionalidade;
  }
}

function limparTabela() {

  for (var i = 1; i < 7; i++) {

    let tabela = document.getElementById("tabela");
    let linhas = tabela.getElementsByTagName('tr');
    linhas[1].parentNode.removeChild(linhas[1]);

  }
}
