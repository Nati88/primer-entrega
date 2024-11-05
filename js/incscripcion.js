// Array vacío que guardará alumnas
let alumnas = [];

// Obtener el formulario
const formulario = document.getElementById('formulario')
const modal = document.getElementById('modal')
const resultado = document.getElementById('resultado')
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
        alert ('El nombre no debe contener caracteres especiales.');
        return; // Sale de la función si hay error
    }
    function calcularCosto(formaDePago){
        let montoMensual = 15.000
        let montoFinal=0
        switch(pago){
            case "efectivo":
            montoFinal=montoMensual-(montoMensual*0.15)
            break
            case "credito":
            montoFinal=montoMensual+(montoMensual*0.1)
            break
            case "mercado_pago":
            montoFinal=montoMensual-(montoMensual*0.05)
            break
        }
        return montoFinal
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

    const costoFinal = calcularCosto(pago)
    resultado.innerHTML = `
    <h3>Bienvenida a nuestro grupo!</h3>
    <p>Hola ${nombre}! Has sido inscripta correctamente, 
    debido a que elegiste como método de pago ${pago}, el costo final mensual es de $${costoFinal.toFixed(2)}</p>`;
    openModal()
    //Reiniciar el formulario después de enviar
    formulario.reset()
})

// Funciones para abrir y cerrar el modal
function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

// Al hacer clic en cualquier parte fuera del modal, se cierra
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Función para eliminar la inscripción
function removeRegistration() {
    alert("Inscripción eliminada.");
}

document.getElementById('formularioTips').addEventListener('submit', function(event){
    event.preventDefault(); 
    const nombre = document.getElementById('nombreDos').value;
    const email = document.getElementById('emailDos').value;
    const mensaje = document.getElementById('mensajeDos').value;
    setTimeout(()=>{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "En breves recibiras informacion",
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            // Limpiar los campos después del mensaje de que se enviaron correctamente los datos
            document.getElementById('nombreDos').value = '';
            document.getElementById('emailDos').value = '';
            document.getElementById('mensajeDos').value = '';
        });
    }, 500)
})

// Definir la ciudad
const ciudad = 'Mendoza';

// Hacer una petición GET a la API
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=849016c8f42decc67819f772966b717b&units=metric&lang=es`)
    .then(response => response.json())
    .then(data => {
    // Verificar que los datos se recibieron correctamente
    console.log(data);  // Verifica la respuesta completa de la API

    if (data.cod === 200) { 
        // Procesar los datos y mostrar el clima en la página
        const temperatura = data.main.temp; // Temperatura 
        const descripcion = data.weather[0].description; // Descripción del clima
        const icono = data.weather[0].icon; // Icono del clima

        const climaContainer = document.getElementById('clima-container');
        climaContainer.innerHTML = `
            <h3>Clima en ${ciudad}</h3>
            <p>Temperatura: ${temperatura} °C</p>
            <p>Condición: ${descripcion}</p>
            <img src="https://openweathermap.org/img/wn/${icono}.png" alt="${descripcion}">
        `;
    } else {
        // Si la API devuelve un error, muestra un mensaje
        console.error('Error en la respuesta de la API:', data.message);
        const climaContainer = document.getElementById('clima-container');
        climaContainer.innerHTML = `<p>No se pudo obtener el clima para la ciudad ${ciudad}. Error: ${data.message}</p>`;
    }
})


