function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  var element = document.getElementById("myDropdown");
  element.classList.toggle("dropdown-contentfix");
}

function validateForm() {
  var x = document.forms["comments"]["firstname"].value;
  var x = document.forms["comments"]["lastname"].value;
  var x = document.forms["comments"]["subject"].value;
  if (x == "") {
    alert("First Name, Last Name, and Comments section must be filled out. Thank you!");
    return false;
  }
}