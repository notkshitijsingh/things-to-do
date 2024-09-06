document.addEventListener('DOMContentLoaded', function() {
    const logindiv = document.getElementById('logindiv');
    const registerdiv = document.getElementById('registerdiv');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    const loginButton = document.getElementById('login-button');

    if (logindiv && registerdiv && showRegister && showLogin) {
        showRegister.addEventListener('click', function(event) {
            event.preventDefault(); 
            logindiv.style.display = 'none';
            registerdiv.style.display = 'block';
        });

        showLogin.addEventListener('click', function(event) {
            event.preventDefault(); 
            registerdiv.style.display = 'none';
            logindiv.style.display = 'block';
        });
    }

    if (loginButton) {
        loginButton.addEventListener('click', function() {
            window.location.href = '../pages/list.html';
        });
    }
});
