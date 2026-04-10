let contador = 0;
const spanNumero = document.getElementById("numero");
const btnAumentar = document.getElementById("btn-aumentar");

btnAumentar.addEventListener("click", () => {
    contador++;
    spanNumero.innerText = contador;
});