document.addEventListener("DOMContentLoaded", function (event) {
    let login = localStorage.getItem('login');
    let firstName = localStorage.getItem('firstname');
    if (login != null) {
        document.getElementById('wrapper__button').innerHTML = `<div>Привет, ${firstName}!</div><button id="buttonOut" onclick="outUser()" class="regButton">Выйти</button>`
    }
})

function showReg(state) {
    document.getElementById('window').style.display = state;
    document.getElementById('gray').style.display = state;
}

function showIn(state) {
    document.getElementById('windowIn').style.display = state;
    document.getElementById('gray2').style.display = state;
    let email = localStorage.getItem('email');
    let password = localStorage.getItem('pass');
    if (email != null) {
        document.querySelector('#email__in').value = email;
    }
    if (email != null) {
        document.querySelector('#pass__in').value = password;
    }
}

function pushReg() {
    let firstName = document.querySelector('#firstname').value;
    let lastName = document.querySelector('#lastname').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#pass1').value;
    let password2 = document.querySelector('#pass2').value;
    document.querySelector('.error').innerHTML = '';

    if (localStorage.getItem('firstName') == null) {
        localStorage.setItem('firstname', firstName);
    }

    if (localStorage.getItem('lastname') == null) {
        localStorage.setItem('lastname', lastName);
    }
    if (localStorage.getItem('email') == null) {
        localStorage.setItem('email', email);
    }
    if (localStorage.getItem('pass') == null) {
        if (password === password2) {
            localStorage.setItem('pass', password);
        } else {
            document.querySelector('.error').innerHTML = 'Пароль не совпадает!'
        }
    }

    localStorage.setItem('login', true);

    document.getElementById('window').style.display = "none";
    document.getElementById('gray').style.display = "none";

    document.querySelector('form').addEventListener('submit', (e) => e.preventDefault())

    document.getElementById('wrapper__button').innerHTML = `<div>Привет, ${firstName}!</div><button id="buttonOut" onclick="outUser()" class="regButton">Выйти</button>`
}

function getReg() {
    document.querySelector('#inForm').addEventListener('submit', (e) => e.preventDefault())
    document.getElementById('windowIn').style.display = "none";
    document.getElementById('gray2').style.display = "none";
    document.getElementById('wrapper__button').innerHTML = `<div>Привет, ${localStorage.getItem('firstname')}!</div><button id="buttonOut" onclick="outUser()" class="regButton">Выйти</button>`

    localStorage.setItem('login', true);
}

function outUser() {
    document.getElementById('wrapper__button').innerHTML = `<button id="buttonReg" onclick="showReg('block')" class="regButton">Регистрация</button>
    <button id="buttonIn" onclick="showIn('block')" class="regButton">Войти</button>`
    localStorage.removeItem('login');
}