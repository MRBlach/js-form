
// Form blur event listeners
document.getElementById('firstName').addEventListener('blur',validateFirstName);
document.getElementById('lastName').addEventListener('blur',validateLastName);
document.getElementById('phoneNumber').addEventListener('blur',validatePhoneNumber);
document.getElementById('email').addEventListener('blur',validateEmail);

// document.getElementById('submit').addEventListener('click', validateSubmit);


document.getElementById('firstName').addEventListener('blur',validateForm);
document.getElementById('lastName').addEventListener('blur',validateForm);
document.getElementById('phoneNumber').addEventListener('blur',validateForm);
document.getElementById('email').addEventListener('blur',validateForm);

const isValid = {
  fname: false,
  lname: false,
  email: false,
  phone: false
}
const submitForm = document.getElementById('submitForm').addEventListener('submit', thankYou);
const submitButton = document.querySelector('input[type=submit]');
const toolTip = document.querySelector('.toolTip');


// onBlur First name validator
function validateFirstName () {
  const firstName = document.getElementById('firstName');
  const re = /^[a-zA-Z]{2,20}$/;

  if(!re.test(firstName.value)){
    firstName.classList.add('is-invalid');
    isValid.fname = false;
  } else {
    firstName.classList.remove('is-invalid');
    isValid.fname = true;
  }
}

// onBlur Last name validator
function validateLastName () {
  const lastName = document.getElementById('lastName');
  const re = /^[a-zA-Z]{2,20}$/;

  if(!re.test(lastName.value)){
    lastName.classList.add('is-invalid');
    isValid.lname = false;
  } else {
    lastName.classList.remove('is-invalid');
    isValid.lname = true;
  }
}

// onBlur Phone number validator
function validatePhoneNumber () {
  const phone = document.getElementById('phoneNumber');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
    isValid.phone = false;
  } else {
    phone.classList.remove('is-invalid');
    isValid.phone = true;
  }
}

// onBlur Email validator
function validateEmail () {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
    isValid.email = false;
    
  } else {
    email.classList.remove('is-invalid');
    isValid.email = true;    
  }
}


function validateForm() {
  // check if all the values in the isValid state are true
  const canSubmit = Object.values(isValid).every((val) => val)
 
  // if all fields are valid then enable the submit
  if (canSubmit) {
    submitButton.disabled = false;
    toolTip.title = 'Submit';
    } else {
      submitButton.disabled = true;
    }
}


// Thank You page
// document.querySelector('.btn-success').addEventListener('click', thankYou)
function thankYou() {

  document.querySelector('.card-header').innerHTML = `
  <h1>Thank You</h1>`;
  document.querySelector('.card-body').innerHTML = `
  <p>Your form has been submited successfully.</p>`;
  document.querySelector('.card-footer').innerHTML = `
  <input id="return" class="btn text-white text-center" onclick="window.location.reload()" value="Return">`;
  
}