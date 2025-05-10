const inputBusqueda = document.createElement("input");
inputBusqueda.setAttribute("type", "text");
inputBusqueda.setAttribute("id", "busqueda");
inputBusqueda.setAttribute("placeholder", "Buscar héroe...");
document.body.insertBefore(inputBusqueda, document.getElementById("tarjetas"));

const tarjetas = document.querySelectorAll(".tarjeta");

inputBusqueda.addEventListener("input", function () {
  const filtro = inputBusqueda.value.toLowerCase();
  tarjetas.forEach(tarjeta => {
    const titulo = tarjeta.querySelector("h3").textContent.toLowerCase();
    tarjeta.style.display = titulo.includes(filtro) ? "block" : "none";
  });
});

