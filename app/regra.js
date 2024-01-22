// Quando clico no botão de regra, renderiza o campo de texto
document.getElementById("regrasBtn").addEventListener("click", function() {
    var regrasDiv = document.getElementById("regrasDiv");
    if (regrasDiv.style.display === "none") {
        regrasDiv.style.display = "block";
    } else {
        regrasDiv.style.display = "none";
    }
});

// Adicionando event listener para ocultar regrasDiv ao clicar fora
document.addEventListener('click', function(event) {
    var regrasDiv = document.getElementById("regrasDiv");
    var regrasBtn = document.getElementById("regrasBtn");
    // Verifica se o clique foi fora de regrasDiv e não é o botão para mostrar regrasDiv
    if (!regrasDiv.contains(event.target) && event.target !== regrasBtn) {
        regrasDiv.style.display = "none";
    }
});

document.addEventListener('keydown', function(event) {
    var regrasDiv = document.getElementById("regrasDiv");
    if (event.key === "Escape") { // Verifica se a tecla pressionada é 'Esc'
        regrasDiv.style.display = "none";
    }
});
