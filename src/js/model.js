let listaInformacionPaises = [];
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

const tratarDatosPaises = function (datos) {
  return datos ?? "No existe";
};
const tratarBanderasPaises = function (datos) {
  return datos || "./src/img/sin_bandera.png";
};
