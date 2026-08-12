import { obtenerDatosPaises } from "./model.js";
import { vista } from "./view.js";

const mostrarPaisesHtml = async function () {
  const datos = await obtenerDatosPaises();
  vista.mostrarPaises(datos);
};
const init = function () {
  mostrarPaisesHtml();
};

init();
