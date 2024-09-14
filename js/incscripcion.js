let nombre = prompt("Ingresa tu nombre")
let apellido = prompt("Ingresa tu apellido")
let alta = prompt("Tiene el alta medica? Ingrese SI O NO")
for(let i=0; i<5; i++) {
    if((nombre!="") && (apellido !="") && (alta=="SI")){
        alert("Elija la forma de pago")
        alert("1 Efectivo")
        alert("2 Credito")
        alert("3 Transferencia")
        let medioPago=prompt("Ingrese el numero correspondiente a la opcion elegida")
        switch(medioPago){
            case "1":
                alert(`Hola ${nombre} ${apellido}, es un placer informarte que ya sos parte de nuestra comunidad. Por la forma de pago elegida recibiras un descuento.`)
                break
            case "2":
                alert(`Hola ${nombre} ${apellido}, es un placer informarte que ya sos parte de nuestra comunidad. Por la forma de pago elegida tiene un recargo del 10%.`)
                break
            case "3":
                alert(`Hola ${nombre} ${apellido}, es un placer informarte que ya sos parte de nuestra comunidad. Por la forma de pago elegida recibiras un descuento.`)
                break
            }
        break
    }
    else if ((nombre!="") && (apellido!="") && (alta=="NO")){
        alert("Para poder inscribirte en  nuestro plan necesitamos el alta medica.")
        break
    }
    else if((!(nombre!="")) && (apellido!="") && (alta=="SI")){
        alert("Necesitamos que ingreses correctamente tu nombre")
        break
    }
    else if((nombre!="") && (!(apellido!="")) && (alta=="SI")){
        alert("Necesitamos que ingreses correctamente tu apellido")
        break
    }
}