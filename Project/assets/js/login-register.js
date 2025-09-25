// Handles the login and register buttons

// - Guac

// ___________________________________________________________________________________

document.getElementById('registerBtn').addEventListener('click', function() {
    window.location.href = '../register/register.html';
});

// ___________________________________________________________________________________

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
   
    window.location.href = '../index.html';
});

// ___________________________________________________________________________________

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    window.location.href = '../index.html';
});