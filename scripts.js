
// pega referencia do select-produtos (lista de options)
const inputPeso = document.getElementById('input-peso');
const displayPrecoKg = document.getElementById('display-preco-kg');
const displayPrecoTotal = document.getElementById('preco-total');
const selectProdutos = document.getElementById('select-produtos');

const mostrarPrecoTotal = function() {
    // Pega o valor do precoKg e exibe no displayPrecoKg
    const precoKg = selectProdutos.value;
    displayPrecoKg.innerText = precoKg.toString();

    // Pega o valor do peso e converte para número (pois vem como string)
    const valorPeso = parseInt(inputPeso.value);
    // Calcula o preco total se o calculo nao for NAN, caso for NAN, usa 0 como valor.
    const precoTotal = ((valorPeso * precoKg) / 1000) || 0; // faz o calculo para pegar o valor em R$ final

    // Exibe no displayPrecoTotal o valor em R$ final usando apenas 2 casas decimais apos o ponto
    // ex: 2.123.toFixed(2) vai ser 2.12;
    displayPrecoTotal.innerText = precoTotal.toFixed(2).toString();
}

// Chama mostrarPrecoTotal() quando soltar qualquer tecla do teclado dentro desse input (input-peso)
inputPeso.onkeyup = mostrarPrecoTotal;
// Chama mostrarPrecoTotal() quando mudar o valor do item do selector (select)
selectProdutos.onchange = mostrarPrecoTotal;
