let loginInput = document.getElementById("login-input");
let passwordInput = document.getElementById("password-input");
let messageValidator = document.getElementById("msg-validator");

const regexLogin = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
const hasNumber = /\d/;
const hasSpecial = /[-$&@!]/;
const hasEnoughChar = /^.{6,8}$/;

loginInput.addEventListener("keyup", (e) => {
    loginInput.style.color = "white";
    if (e.target.value.length > 0) {
        if (regexLogin.test(e.target.value)) {
            loginInput.style.backgroundColor = "green";
        } else {
            loginInput.style.backgroundColor = "red";
        }
    } else {
        loginInput.style.backgroundColor = 'var(--color-base-100)';
    }
})

passwordInput.addEventListener("keyup", (e) => {
    if (e.target.value.match(hasEnoughChar)) {
        if (e.target.value.match(hasNumber) && e.target.value.match(hasSpecial)) {
            messageValidator.innerHTML = `
                <p>Le password est valide</p>
            `
        } else {
            if (!e.target.value.match(hasNumber)) {
                messageValidator.innerHTML = `
                    <p>Le password doit contenir un chiffre</p>
                `
            }
            if (!e.target.value.match(hasSpecial)) {
                messageValidator.innerHTML = `
                    <p>Le password doit contenir un caractère spécial $,&,@ ou !</p>
                `
            }
        }
    } else {
        if (e.target.value.length > 0) {
            if (e.target.value.length < 6) {
                messageValidator.innerHTML = `
                    <p>Le password est trop court</p>
                `
            } else if(e.target.value.length > 8) {
                messageValidator.innerHTML = `
                    <p>Le password est trop long</p>
                `
            }
        } else {
            messageValidator.innerHTML = "";
        }
        
    }
})