// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const moonIcon = document.querySelector('.moon-icon');
const sunIcon = document.querySelector('.sun-icon');

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        // Saat dark mode aktif
        sunIcon.style.opacity = "0";
        sunIcon.style.transform = "rotate(180deg)";

        moonIcon.style.opacity = "1";
        moonIcon.style.transform = "rotate(0deg)";
    } else {
        // Saat dark mode nonaktif
        sunIcon.style.opacity = "1";
        sunIcon.style.transform = "rotate(0deg)";

        moonIcon.style.opacity = "0";
        moonIcon.style.transform = "rotate(-180deg)";
    }
});
