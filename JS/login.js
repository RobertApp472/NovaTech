document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");
    const correo = document.getElementById("correo");
    const password = document.getElementById("password");
    const errorCorreo = document.getElementById("errorCorreo");
    const errorPassword = document.getElementById("errorPassword");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let valido = true;
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexPassword = /^.{6,}$/;

        // Validar correo
        if (!regexCorreo.test(correo.value)) {
            errorCorreo.textContent = "Correo no válido";
            valido = false;
        } else {
            errorCorreo.textContent = "";
        }

        // Validar contraseña
        if (!regexPassword.test(password.value)) {
            errorPassword.textContent = "Mínimo 6 caracteres";
            valido = false;
        } else {
            errorPassword.textContent = "";
        }

        if (valido) {
            // Guardar sesión
            localStorage.setItem("usuario", correo.value);

            alert("Login exitoso");
            window.location.href = "productos.html";
        }
    });
});
