const name = document.querySelector('#name');
const responseName = document.getElementById('resName');

const firstName = document.querySelector('#firstName');
const responseFirstName = document.getElementById('resFirstName');

const birthDate = document.querySelector('#birthDate');
const responseBirthDate = document.getElementById('resBirthDate');

const socialSecurity = document.querySelector('#socialSecurity');
const responseSocialSecurity = document.getElementById('resSocialSecurity');

const address = document.querySelector('#address');
const responseAddress = document.getElementById('resAddress');

name.addEventListener('input', updateValue);
firstName.addEventListener('input', updateValue);
birthDate.addEventListener('input', updateValue);
socialSecurity.addEventListener('input', updateValue);
address.addEventListener('input', updateValue);

function updateValue(event){
    switch (event.srcElement.id) {
        case 'name':
            responseName.textContent = event.target.value;
            break;
        case 'firstName':
            responseFirstName.textContent = event.target.value;
            break;
        case 'birthDate':
            responseBirthDate.textContent = event.target.value;
            break;
        case 'socialSecurity':
            responseSocialSecurity.textContent = event.target.value;
            break;
        case 'address':
            responseAddress.textContent = event.target.value;
            break;
    }
    event.stopPropagation();
}
