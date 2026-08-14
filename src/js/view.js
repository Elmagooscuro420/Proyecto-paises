export const vista = {
  listaPaises: document.querySelector(".lista-paises"),
  inputPais: document.querySelector(".buscador-paises"),
  botonBusqueda: document.querySelector(".boton-busqueda"),

  mostrarPaises(datos) {
    this.listaPaises.innerHTML = "";
    datos.forEach((pais) => {
      const contenedorNuevo = document.createElement("div");
      contenedorNuevo.classList.add("contenedor-info-paises");
      contenedorNuevo.innerHTML = `
       <img  src="${pais.bandera}" class="banderas"/> 
       <ul>
          <li class="info-paises">
              Pais: ${pais.nombre}
          </li>
          <li class="info-paises">
              Capital: ${pais.capital}
          </li>
          <li class="info-paises">
              Poblacion: ${pais.poblacion}
          </li>
          <li class="info-paises">
              Region: ${pais.region}
          </li>
      </ul>`;
      this.listaPaises.append(contenedorNuevo);
    });
  },
  eventoBotonBusqueda(funcion) {
    this.botonBusqueda.addEventListener("click", funcion);
  },
  eventoEnterBusqueda(funcion) {
    this.inputPais.addEventListener("keyup", (e) => {
      if (e.key === "Enter") funcion();
    });
  },

  obtenerPaisInput() {
    return this.inputPais.value;
  },

  mostrarError() {
    this.listaPaises.innerHTML = "";
    const contenedorNuevo = document.createElement("div");
    contenedorNuevo.classList.add("contenedor-info-paises");
    contenedorNuevo.innerHTML = `
       <p>No se encontro Pais</p>`;
    this.listaPaises.append(contenedorNuevo);
  },
};
