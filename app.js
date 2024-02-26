document.addEventListener('DOMContentLoaded', function () {
    // Obtiene la parte de la URL después de la última barra
    var currentPage = window.location.pathname.split('/').pop();

    // Obtiene todos los elementos de enlace en la barra de navegación
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Elimina la clase 'active' de todos los enlaces
    navLinks.forEach(function (link) {
        link.classList.remove('active');
    });

    // Itera sobre los elementos de enlace y establece la clase 'active' si la URL coincide
    navLinks.forEach(function (link) {
        var linkHref = link.getAttribute('href');

        // Verifica si estamos en la página de inicio y ajusta la comparación
        if ((currentPage === '' && linkHref === './') || (currentPage !== '' && linkHref.includes(currentPage))) {
            link.classList.add('active');
        }
    });
});