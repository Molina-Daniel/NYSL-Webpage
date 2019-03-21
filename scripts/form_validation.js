
// var form = document.querySelector('.registrationForm')

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   console.log('Submitted');
// })

// Add the novalidate attribute when the JS loads
var forms = document.querySelectorAll('.validate');

for (var i = 0; i < forms.length; i++) {
  forms[i].setAttribute('novalidate', true);
}


function validate() {

  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var firstNameRegex = /^[a-z ,.'-]+$/i;
  var lastNameRegex = /^[a-z ,.'-]+$/i;
  var firstNameResult = firstNameRegex.test(firstName);
  var lastNameResult = lastNameRegex.test(lastName);

  if (firstNameResult == false) {
    alert('Please enter a valid first name');
    return false;
  }

  if (lastNameResult == false) {
    alert('Please enter a valid last name');
    return false;
  }

  return true;
}












// var firstName = document.getElementById('firstName');
// var lastName = document.getElementById('lastName');

// function checkBlank() {

//   var errorMenssage = "";

//   if (firstName.value == "" || " ") {
//     errorMenssage += "Please, enter your first name \n";
//     firstName.style.borderColor = "red";
//   }

//   if (lastName.value == "" || " ") {
//     errorMenssage += "Please, enter your last name \n";
//     lastName.style.borderColor = "red";
//   }

//   if (errorMenssage != "") {
//     alert(errorMenssage);
//     return false;
//   }
// }