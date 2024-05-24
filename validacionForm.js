const email = document.getElementsByClassName ("email");
const password = document.getElementsByClassName("password");
const form = document.getElementsByClassName("form");

form.addEventListener('submit', (e) => {
    let message = []
    if (password.value.length <= 6){
        message.alert('La contraseña debe contener mas de 6 caracteres')
    }
    if (password.value.length >= 15){
        message.push('La contraseña debe contener menos de 15 caracteres')
    }
    if (password.value === contraseña){
        message.push('La contraseña no puede ser la palabra "contraseña"')
    }

})