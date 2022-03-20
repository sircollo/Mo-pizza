

$(document).ready(function(event){
//form validation
  $("#new-order").submit(function (event) {
    event.preventDefault();

    var checkBoxes = document.getElementsByClassName("form-check-input");
    var isChecked = false;
    for (var i = 0; i < checkBoxes.length; i++) {
      if (checkBoxes[i].checked) {
        isChecked = true;
      }
    }

    if (!isChecked) {
      alert("Choose a Topping");
    }
  });



});