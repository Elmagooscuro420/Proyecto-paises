export const vista = {
  listaPaises: document.querySelector(".lista-paises"),

  mostrarPaises(datos) {
    console.log(datos);
    this.listaPaises.innerHTML = "";
    datos.forEach((pais) => {
      console.log(pais);
      const contenedorNuevo = document.createElement("div");
      contenedorNuevo.innerHTML = `
        <p>Pais:${pais.nombre}</p>
        <p>Capital:${pais.capital}</p>
        <p>Poblacion:${pais.poblacion}</p>
        <p>Region:${pais.region}</p>
        <img  src="${pais.bandera}"/>`;
      this.listaPaises.append(contenedorNuevo);
    });
  },
};
