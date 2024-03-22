document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // You can add your authentication logic here
        if (username === 'your_username' && password === 'your_password') {
            // Successful login
            errorMessage.innerText = 'Login successful!';
            errorMessage.style.color = 'green';
        } else {
            // Failed login
            errorMessage.innerText = 'Invalid username or password';
            errorMessage.style.color = 'red';
        }
    });
});