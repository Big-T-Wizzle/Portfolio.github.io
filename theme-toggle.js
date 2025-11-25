const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// DARK MODE IS DEFAULT — LIGHT MODE ONLY WHEN CLASS IS APPLIED
toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-theme');

    if (body.classList.contains('light-theme')) {
        toggleButton.textContent = "🌙";  // Switch back to dark
    } else {
        toggleButton.textContent = "☀️";  // Switch to light mode
    }
});
