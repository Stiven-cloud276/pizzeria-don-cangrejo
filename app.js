// Reserva -> WhatsApp (multiplataforma: web/móvil)
(function () {
  var form = document.getElementById("reserva-form");
  var overlay = document.getElementById("success-overlay");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var nombre = String(data.get("nombre") || "").trim();
    var telefono = String(data.get("telefono") || "").trim();
    var fecha = String(data.get("fecha") || "").trim();

    var mensaje =
      "Hola, quiero reservar en Pizzería Don Cangrejo.%0A" +
      "Nombre: " + encodeURIComponent(nombre) + "%0A" +
      "Teléfono: " + encodeURIComponent(telefono) + "%0A" +
      "Fecha y hora: " + encodeURIComponent(fecha);

    // Perú +51
    var numero = "51" + "888 999 888";
    var url = "https://wa.me/" + numero + "?text=" + mensaje;
    // Nota: No se abre WhatsApp Web automáticamente para el usuario.
    // Si luego deseas abrirlo manualmente, descomenta la línea siguiente:
    // window.open(url, "_blank");

    if (overlay) {
      overlay.classList.add("is-visible");
      overlay.setAttribute("aria-hidden", "false");
      setTimeout(function () {
        overlay.classList.remove("is-visible");
        overlay.setAttribute("aria-hidden", "true");
      }, 2200);
    }

    // Limpia el formulario para una nueva reserva
    form.reset();
  });
})();
