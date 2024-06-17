//Evento: click no botão para trocar de tema.
'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark mode";

    } else {
        this.textContent = "Light mode";
    }

    console.log('current class name:' + className);
});
