/* const Api_Url= 'https://www.dolarsi.com/api/api.php?type=valoresprincipales' */

const ConsumoApi = async () => {
  const respuesta = await fetch(
    "https://www.dolarsi.com/api/api.php?type=dolar"
  );

  const datosJson = await respuesta.json();
  let tiposCambios = "";

  datosJson.forEach((cambio) => {
    tiposCambios =
      tiposCambios + 
      `<div class="containerCambio">
      <p>${cambio.casa.nombre}</p>
    <p>Compra:${cambio.casa.compra}</p>
    </div>`;
  });
  document.getElementById("app").innerHTML = tiposCambios;
};

ConsumoApi();
