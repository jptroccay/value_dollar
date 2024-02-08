// PRELOADER
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
  document.body.style.overflow = "Unset";
});

// FETCH
const api_url = "https://api.bluelytics.com.ar/v2/latest";

const HTMLResponse = document.querySelector("#app");
fetch(api_url)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data.blue)
    // console.log(data)
    HTMLResponse.innerHTML = `
    <h3 class="title">Dólar Blue</h3>
    <div class="container">
    <div class="value">Venta</br> <span>${data.blue["value_sell"]}</span> ARS</br></br></div>
    <div class="value">Compra</br> <span>${data.blue["value_buy"]}</span> ARS</div>
    </div>
    <h3 class="title">Dólar Oficial</h3>
    <div class="container">
    <div class="value">Venta</br> <span>${data.oficial["value_sell"]}</span> ARS</br></br></div>
    <div class="value">Compra</br> <span>${data.oficial["value_buy"]}</span> ARS</div>
    </div>
    `;
  });
