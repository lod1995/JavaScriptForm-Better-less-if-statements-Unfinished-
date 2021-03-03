const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

form.addEventListener('submit', function(e) {
  e.preventDefault();

  console.log("username");
  console.log("password");
  console.log("email");
  console.log("password2");

  function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
      console.log(input.value);
      if (input.value.trim() === "") {
        showError(input, `${getFieldName(input)} is required`);
      } else {
        showSuccess(input);
      }
    })
  }


function checkLenght(input, min, max){
if(input.value.lenght < min) {
  showError(input, `${getFieldName(input)} must be at least ${min} characters`);

} else if(input.value.lenght > max) {
  showError(input, `${getFieldName(input)} must be less that ${max} characters`);
} else {
showSuccess(input);
}

}

 function getFieldName(input) {
   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
 }

checkRequired([username, email, password, password2]);
// checkLenght(username, 3, 15 );
// checkLenght(password, 6, 25 );


});
