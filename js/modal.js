const name = document.querySelector('#name');
const responseName = document.getElementById('resName');

const firstName = document.querySelector('#firstName');
const responseFirstName = document.getElementById('resFirstName');

const birthDate = document.querySelector('#birthDate');
const responseBirthDate = document.getElementById('resBirthDate');

const socialSecurityNumber = document.querySelector('#socialSecurity');
const responseSocialSecurity = document.getElementById('resSocialSecurity');

const address = document.querySelector('#address');
const responseAddress = document.getElementById('resAddress');

name.addEventListener('input', updateValue);
firstName.addEventListener('input', updateValue);
birthDate.addEventListener('input', updateValue);
socialSecurityNumber.addEventListener('input', updateValue);
address.addEventListener('input', updateValue);

function updateValue(event){
    responseName.textContent = event.target.value;
    event.stopPropagation();
    responseFirstName.textContent = event.target.value;
    event.stopPropagation();
    responseBirthDate.textContent = event.target.value;
    event.stopPropagation();
    responseSocialSecurity.textContent = event.target.value;
    event.stopPropagation();
    responseAddress.textContent = event.target.value;
    event.stopPropagation();
}
