document.addEventListener('scroll', function() {
    document.querySelector('.hero-title').classList.remove('fade-in-up')
    let scrollTop = window.scrollY;
    let parallaxValue = scrollTop * 0.1; // Adjust this value for desired parallax effect

    // Apply parallax effect to Mars image
    document.querySelector('.hero-title').style.transform = `translateY(${parallaxValue}px)`;

});