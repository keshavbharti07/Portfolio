// Dark Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
});


document.getElementById('read-more-button').addEventListener('click', function () {
    const hiddenCard = document.querySelector('.hidden-card');
    const button = this;

    // Toggle visibility of the hidden card
    if (hiddenCard.style.display === 'none' || hiddenCard.style.display === '') {
        hiddenCard.style.display = 'block'; // Show the hidden card
        button.textContent = '▲ Show Less ▲'; // Change button text
    } else {
        hiddenCard.style.display = 'none'; // Hide the hidden card
        button.textContent = '▼ Read More ▼'; // Change button text
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in and Slide-in Animations for Sections
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in', 'slide-in');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// Typing Effect for the Subtitle
const subtitle = document.querySelector('.header-bg p');
const text = "Computer Science Engineer | Passionate Developer";
let index = 0;

// Clear the subtitle text before starting the typing effect
subtitle.textContent = '';

function type() {
    if (index < text.length) {
        subtitle.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed here (100ms per character)
    }
}

// Start the typing effect when the page loads
window.onload = type;