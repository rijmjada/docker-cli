document.addEventListener('DOMContentLoaded', function () {
    let currentPage = window.location.pathname.split('/').pop();

    let navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(function (link) {
        let linkHref = link.getAttribute('href');

        if (linkHref && linkHref.endsWith(currentPage)) {
            link.classList.add('active');
        }
    });
});
