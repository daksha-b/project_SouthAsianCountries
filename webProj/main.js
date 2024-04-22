function validateForm() {
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        return;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    if (password.length < 8) {
        document.getElementById('passwordError').style.display = 'block';
        return;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    // If validation passes, you can submit the form or perform other actions here
    document.getElementById('loginForm').submit(); // Example: submitting the form
    window.location.href = "afterLogin.html?login=success";
    return false;
}
