export const vista = {
  listaPaises: document.querySelector(".lista-paises"),
  inputPais: document.querySelector(".buscador-paises"),
  botonBusqueda: document.querySelector(".boton-busqueda"),
  filtrarPais: document.getElementById("filtrar-paises"),

  /*Funcion que obtiene datos de los paises y crea el html de forma
  automatica para cada pais y asi mostrarlo en el contenedor, creando
  asi una lista con todos los paises con su respectivo estilo*/
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
  /* Funcion que permite tener un evento en el boton de la 🔍
  permitiendo que cada que se le haga click, le pasen una funcion
  y busque el pais deseado */
  eventoBotonBusqueda(funcion) {
    this.botonBusqueda.addEventListener("click", funcion);
  },
  /*Funciona igual que la funcion anterior, solo que ahora el 
  evento esta en el input donde se pone el nombre del pais
  y cuando se le de Enter buscara el pais deseado */
  eventoEnterBusqueda(funcion) {
    this.inputPais.addEventListener("keyup", (e) => {
      if (e.key === "Enter") funcion();
    });
  },
  /*Permite obtener el nombre del pais que se quiere buscar*/
  obtenerPaisInput() {
    return this.inputPais.value;
  },
  /*Funcion que permite crear un html con un mensaje
  de error por si se digita mal el nombre de un pais */
  mostrarError() {
    this.listaPaises.innerHTML = "";
    const contenedorNuevo = document.createElement("div");
    contenedorNuevo.classList.add("contenedor-info-paises");
    contenedorNuevo.innerHTML = `
       <p>Pais no encontrado</p>`;
    this.listaPaises.append(contenedorNuevo);
  },

  /*Limpiar el input cuando el usuario ya busque el pais de su eleccion */
  limpiarinput() {
    this.inputPais.value = "";
  },

  /*Evento que se activa cuando el usuario selecciona una opcion de region
  con esto se devuelve la region seleccionada y ya la funcion hace el resto */
  eventoFiltrarPaises(funcion) {
    this.filtrarPais.addEventListener("change", (e) => {
      const regionSeleccionada = e.target.value;
      funcion(regionSeleccionada);
    });
  },
};
