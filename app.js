
let item, itemElimina, tipo, siNo ="";
let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = []

 do {
    siNo = prompt('Deseas agregar un alimento a tu lista de compras "A", eliminar algún inrediente de la lista "E" o termianar la lista "T".');

    //Agregando ingredientes a la lista
    if (siNo.toUpperCase() == "A") {
        //Agregando items a la lista

        item = prompt("¿Qué alimento deseas agregar?");
        tipo = prompt("¿En qué categoría se encaja ese alimento? Frutas=1, Lacteos=2, Congelados=3, Dulces=4");

        switch (tipo) {
            case "1":
                frutas.push(item);
                alert("Alimento ingresado a la lista.");
                break;
            case "2":
                lacteos.push(item);
                alert("Alimento ingresado a la lista.");
                break;
            case "3":
                congelados.push(item);
                alert("Alimento ingresado a la lista.");
                break;
            case "4":
                dulces.push(item);
                alert("Alimento ingresado a la lista.");
                break;
            default:
                alert("Error de categoría, alimento NO aregado.")
                break;
        }

        //Saliendo del bucle para finalizar la lista
    }else if (siNo.toUpperCase() == "T"){
        //Salimos del while
        alert("Ok, ya tu lista está terminada.");
        break;

        //Elimenando alún ingrediente de la lista
    }else if (siNo.toUpperCase() == "E") {
        itemElimina = prompt(`Los ingredeintes disponibles son: \nFrutas: ${frutas} \nLacteos: ${lacteos} \nCongelados: ${congelados} \nDulces: ${dulces} \n ¿Qué ingrediente deseas eliminar?`);

        if (frutas.includes(itemElimina)){ //revisando si está en frutas
            frutas.splice(frutas.indexOf(itemElimina),1); //eliminando el ingredeinte de las frutas
            alert(`Eliminado ${itemElimina} de la lista de frutas,\n Frutas: ${frutas}`);
        }else if (lacteos.includes(itemElimina)) {
            lacteos.splice(lacteos.indexOf(itemElimina),1);
            alert(`Eliminado ${itemElimina} de la lista de lacteos,\n Lácteos: ${frutas}`);
        }else if (congelados.includes(itemElimina)) {
            congelados.splice(conelados.indexOf(itemElimina),1);
            alert(`Eliminado ${itemElimina} de la lista de congelados,\n Congelados: ${frutas}`);
        }else if (dulces.includes(itemElimina)) {
            dulces.splice(dulces.indexOf(itemElimina),1);
            alert(`Eliminado ${itemElimina} de la lista de dulces,\n Dulces: ${frutas}`);
        }else {
            alert('!No fue posible encontrar el elemento en la lista!');
        }


    } else{
        //Error en la variable a ingresar
        alert(`Ingresate "${siNo}" y debe ser "A", "E" o "T".`);
    }
    
 } while (true);
alert(`Lista de Compras: \nFrutas: ${frutas} \nLacteos: ${lacteos} \nCongelados: ${congelados} \nDulces: ${dulces}`);
alert("Gracias por usar nuetro sistema...");

