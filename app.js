'use strict'
//revisar sobre o ; no js para saber quando usa´lo
//criação do botão para trocar os themas da pagina web

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme')
    //alternação do tema.

    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";

    } else {
        this.textContent = "Light";
    }

    console.log('current class name:' + className);
});
