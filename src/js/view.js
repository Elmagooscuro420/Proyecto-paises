export const vista = {
  listaPaises: document.querySelector(".lista-paises"),

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
};
