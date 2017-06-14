var Largo;
(function (Largo) {
    Largo[Largo["corto"] = 0] = "corto";
    Largo[Largo["mediano"] = 1] = "mediano";
    Largo[Largo["largo"] = 2] = "largo";
})(Largo || (Largo = {}));
class Motor {
    constructor(potencia, tipo) {
        this.potencia = potencia;
        this.tipo = tipo;
    }
    encender(callback) {
        window.setTimeout(() => { callback(true, this.tipo); }, 3000);
    }
    apagar(callback) {
        window.setTimeout(() => { callback(true, this.tipo); }, 3000);
    }
}
class Accesorio {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}
class Vehiculo {
    constructor(precioBase, motor, marca, modelo, listaAccesorios) {
        this._precioBase = precioBase;
        this._motor = motor;
        this.marca = marca;
        this.modelo = modelo;
        this._listaAccesorios = listaAccesorios;
    }
    get precioBase() {
        return this._precioBase;
    }
    set precioBase(precio) {
        this._precioBase = precio;
    }
    get motor() {
        return this._motor;
    }
    set motor(motor) {
        this._motor = motor;
    }
    get listaAccesorios() {
        return this._listaAccesorios;
    }
    set listaAccesorios(lista) {
        this._listaAccesorios = lista;
    }
    obtenerPrecioTotal() {
        return this._precioBase * 1.08;
    }
    agregarAccesorios(...accesorios) {
        accesorios.forEach(element => {
            this._listaAccesorios = this.listaAccesorios + "," + element.nombre;
        });
    }
}
class Camion extends Vehiculo {
    constructor(precioBase, motor, marca, modelo, listaAccesorios, largo, cuatroXcuatro) {
        super(precioBase, motor, marca, modelo, listaAccesorios);
        this.largo = largo;
        this.cuatroXcuatro = cuatroXcuatro;
    }
}
window.onload = () => {
    let motor = new Motor(4.0, "V8");
    let camion = new Camion(200000, motor, "Volvo", "noTengoIdea", "AA,DH", Largo.largo, true);
    let acc1 = new Accesorio(1, "accesorio1");
    let acc2 = new Accesorio(2, "accesorio2");
    camion.agregarAccesorios(acc1, acc2);
    let callbackEncender = (estado, tipo) => {
        alert("El motor esta encendido");
    };
    let callbackApagar = (estado, tipo) => {
        alert("El motor esta apagado");
    };
    camion.motor.encender(callbackEncender);
    alert(camion.listaAccesorios);
    alert(camion.obtenerPrecioTotal());
    camion.motor.apagar(callbackApagar);
};
