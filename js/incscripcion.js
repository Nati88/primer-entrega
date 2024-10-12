// Array vacío que guardará alumnas
let alumnas = [];

// Obtener el formulario
const formulario = document.getElementById('formulario');

// Escuchar el evento de envío del formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Datos del formulario
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value;
    const pago = document.querySelector('input[name="pago"]:checked').value;

    const nombreRegex = /^[a-zA-Z\s]+$/; // Expresión regular que permite solo letras y espacios
    if (!nombreRegex.test(nombre)) {
        alert = 'El nombre no debe contener caracteres especiales.';
        return; // Sale de la función si hay error
    }

    // Crea un objeto con los datos
    const alumna = {
        nombre: nombre,
        edad: edad,
        email: email,
        formaDePago: pago
    };

    // Agrega la alumna al array
    alumnas.push(alumna);
    console.log(alumnas); // Muestra en la consola las alumnas registradas
    localStorage.setItem('alumnas', JSON.stringify(alumnas));
    // Opcional: Reiniciar el formulario después de enviar
    formulario.reset();

    // Cerrar el modal si es necesario
    closeModal();
});

// Funciones para abrir y cerrar el modal
var modal = document.getElementById("modal");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic en cualquier parte fuera del modal, cerrarlo
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Función para eliminar la inscripción
function removeRegistration() {
    alert("Inscripción eliminada.");
}
