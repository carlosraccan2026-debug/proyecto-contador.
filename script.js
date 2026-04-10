let contador = 0;
const spanNumero = document.getElementById("numero");
const btnAumentar = document.getElementById("btn-aumentar");

btnAumentar.addEventListener("click", () => {
    contador++;
    spanNumero.innerText = contador;
});

// --- ESTO ES LO QUE DEBES AGREGAR AL FINAL ---
const btnReset = document.getElementById("btn-reset");

btnReset.addEventListener("click", () => {
    contador = 0;
    spanNumero.innerText = contador;
});