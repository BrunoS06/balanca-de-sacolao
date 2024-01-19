
const inputPeso = document.getElementById('input-peso');
const displayPrecoKg = document.getElementById('display-preco-kg');
const displayPrecoTotal = document.getElementById('preco-total');
const selectProdutos = document.getElementById('select-produtos');

const mostrarPrecoTotal = function() {
    const precoKg = selectProdutos.value;
    displayPrecoKg.innerText = precoKg.toString();


    const valorPeso = parseInt(inputPeso.value);

    const precoTotal = ((valorPeso * precoKg) / 1000) || 0; 

    displayPrecoTotal.innerText = precoTotal.toFixed(2).toString();
}
inputPeso.onkeyup = mostrarPrecoTotal;

selectProdutos.onchange = mostrarPrecoTotal;
