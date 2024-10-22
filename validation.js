// validation script here
const inputs = document.querySelectorAll('input');

const patterns = {
  telephone:/^\+2507[8|9|3|2]\d{7}$/,
  username:/^[\w\s]{5,}$/i,
  password:/^[\w@-]{8,20}$/i,
  slug:/^[a-z\d-]{8,20}$/,
  email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

//validation function
function validate(field, regex){
  if(regex.test(field.value)){
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
  
}

inputs.forEach((input) => {
  input.addEventListener('keyup',(e) => {
    // console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value])  
  });
});
