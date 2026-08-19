import { obtenerDatosPaises, buscarPais, filtrarPaises } from "./model.js";
import { vista } from "./view.js";

/*Funcion que permite obtener los datos de las Apis de una funcion 
del archivo model.js */
const mostrarPaisesHtml = async function () {
  const datos = await obtenerDatosPaises();
  vista.limpiarinput();
  vista.mostrarPaises(datos);
};
/*Funcion que recibe el nombre del pais buscado y si esta vacio muestra un error
 en dado caso que si tenga la informacion del pais buscado lo mostrara*/
const mostrarPaisBuscado = async function () {
  const pais = vista.obtenerPaisInput();
  const datos = await buscarPais(pais);
  vista.limpiarinput();
  !datos.length || !datos ? vista.mostrarError() : vista.mostrarPaises(datos);
};

/*Funcion de filtrado para saber que region selecciono el usuario y con esto
poder mostrarle los paises de esa region */
const mostrarPaisesFiltrados = async function (region) {
  if (region === "seleccionar") {
    mostrarPaisesHtml();
    return;
  }
  const datos = await filtrarPaises(region);
  vista.mostrarPaises(datos);
};
/*Funcion que inicializa todo los procesos */
const init = function () {
  mostrarPaisesHtml();
  vista.limpiarinput();
  vista.eventoBotonBusqueda(mostrarPaisBuscado);
  vista.eventoEnterBusqueda(mostrarPaisBuscado);
  vista.eventoFiltrarPaises(mostrarPaisesFiltrados);
};

init();
