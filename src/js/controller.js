import { obtenerDatosPaises, buscarPais } from "./model.js";
import { vista } from "./view.js";

/*Funcion que permite obtener los datos de las Apis de una funcion 
del archivo model.js */
const mostrarPaisesHtml = async function () {
  const datos = await obtenerDatosPaises();
  vista.mostrarPaises(datos);
};
/*Funcion que recibe el nombre del pais buscado y si esta vacio muestra un error
 en dado caso que si tenga la informacion del pais buscado lo mostrara*/
const mostrarPaisBuscado = async function () {
  const pais = vista.obtenerPaisInput();
  const datos = await buscarPais(pais);
  !datos.length ? vista.mostrarError() : vista.mostrarPaises(datos);
};

/*Funcion que inicializa todo los procesos */
const init = function () {
  mostrarPaisesHtml();
  buscarPais();
  vista.eventoBotonBusqueda(mostrarPaisBuscado);
  vista.eventoEnterBusqueda(mostrarPaisBuscado);
};

init();
