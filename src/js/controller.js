import { obtenerDatosPaises, buscarPais } from "./model.js";
import { vista } from "./view.js";

const mostrarPaisesHtml = async function () {
  const datos = await obtenerDatosPaises();
  vista.mostrarPaises(datos);
};

const mostrarPaisBuscado = async function () {
  const pais = vista.obtenerPaisInput();
  const datos = await buscarPais(pais);
  !datos.length ? vista.mostrarError() : vista.mostrarPaises(datos);
};
const init = function () {
  mostrarPaisesHtml();
  buscarPais();
  vista.eventoBotonBusqueda(mostrarPaisBuscado);
  vista.eventoEnterBusqueda(mostrarPaisBuscado);
};

init();
