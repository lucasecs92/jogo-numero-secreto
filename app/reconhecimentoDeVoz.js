// Utilizando o Web Speech API https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'; // Quero que seja configurado para a nossa língua padrão
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);
    // console.log(e.results);
    // console.log(e.results[0][0]);
    // console.log(e.results[0][0].transcript);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Vocé disse</div>
        <span class="box">${chute}</span>
    `;
}

recognition.addEventListener('end', () => recognition.start()); // Para que o reconhecimento comece novamente quando terminar.  
// Ou seja, quando a nossa função acabar, ele liga mais uma vez o reconhecimento de voz, para ficarmos descobrindo o número que é.