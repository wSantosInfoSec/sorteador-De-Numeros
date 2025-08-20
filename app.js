function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);

        
    }
    //Necessário verificar onde o elemento esta no arquivo HTML e utilizar a função inner HTML e colar a label
    //exatamente como está no arquivo HTML
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);


}