// Fetching nav bar
const nav = document.querySelector('.nav')
fetch('/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
});

// Fetching footer
const footer = document.querySelector('.footer')
fetch('/footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
})

// Reveal on scroll
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.hidden');

    const revealElement = () => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('reveal');
            }
        });
    };

    window.addEventListener('scroll', revealElement);
    revealElement(); // Reveal elements that are already in view on load
});