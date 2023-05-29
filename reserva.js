// Esta es la función de validación antes del envío.
function validateForm() {
    // Verifica si todos los campos fueron completados.
    var requiredFields = ["name", "email", "phone", "checkin-date", "checkout-date", "guests"];
    for (var i = 0; i < requiredFields.length; i++) {
      var field = document.getElementById(requiredFields[i]);
      if (field.value == "") {
        alert("Please fill in all required fields.");
        return false;
      }
    }
  
    // Verifica si la fecha de entrada es anterior a la fecha de salida.
    var checkinDate = new Date(document.getElementById("checkin-date").value);
    var checkoutDate = new Date(document.getElementById("checkout-date").value);
    if (checkinDate > checkoutDate) {
      alert("The check-in date must be before the check-out date.");
      return false;
    }
  
    // Devuelve un valor verdadero si pasa todas las validaciones.
    return true;
  }
  