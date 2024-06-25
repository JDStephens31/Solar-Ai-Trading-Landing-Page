document.addEventListener('scroll', function() {
    document.querySelector('.hero-title').classList.remove('fade-in-up')
    let scrollTop = window.scrollY;
    let parallaxValue = scrollTop * 0.1; // Adjust this value for desired parallax effect
    
    if(window.innerWidth > 1000){
        document.querySelector('.hero-title').style.transform = `translateY(${parallaxValue}px)`;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".faq-item");

    items.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const arrow = item.querySelector(".arrow");

        question.addEventListener("click", () => {
            const isOpen = answer.style.display === "block";
            answer.style.display = isOpen ? "none" : "block";
            arrow.classList.toggle("open", !isOpen);
        });
    });
});

function whop() {
    window.location.href = "https://whop.com/solar-ai-trading/"
}

function discord() {
    window.location.href = "https://discord.gg/HYN2j72a"
}

