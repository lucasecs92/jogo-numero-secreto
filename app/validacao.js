// Adicionando informações caso o dado de entrada seja válido 
function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = parseInt(chute);

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return; // para que ele não execute mais nada dessa função.
    }  

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
        // alert(`Valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}`);
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Vocé acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button type="text" id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    }
    
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', (e) => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})