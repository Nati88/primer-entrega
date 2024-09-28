//Convertir cada alumna en un objeto
let alumna = {
    nombre: "",
    apellido: "",
    metodoPago: "",
    pagoFinal: 0,
};

const pagoInicial = 15000;

//Array vacio que guardara alumna
let alumnas = [];

//Cursos que se ofrecen. Objeto
let faseUno = {
    nombre: "Fase 1",
    duracion:"2 clases semanales",
    description:"Este curso suele dictarse hasta los 3 meses post embarazo",
}
let faseDos = {
    nombre: "Fase 2",
    duracion:"2 clases semanales",
    description:"Este curso suele dictarse desde los 3 meses hasta los 6 meses post embarazo",
}
let faseTres = {
    nombre: "Fase 2",
    duracion:"2 clases semanales",
    description:"Este curso suele dictarse desde los 3 meses hasta los 6 meses post embarazo",
}

// Primer pedir alta médica, si la respuesta es si empezar a pedir datos
let alta = prompt("Es sumamente importante que tenga el alta médica (SI o NO)").toUpperCase();
if (alta === "SI") {
    function inscribir() {
        let alumnaNueva = Object.create(alumna);
        alumnaNueva.nombre = prompt("Ingrese su nombre:");
        alumnaNueva.apellido = prompt("Ingrese su apellido:");
            if((alumnaNueva.nombre!="") && (alumnaNueva.apellido !="")){
                // Elegir método de pago
                let metodoPago = prompt(`Ingrese el método de pago:
                    1) Efectivo (10% de descuento)
                    2) Crédito (15% de recargo)
                    3) Mercado Pago (5% de recargo`);
                //Segun el metodo de pago calcula el pago final
                switch (metodoPago) {
                    case "1":
                        alumnaNueva.pagoFinal = (pagoInicial - pagoInicial *0.1); // Descuento del 10%
                        // Agrego la nueva alumna al array
                        alumnas.push(alumnaNueva);
                        break;
                    case "2":
                        alumnaNueva.pagoFinal = pagoInicial * 1.15; // Recargo del 15%
                        // Agrego la nueva alumna al array
                        alumnas.push(alumnaNueva);
                        break;
                    case "3":
                        alumnaNueva.pagoFinal = pagoInicial * 1.05; // Recargo del 5%
                        // Agrego la nueva alumna al array
                        alumnas.push(alumnaNueva);
                        break;
                    default:
                        alert("No has elegido un metodo de pago. Intenta volver a inscribirte");
                        break;
                }
            }
            else if((!(alumnaNueva.nombre!="")) && (alumnaNueva.apellido!="")){
                alert("Necesitamos que ingreses correctamente tu nombre")
            }
            else if((alumnaNueva.nombre!="") && (!(alumnaNueva.apellido!=""))){
                alert("Necesitamos que ingreses correctamente tu apellido")
            }
    }
    //consultamos si quiere inscribir a otra persona
    let continuar = false;
    do{
        inscribir()
        continuar = confirm("Quieres inscribir a otra alumna?")
    }
    while (continuar) {
        //Al no querer inscribir a mas personas muestro las alumnas inscriptas
        for (let alumna of alumnas) {
            alert(`Hola ${alumna.nombre}, ${alumna.apellido}. El monto a pagar es $: ${alumna.pagoFinal}`);
        }
    }
} else {
    alert("Lamentamos comunicarle que no se puede inscribir sin alta médica.");
}

