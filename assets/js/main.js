console.log("Entro al main.js");

const base_url_api =
  "http://ucamp.alumnos.dev4humans.com.mx/Main/endpoint_animales_zoo";
const tblAnimales = document.getElementById("tblAnimales");

(function cargarAnimales() {
  fetch(base_url_api, { method: "GET" })
    .then((response) => response.json())
    .then((results) => {
      console.log(results.data);
      for (const animal of results.data) {
        let tr = `<tr>
    <td>${animal.id}</td>
    <td>${animal.nombre}</td>
    <td>${animal.cantidad}</td>
    </tr>`;
        tblAnimales.innerHTML += tr;
      }
    });
})();
