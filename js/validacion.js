document.querySelector('form').addEventListener('submit', function (event) {
    let allValid = true;

    // Verificar los campos de entrada
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
            allValid = false;
        } else {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid'); // Agrega borde verde
        }
    });

    // Validación de email
    const email = document.getElementById('email');
    const emailInvalidFeedback = email.nextElementSibling;

    if (email.value.trim() === '') {
        emailInvalidFeedback.textContent = 'Por favor, ingresa tu e-mail.';
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        allValid = false;
    } else if (!email.checkValidity()) {
        emailInvalidFeedback.textContent = 'Por favor, ingresa un email válido.';
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        allValid = false;
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid'); // Agrega borde verde
    }

    // Validación de contraseñas
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');

    if (password1.value.length < 6) {
        password1.classList.add('is-invalid');
        password1.classList.remove('is-valid');
        allValid = false;
    } else {
        password1.classList.remove('is-invalid');
        password1.classList.add('is-valid'); // Agrega borde verde
    }

    if (password1.value !== password2.value) {
        password2.classList.add('is-invalid');
        password2.classList.remove('is-valid');
        password2.setCustomValidity('Las contraseñas no coinciden.');
        allValid = false;
    } else {
        password2.classList.remove('is-invalid');
        password2.classList.add('is-valid'); // Agrega borde verde
        password2.setCustomValidity('');
    }

    // Validación del checkbox de términos y condiciones
    const termsCheckbox = document.getElementById('terminos');
    const TermBut = document.getElementById('TermBut');
    const termsLabel = document.getElementById('termsLabel');
    const termsFeedback = document.getElementById('termsFeedback');

    if (!termsCheckbox.checked) {
        TermBut.classList.add('text-danger');
        termsLabel.classList.add('text-danger');
        termsFeedback.style.display = 'block';
        allValid = false;
    } else {
        TermBut.classList.remove('text-danger');
        termsLabel.classList.remove('text-danger');
        termsLabel.classList.add('text-success');
        termsFeedback.style.display = 'none';
    }

    // Evita el envío si no está validado
    if (!allValid) {
        event.preventDefault();
        event.stopPropagation();
    }
});
