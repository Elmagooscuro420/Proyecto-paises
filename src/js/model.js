let listaInformacionPaises = [];

/*Funcion que se exportara para que pueda ser usada en el archivo
  controller.js y esta destinada a obtener los datos de los paises de
  su respectiva Api, tratar estos datos obtenidos solo para mandar los 
  que se quiere mostrar, usando try catch para el manejo de errores*/
export const obtenerDatosPaises = async function () {
  try {
    const datos = await fetch(
      "https://api.restcountries.com/countries/v5?limit=25&page=1",
      {
        headers: {
          Authorization: "rc_live_063dc194e94248c58201e116d667defd",
        },
      },
    );
    if (!datos) throw new Error("Paises no encontrados");
    const resultados = await datos.json();
    const paises = resultados.data.objects;
    listaInformacionPaises = paises.map((pais) => ({
      nombre: tratarDatosPaises(pais.names?.common),
      capital: tratarDatosPaises(pais.capitals?.[0]?.name),
      poblacion: tratarDatosPaises(pais?.population),
      region: tratarDatosPaises(pais?.region),
      bandera: tratarBanderasPaises(pais.flag?.url_png),
    }));
    return listaInformacionPaises;
  } catch (error) {
    console.log(error);
  }
};

/*Funcion con la cual se trata los datos y funciona de la siguiente forma
se le pasara un dato y si el dato esta vacio que se paso en este caso "datos"
si datos esta vacio entonces retornara "No existe", si datos no esta vacio
entonces retornara el dato obtenido de la Api  */
const tratarDatosPaises = function (datos) {
  return datos ?? "No existe";
};

/*Mismo proceso que la funcion anterior, solo que es un caso mucho mas
expecifico, ya que si no viene con imagen de la bandera, se le asignara
una imagen para demostrar que no se sabe cual bandera tienen*/
const tratarBanderasPaises = function (datos) {
  return datos || "./src/img/sin_bandera.png";
};

/*Esta funcion obtiene los datos de un pais especifico obtenido por un 
usuario desde la Api, se tratan los datos y todo lo mismo que la primera 
funcion que obtenia los datos de la Api */
export const buscarPais = async function (pais) {
  try {
    const dato = await fetch(
      `https://api.restcountries.com/countries/v5/names.common?q=${pais}`,
      {
        headers: {
          Authorization: "rc_live_063dc194e94248c58201e116d667defd",
        },
      },
    );
    if (!dato) throw new Error("Pais no encontrados");
    const resultados = await dato.json();
    const paisBuscado = resultados.data.objects;
    listaInformacionPaises = paisBuscado.map((pais) => ({
      nombre: tratarDatosPaises(pais.names?.common),
      capital: tratarDatosPaises(pais.capitals?.[0]?.name),
      poblacion: tratarDatosPaises(pais?.population),
      region: tratarDatosPaises(pais?.region),
      bandera: tratarBanderasPaises(pais.flag?.url_png),
    }));
    return listaInformacionPaises;
  } catch (error) {
    console.error(error);
  }
};
/*Obtener los paises de la region buscada por el usuario, asi pedirle a la 
api que me de los datos aqui como siempre se tratan los datos para que no mande-
mos valores vacios que rompan el sistema */
export const filtrarPaises = async function (region) {
  try {
    const dato = await fetch(
      `https://api.restcountries.com/countries/v5/region/${region}`,
      {
        headers: {
          Authorization: "rc_live_063dc194e94248c58201e116d667defd",
        },
      },
    );
    if (!dato) throw new Error("Pais no encontrados");
    const resultados = await dato.json();
    const paisRegion = resultados.data.objects;
    listaInformacionPaises = paisRegion.map((pais) => ({
      nombre: tratarDatosPaises(pais.names?.common),
      capital: tratarDatosPaises(pais.capitals?.[0]?.name),
      poblacion: tratarDatosPaises(pais?.population),
      region: tratarDatosPaises(pais?.region),
      bandera: tratarBanderasPaises(pais.flag?.url_png),
    }));
    return listaInformacionPaises;
  } catch (error) {
    console.log(error);
  }
};
