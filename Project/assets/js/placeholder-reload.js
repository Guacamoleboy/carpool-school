// Makes sure our placeholder values reset on page reload.
// Else it'll keep same value as previously selected which is.. Not pretty? lol.

// - Guac

window.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('selectOption');
    const input = document.getElementById('inputDest');

    select.value = '';
    input.value = '';     
});