document.addEventListener('scroll', function() {
    document.querySelector('.hero-title').classList.remove('fade-in-up')
    let scrollTop = window.scrollY;
    let parallaxValue = scrollTop * 0.1; // Adjust this value for desired parallax effect
    
    if(window.innerWidth > 1000){
        document.querySelector('.hero-title').style.transform = `translateY(${parallaxValue}px)`;
    }
});