// Generación de número aleatorio
const numeroAleatorio = Math.ceil(Math.random() * 10);

// Llamada a botón y evento click
const botonAdivinar = document.querySelector(".adivinar");
const mensajeElemento = document.querySelector(".mensaje");

botonAdivinar.addEventListener("click", () => {
  const inputNumero = document.querySelector(".numero");
  const numeroUsuario = inputNumero.valueAsNumber;

  if (numeroUsuario > numeroAleatorio) {
    mensajeElemento.textContent = `El número es menor que ${numeroUsuario}`;
    mensajeElemento.classList.add("error");
  } else if (numeroUsuario < numeroAleatorio) {
    mensajeElemento.textContent = `El número es mayor que ${numeroUsuario}`;
    mensajeElemento.classList.add("error");
  } else {
    mensajeElemento.textContent = "Has acertado";
    mensajeElemento.classList.add("acierto");
    botonAdivinar.disabled = true;
    inputNumero.disabled = true;
  }
});
