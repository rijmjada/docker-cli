document.addEventListener('DOMContentLoaded', function () {
    let currentPage = window.location.pathname.split('/').pop();
    let navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(function (link) {
        link.classList.remove('active');
    });

    navLinks.forEach(function (link) {
        let linkHref = link.getAttribute('href');
        if ((currentPage === '' && linkHref === './') || (currentPage !== '' && linkHref.includes(currentPage))) {
            link.classList.add('active');
        }
    });
});