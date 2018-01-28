var fecha = new Date();
var dia = fecha.getDate();
var year = fecha.getFullYear();

function fecha1() {

    //    document.write(fecha);

    switch (fecha.getDay()) {
        case 0:
            day = "Domingo";
            break;
        case 1:
            day = "Lunes";
            break;
        case 2:
            day = "Martes";
            break;
        case 3:
            day = "Miercoles";
            break;
        case 4:
            day = "Jueves";
            break;
        case 5:
            day = "Viernes";
            break;
        case 6:
            day = "Sabado";
            break;
    }

    switch (fecha.getMonth()) {
        case 0:
            mes = "Enero";
            break;
        case 1:
            mes = "Frebrero";
            break;
        case 2:
            mes = "Marzo";
            break;
        case 3:
            mes = "Abril";
            break;
        case 4:
            mes = "Mayo";
            break;
        case 5:
            mes = "Junio";
            break;
        case 6:
            mes = "Julio";
            break;
        case 7:
            mes = "Agosto";
            break;
        case 8:
            mes = "Septiembre";
            break;
        case 9:
            mes = "Octubre";
            break;
        case 10:
            mes = "Noviembre";
            break;
        case 11:
            mes = "Diciembre";
            break;
    }
    var fechacompleta = document.getElementById("fechaactual");
    fechacompleta.innerHTML = "La fecha actual es: " + day + " " + dia + " de " + mes + " de " + year;
    //    document.write("La fecha actual es: " + day + " " + dia + " de " + mes + " de " + year);

    //    console.log(fecha.getHours() - 12);
    //    console.log(fecha.getMinutes());
    //    console.log(fecha.getSeconds());
    //    console.log(fecha.getDay());
    //    console.log(fecha.getDate());
    //    console.log(fecha.getMonth() + 1);
    //    console.log(fecha.getFullYear());
};

fecha1();


function validar() {
    // Declarar variables de nacimiento
    var dianacimiento = document.getElementById("dia").value;
    var mesnacimiento = document.getElementById("mes").value;
    var yearnacimiento = document.getElementById("year").value;


    //var meses = document.getElementById("meses").value;
    var boton = document.getElementById("boton").value;
    // Declarar variables fecha de aplicación
    var diaaplicacion = fecha.getDate();
    var mesaplicacion = fecha.getMonth() + 1;
    var yearaplicacion = fecha.getFullYear();

    console.log(diaaplicacion);
    console.log(mesaplicacion);
    console.log(yearaplicacion);

    // meses.innerHTML = dia + mes + year;
    //var calculo = document.getElementById("meses");
    //alert(dia.value + mes.value + year.value);

    if (dianacimiento === "" || mesnacimiento === "" || yearnacimiento === "") {
        alert("Todos los campos son obligatorios");
        return false;
    } else if (dianacimiento.length > 2) {
        alert("El día de nacimiento es muy largo");
        return false;
    } else if (mesnacimiento.length > 2) {
        alert("El mes de nacimietno es muy largo");
        return false;
    } else if (yearnacimiento.length > 4) {
        alert("El año de nacimietno es muy largo");
        return false;
    } else {
        if (dianacimiento <= diaaplicacion || mesnacimiento <= mesaplicacion || yearnacimiento <= yearaplicacion) {
            var diafinal = diaaplicacion - dianacimiento;
            var mesfinal = mesaplicacion - mesnacimiento;
            var yearfinal = yearaplicacion - yearnacimiento;

            var yearfinal = yearfinal * 12;
            var yearfinal = yearfinal + mesfinal;

            console.log(diafinal);
            console.log(mesfinal);
            console.log(yearfinal);
            alert("Edad en meses es: " + yearfinal);
            //return false;
        }
    }

};