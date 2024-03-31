window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;

    if (scrollPosition >= windowHeight) {
        document.getElementById('nav').classList.add('scrolled');
    } else {
        document.getElementById('nav').classList.remove('scrolled');
    }
});

