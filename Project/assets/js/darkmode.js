// Darkmode JavaScript by Guacamoleboy
// Feel free to use. Goes with CSS & HTML aswell.

// - Guac

// ___________________________________________________________________________________

const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

const setDarkMode = () => {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️'; 
    localStorage.setItem('mode', 'dark');
};

const setLightMode = () => {
    body.classList.remove('dark-mode');
    toggleBtn.textContent = '🌙'; 
    localStorage.setItem('mode', 'light');
};

// ___________________________________________________________________________________

if (localStorage.getItem('mode') === 'dark') {
    setDarkMode();
} else {
    setLightMode(); 
}

// ___________________________________________________________________________________

toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        setLightMode();
    } else {
        setDarkMode();
    }
});