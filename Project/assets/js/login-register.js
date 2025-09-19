// Handles the login and register buttons

// - Guac

document.getElementById('registerBtn').addEventListener('click', function() {
    window.location.href = '../register/register.html';
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
   
    window.location.href = '../index.html';
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    window.location.href = '../index.html';
});