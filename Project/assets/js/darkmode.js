// Darkmode JavaScript by Guacamoleboy
// Feel free to use. Goes with CSS & HTML aswell.

// - Guac

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

if (localStorage.getItem('mode') === 'dark') {
    setDarkMode();
} else {
    setLightMode(); 
}

toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        setLightMode();
    } else {
        setDarkMode();
    }
});