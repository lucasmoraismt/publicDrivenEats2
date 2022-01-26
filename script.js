let contadorprato = 0;
let contadorbebida = 0;
let contadorsobremesa = 0;
let contadorgeral = 0;
let nomeprato;
let nomebebida;
let nomesobremesa;
let precoprato = 0;
let precobebida = 0;
let precosobremesa = 0;
let precototal = 0;

function sprato(button) {

    var aux;
    
    if(button == document.getElementById("f1"))
    {
        nomeprato = 'Churrasco de Rato';
        precoprato = 14.90;
    }
    else if(button == document.getElementById("f2"))
    {
        nomeprato = 'Sushi de Escorpião';
        precoprato = 25.50;
    }
    else if(button == document.getElementById("f3"))
    {
        nomeprato = 'Sanduiche de Miojo';
        precoprato = 900.00;
    }
    
    
    if(contadorprato == 1){
        aux = document.getElementById("f1");
        aux.classList.remove("ativo");
        aux = document.getElementById("f2");
        aux.classList.remove("ativo");
        aux = document.getElementById("f3");
        aux.classList.remove("ativo");
        button.classList.add("ativo");
    }
    else{
        contadorprato = 1;
        button.classList.add("ativo");
    }

    contadorgeral = contadorprato + contadorbebida + contadorsobremesa;

    if(contadorgeral == 3){
        aux = document.getElementById("buyb");
        aux.classList.add("buybativo");
    }

}

function sbebida(button) {

    var aux;

    if(button == document.getElementById("d1"))
    {
        nomebebida = 'Boa noite';
        precobebida = 0.05;
    }
    else if(button == document.getElementById("d2"))
    {
        nomebebida = 'Coca Alho';
        precobebida = 6.50;
    }
    else if(button == document.getElementById("d3"))
    {
        nomebebida = 'Agua Mineral';
        precobebida = 2.00;
    }
    
    if(contadorbebida == 1){
        aux = document.getElementById("d1");
        aux.classList.remove("ativo");
        aux = document.getElementById("d2");
        aux.classList.remove("ativo");
        aux = document.getElementById("d3");
        aux.classList.remove("ativo");
        button.classList.add("ativo");
    }
    else{
        contadorbebida = 1;
        button.classList.add("ativo");
    }

    contadorgeral = contadorprato + contadorbebida + contadorsobremesa;

    if(contadorgeral == 3){
        aux = document.getElementById("buyb");
        aux.classList.add("buybativo");
    }

}

function ssobremesa(button) {

    var aux;

    if(button == document.getElementById("s1"))
    {
        nomesobremesa = 'Pirulito de Bixo';
        precosobremesa = 1.00;
    }
    else if(button == document.getElementById("s2"))
    {
        nomesobremesa = 'Mousse de Cerebro';
        precosobremesa = 20.00;
    }
    else if(button == document.getElementById("s3"))
    {
        nomesobremesa = 'Cupcake de Larva';
        precosobremesa = 5.00;
    }
    
    if(contadorsobremesa == 1){
        aux = document.getElementById("s1");
        aux.classList.remove("ativo");
        aux = document.getElementById("s2");
        aux.classList.remove("ativo");
        aux = document.getElementById("s3");
        aux.classList.remove("ativo");
        button.classList.add("ativo");
    }
    else{
        contadorsobremesa = 1;
        button.classList.add("ativo");
    }

    contadorgeral = (contadorprato + contadorbebida + contadorsobremesa);
    

    if(contadorgeral == 3){
        aux = document.getElementById("buyb");
        aux.classList.add("buybativo");
    }

}

function finaliza(){
    if(contadorgeral == 3){
        precototal = (precoprato + precobebida + precosobremesa);
        
        let preco = precototal.toFixed(2);
        let msg;

        let nome = prompt('Qual é seu nome?');
        let endereco = prompt('Qual é seu endereço?');

        msg = encodeURIComponent(`Olá gostaria de fazer o pedido:\n- Prato: ${nomeprato}\n- Bebida: ${nomebebida}\n- Sobremesa: ${nomesobremesa}\n Total: RS$${preco}\n Nome: ${nome}\n Endereço: ${endereco}`);

        /*
        document.getElementById("tf1") = nomeprato + precoprato;
        document.getElementById("tf2") = nomebebida + precobebida;
        document.getElementById("tf3") = nomesobremesa + precosobremesa;
        document.getElementById("tf4") = 'TOTAL' + precototal;

        document.getElementById("tf").classList.remove("hide"); */

        window.open("https://wa.me/5531995784481?text=" + msg );
        
    }
}
