document.addEventListener('DOMContentLoaded', function () {

    console.log('JS funcionando');

    const toggleHabilidades = document.getElementById('toggle-habilidades');
    const habilidades = document.getElementById('habilidades');

    const toggleEducacion = document.getElementById('toggle-educacion');
    const educacion = document.getElementById('educacion');

    function toggleElement(element) {
        if (element.classList.contains('oculto')) {
            element.classList.remove('oculto');
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
            element.classList.add('oculto');
        }
    }

    if (toggleHabilidades && habilidades) {
        toggleHabilidades.addEventListener('click', function () {
            toggleElement(habilidades);
            console.log('Habilidades toggle');
        });
    }

    if (toggleEducacion && educacion) {
        toggleEducacion.addEventListener('click', function () {
            toggleElement(educacion);
            console.log('Educación toggle');
        });
    }

});