enum Longitud{
    corto,
    mediano,
    largo
}

class Motor{
    public potencia:number;
    public tipo:string;

    constructor(potencia:number, tipo:string){
        this.potencia = potencia;
        this.tipo = tipo;
    }

    public encender(callback:(estado:boolean, tipo:string)=>void):void{
        window.setTimeout(() => {callback(true, this.tipo);}, 3000);
    }

    public apagar(callback:(estado:boolean, tipo:string)=>void):void{
        window.setTimeout(() => {callback(true, this.tipo);}, 3000);
    }
}

class Accesorio{
    public id;
    public nombre;
}

class Vehiculo{
    private _precioBase:number;
    private _motor:Motor;
    marca:string;
    modelo:string;
    private _listaAccesorios:string;

    constructor(precioBase:number, motor:Motor, marca:string, modelo:string, listaAccesorios:string){
        this._precioBase = precioBase;
        this._motor = motor;
        this.marca = marca;
        this.modelo = modelo;
        this._listaAccesorios = listaAccesorios;
    }

    get PrecioBase(){
        return this._precioBase;
    }
    set precioBase(precio:number){
        this._precioBase = precio;
    }

    get Motor(){
        return this._motor;
    }
    set Motor(motor:Motor){
        this._motor = motor;
    }

    get ListaAccesorios(){
        return this._listaAccesorios;
    }
    set ListaAccesorios(lista:string){
        this._listaAccesorios = lista;
    }

    public precioTotal():number{
        return this.PrecioBase * 1.08;
    }

    public agregarAccesorios(...accesorios: Accesorio[]):void{
        accesorios.forEach(element => {
            this.ListaAccesorios + this.ListaAccesorios + ", " + element.nombre;
        });
    }
}

class Camion extends Vehiculo{
    Largo:Longitud;
    cuatroXcuatro:boolean;

    constructor(precioBase:number, motor:Motor, marca:string, modelo:string, listaAccesorios:string, largo:Longitud, cuatroXcuatro:boolean){
        super(precioBase, motor, marca, modelo, listaAccesorios);
        this.Largo = largo;
        this.cuatroXcuatro = cuatroXcuatro;
    }
}

window.onload = function () {
	//1)Instanciar un camion
	//2)Agregarle al menos 2 accesorios.
	//3)encender el camión mostrando que se encendió por pantalla.
	//4)Mostrar los accesorios por pantalla.
    //5)Mostrar el valor total del camión por pantalla.
	//6)Apagar el motor mostrando que se apagó por pantalla.

    let motor = new Motor(300, "V8");
    let camion = new Camion(230000, motor, "Scania", "R14", "DH, AA", Longitud.largo, true);

    let acc1 = new Accesorio();
    acc1.id = 1;
    acc1.nombre = "Levanta vidrios electrico";
    let acc2 = new Accesorio();
    acc2.id = 2;
    acc2.nombre = "AirBag";
    
    let accesorios:Accesorio[] = [acc1, acc2];

    camion.agregarAccesorios(...accesorios);

    let callbackEncender = (estado:boolean, tipo:string) => {
        alert("El motor esta encendido");
    }
    let callbackApagar = (estado:boolean, tipo:string) => {
        alert("El motor esta apagado");
    }
    camion.Motor.encender(callbackEncender);
    alert(camion.ListaAccesorios);
    alert(camion.precioTotal());
    camion.Motor.apagar(callbackApagar);
};
