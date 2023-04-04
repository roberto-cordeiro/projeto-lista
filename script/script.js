/*  QUESTÂO 01   Função SOMAR     */
function somar(){
    
    let res
    let n1 = document.getElementById('som1').value
    let n2 = document.getElementById('som2').value

    if(n1 != "" && n2 != "" ){
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        res = n1 + n2
        document.getElementById('som-res').value = res      
    }if(n2 == "" && n1 != ""){
        n1 = parseFloat(n1)
        res = n1
        document.getElementById('som-res').value = res
    }if(n1 == "" && n2 != ""){
        n2 = parseFloat(n2)
        res = n2
        document.getElementById('som-res').value = res
    }else if(res == null){
        document.getElementById('som-res').value = "Nenhum valor inserido!"
    }
}
/*ZERAR CAMPOS*/
function limparSom(){
    document.getElementById('som1').value = ""
    document.getElementById('som2').value = ""
    document.getElementById('som-res').value = ""
}
/*  QUESTÂO 02   Função MULTIPLICAR     */

function multiplicar(){
    
    let res
    let n1 = document.getElementById('mul1').value
    let n2 = document.getElementById('mul2').value
    if(n1 != "" && n2 != "" ){
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        res = 10 + (n1 * n2)
        document.getElementById('mul-res').value = res      
    }if(n2 == "" && n1 != ""){
        n1 = parseFloat(n1)
        res = n1
        document.getElementById('mul-res').value = res
    }if(n1 == "" && n2 != ""){
        n2 = parseFloat(n2)
        res = n2
        document.getElementById('mul-res').value = res
    }if(n1 <= 0 && n2 >= 0){
        res = parseFloat(10)
        document.getElementById('mul-res').value = res
    }if(n2 <= 0 && n1 >= 0){
        res = parseFloat(10)
        document.getElementById('mul-res').value = res
    }

}
/*ZERAR os campos */
function limparMul(){
    document.getElementById('mul1').value = ""
    document.getElementById('mul2').value = ""
    document.getElementById('mul-res').value = ""
}

/*   QUESTÂO 03  Função RAIZ * 10 / 33     */

function raiz(){
    
    let res
    let n1 = document.getElementById('raiz').value
    if(n1 > 0 ){
        n1 = parseFloat(n1)
        res = ((Math.sqrt(n1)) * 10) / 33
        document.getElementById('raiz-res').value = res      
    }else{
        document.getElementById('raiz-res').value = " 0, - , ou não informado!"
    }
}
/*
if(n1 < 0){
    res = parseFloat(0)
    document.getElementById('raiz-res').value = res
}*/
/*ZERAR os campos */
function limparRaiz(){
    document.getElementById('raiz').value = ""
    document.getElementById('raiz-res').value = ""
}

/*  QUESTÂO 04 Função MOSTRAR 2 NOMES NA TELA */

function mostrarNomes(){
    let res
    let nom1 = document.getElementById('nome1').value
    let nom2 = document.getElementById('nome2').value
    if(nom1 != "" && nom2 != ""){
        res = 'Olá, meu nome é '+nom1+' e meu partner do DevClub é '+nom2+'!'
        document.getElementById('nomes').value = res     
    }if(nom1 == "" || nom2 == ""){
        document.getElementById('nomes').value = "Dados incompletos, favor, informar os dados corretamente!"
    }
}
/*   ZERAR os campos   */
function limparNomes(){
    document.getElementById('nome1').value = ""
    document.getElementById('nome2').value = ""
    document.getElementById('nomes').value = ""
}

/* QUESTÂO 05 Função VERIFICA NOMES IGUAIS */

function verificadorDeNomesTrue(){
    let nome1 = document.getElementById('verif1').value
    let nome2 = document.getElementById('verif2').value
    if(nome1 === nome2){
        document.getElementById('vnomes').value = "TRUE, nomes iguais!"
    }if(nome1 != nome2){
        document.getElementById('vnomes').value = "FALSE, nomes diferentes!"
    }if(nome1 == "" || nome2 == ""){
        document.getElementById('vnomes').value = "DADOS INCOMPLETOS! "
    }
}
/* Zerar os campos */
function limpaVerificadorTrue(){
    document.getElementById('verif1').value = ""
    document.getElementById('verif2').value = ""
    document.getElementById('vnomes').value = ""
}

/* QUESTÂO 06 Função VERIFICA NOMES DIFERENTES */

function verificadorDeNomesFalse(){
    let nome1 = document.getElementById('verif1f').value
    let nome2 = document.getElementById('verif2f').value
    if(nome1 === nome2){
        document.getElementById('vnomesf').value = "FALSE, nomes iguais!"
    }if(nome1 != nome2){
        document.getElementById('vnomesf').value = "TRUE, nomes diferentes!"
    }if(nome1 == "" || nome2 == ""){
        document.getElementById('vnomesf').value = "DADOS INCOMPLETOS! "
    }
}
/* Zerar os campos */
function limpaVerificadorFalse(){
    document.getElementById('verif1f').value = ""
    document.getElementById('verif2f').value = ""
    document.getElementById('vnomesf').value = ""
}


/* QUESTÂO 07 Função VERIFICADOR NOMES ARRAY TRUE */

function nomesArrTr(){
    let nomes = Array()
    nomes[0] = (document.getElementById('nomesa1').value).toLowerCase()
    nomes[1] = (document.getElementById('nomesa2').value).toLowerCase()
    let teste = nomes[0] === nomes[1]
    
    if(teste === true){
        document.getElementById('nomesa3').value = "NOMES IGUAIS"
    }if(teste === false){
        document.getElementById('nomesa3').value = "NOMES DIFERENTES"
    }if(nomes[0] === "" || nomes[1] === ""){
        document.getElementById('nomesa3').value = "DADOS INCOMPLETOS"
    }
}
/*    Zerar campos   */
function limpaNomesArrTrue(){
    document.getElementById('nomesa1').value = ""
    document.getElementById('nomesa2').value = ""
    document.getElementById('nomesa3').value = ""
}


/* QUESTÂO 08 Função VERIFICADOR NOMES ARRAY FALSE */

function nomesArrFal(){
    let nomes = Array()
    nomes[0] = (document.getElementById('nomesf1').value).toLowerCase()
    nomes[1] = (document.getElementById('nomesf2').value).toLowerCase()
    let teste = nomes[0] !== nomes[1]
    
    if(teste === true){
        document.getElementById('nomesf3').value = "TRUE, nomes diferentes"
    }if(teste === false){
        document.getElementById('nomesf3').value = "FALSE,nomes iguais"
    }if(nomes[0] === "" || nomes[1] === ""){
        document.getElementById('nomesf3').value = "DADOS INCOMPLETOS"
    }
}
/*    Zerar campos   */
function limpaNomesArrFal(){
    document.getElementById('nomesf1').value = ""
    document.getElementById('nomesf2').value = ""
    document.getElementById('nomesf3').value = ""
}

/*       Questão      10 */

let NomesObjtDfr = Array
NomesObjtDfr = [0,1]
let nome1 = ""
let nome2 = ""


    /* (1)Exercício  */

    function cadNomesObjtDfr(){
        for (let i = 0; i < 1; i++) {
            NomesObjtDfr[0] = Array
            for (let o = 0; o < 1; o++) {
                nome1 = prompt("Qual é o "+[o+1]+"º nome?").toLowerCase()
                NomesObjtDfr[0] = nome1
                for (let u = 0; u < 1; u++) {
                    NomesObjtDfr[1] = Array
                    nome2 = prompt("Qual é o "+[u+2]+"º nome?").toLowerCase()
                    NomesObjtDfr[1] = nome2         
                }
                
            }
            
        }
        if(nome1 !== nome2){
            document.getElementById("nomes3Arr").value = "FALSE, nomes diferentes!"
        }if(nome1 === nome2){
            document.getElementById("nomes3Arr").value = "TRUE, nomes iguais!"
        }if(nome1 === "" || nome2 === ""){
            document.getElementById("nomes3Arr").value = "DADOS INCOMPLETOS!"
        }
    }
    /* FUNÇÂO LIMPAR CAMPO */
    function limparObjtDfr(){
        document.getElementById("nomes3Arr").value = ""
    }

    /* (2)Exercício  */

let NomesMesmoObjt = Array
let pNome = ""
let sNome = ""

    function cadNomesMesmoObjt(){
        for (let i = 0; i < 1; i++) {
            pNome = prompt("Digite o primeiro nome:").toLowerCase()
            sNome = prompt("Digite o segundo nome:").toLowerCase()
            NomesMesmoObjt = {pNome, sNome}
        }

        if(pNome !== sNome){
            document.getElementById("nomes6Arr").value =  "FALSE, nomes diferentes!"
        }if(pNome === sNome){
            document.getElementById("nomes6Arr").value = "TRUE, nomes iguais!"
        }if(pNome === "" || sNome === ""){
            document.getElementById("nomes6Arr").value = "DADOS INCOMPLETOS!"
        }
    }

    /* FUNÇÂO LIMPAR CAMPO */
    function limparMesmObjt(){
        document.getElementById("nomes6Arr").value = ""
    }


    /* QUESTÂO 11 */

    function numerosRand(){
        min = Math.ceil(1);
        max = Math.floor(100);
        document.getElementById("randNum").value = "Número aleatório entre 1 ~ 100 = (" + Math.floor(Math.random() * (max - min) + min)+")";
    }

    /* FUNÇÂO LIMPAR CAMPO */
    function limparNumerosRand(){
        document.getElementById("randNum").value = ""
    }

    /* QUESTÂO 12 */

    /* (1) Exercício */

    function divImpNums(){
        let num1 = parseInt(document.getElementById("numImp1").value)
        let num2 = parseInt(document.getElementById("numImp2").value)
        let res = parseInt(num1 % num2)

        if(res === 0){
            document.getElementById("divImp").value = "Resto 0"
        }if(res >= 1){
            document.getElementById("divImp").value = "Resto 1"
        }
    }
    function limparDivImpNums(){
        document.getElementById("numImp1").value = ""
        document.getElementById("numImp2").value = ""
        document.getElementById("divImp").value = ""
    }

    /* (2) Exercício */

    function numeroMaior(){
        let num1 = parseInt(document.getElementById("numMai1").value)
        let num2 = parseInt(document.getElementById("numMai2").value)

        if(num1 > num2){
            document.getElementById("maiRes").value = "True"
        }if(num1 < num2){
            document.getElementById("maiRes").value = "False"
        }if(num1 === num2){
            document.getElementById("maiRes").value = "Iguais"
        }
    }
    function limparNumeros(){
        document.getElementById("numMai1").value = ""
        document.getElementById("numMai2").value = ""
        document.getElementById("maiRes").value = ""
    }

    /* (3) Exercício */

    function numeroMenor(){
        let num1 = parseInt(document.getElementById("numMen1").value)
        let num2 = parseInt(document.getElementById("numMen2").value)

        if(num1 < num2){
            document.getElementById("menRes").value = "True"
        }if(num1 > num2){
            document.getElementById("menRes").value = "False"
        }if(num1 === num2){
            document.getElementById("menRes").value = "Iguais"
        }
    }
    function limparNumeros2(){
        document.getElementById("numMen1").value = ""
        document.getElementById("numMen2").value = ""
        document.getElementById("menRes").value = ""
    }

    /* QUESTÂO 13 */

    let itens = [0]
    let con
    let item1
    let item2
    let item3
  

 

    function imprimirArray(){
        let resp = prompt("Deseja informar FRUTAS ou NÚMEROS?(Digite para informar)").toLowerCase()
        if(resp === "números"){
            for (let i = 0; i < 1; i++) {
                item1 = prompt("Informe o 1º número:")
                item2 = prompt("Informe o 2º número:")
                item3 = prompt("Informe o 3º número:")
                let adc = {item1, item2, item3}
                itens[i] = adc
                con = "A Array possui 3 valores!"   
            }
        }if(resp === "frutas"){
            for (let i = 0; i < 1; i++) {
                item1 = prompt("Informe o nome da 1ª fruta")
                item2 = prompt("Informe o nome da 2ª fruta")
                item3 = prompt("Informe o nome da 3ª fruta")
                let adc = {item1, item2, item3}
                itens[i] = adc
                con = "A Array possui 3 valores!"    
            }
        }

    }
   
        function imprimirDadosArray(array) {
            var tabela = document.getElementById("tableArr");
            document.getElementById("resArray").value = con
            for (var i = 0; i < 1; i++) {
              var linha = tabela.insertRow(-1); 
              var colunaItem1 = linha.insertCell(0);
              var colunaItem2 = linha.insertCell(1);
              var colunaItem3 = linha.insertCell(2);
          
              colunaItem1.innerHTML = array[i].item1;
              colunaItem2.innerHTML = array[i].item2;
              colunaItem3.innerHTML = array[i].item3;
            }
          }

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








          function limparArr() {

            for (var i = 0; i < 1; i++) {
                document.getElementById("resArray").value = ""
                let tabela = document.getElementById("tableArr");
                let linhas = tabela.getElementsByTagName('tr');
                linhas[0].parentNode.removeChild(linhas[0]);
          
            }
          }
    