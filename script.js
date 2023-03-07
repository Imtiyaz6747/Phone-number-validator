function validatePhoneNumber() {
    var phoneNumber = document.getElementById("phone").value;
    var regex = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
    if (regex.test(phoneNumber)) {
      document.getElementById("message").innerHTML = "Valid phone number";
      document.getElementById("message").style.color = "green";
    } else {
      document.getElementById("message").innerHTML = "Invalid phone number or Enter valid number";
      document.getElementById("message").style.color = "red";
    }
  }
  function clearPhoneNumber() {
    document.getElementById("phone").value = "";
    document.getElementById("message").innerHTML = "";
  }
  
  