    document.addEventListener('DOMContentLoaded', function () {
        // Obtiene la URL de la página actual
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

            if (linkHref && linkHref.endsWith(currentPage)) {
                link.classList.add('active');
            }
        });
    });
