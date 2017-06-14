enum Largo{
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
    public id:number;
    public nombre:string;

    constructor(id:number, nombre:string){
        this.id = id;
        this.nombre = nombre;
    }
}

class Vehiculo{
    private _precioBase: number;
    private _motor: Motor;
    marca: string;
    modelo: string;
    private _listaAccesorios: string;

    constructor(precioBase:number, motor: Motor, marca: string, modelo: string, listaAccesorios: string){
        this._precioBase = precioBase;
        this._motor = motor;
        this.marca = marca;
        this.modelo = modelo;
        this._listaAccesorios = listaAccesorios;
    }

    get precioBase():number{
        return this._precioBase;
    }

    set precioBase(precio:number){
        this._precioBase = precio;
    }

    get motor():Motor{
        return this._motor;
    }

    set motor(motor:Motor){
        this._motor = motor;
    }

    get listaAccesorios():string{
        return this._listaAccesorios;
    }

    set listaAccesorios(lista:string){
        this._listaAccesorios = lista;
    }

    public obtenerPrecioTotal():number{
        return this._precioBase * 1.08;
    }

    public agregarAccesorios(...accesorios: Accesorio[]){
        accesorios.forEach(element => {
            this._listaAccesorios = this.listaAccesorios + "," + element.nombre; 
        });
    }
}

class Camion extends Vehiculo{
    largo:Largo;
    cuatroXcuatro: boolean;

    constructor(precioBase:number, motor: Motor, marca: string, modelo: string, listaAccesorios: string, largo:Largo, cuatroXcuatro: boolean){
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
    let callbackEncender = (estado:boolean, tipo:string) => {
        alert("El motor esta encendido");
    }
    let callbackApagar = (estado:boolean, tipo:string) => {
        alert("El motor esta apagado");
    }
    camion.motor.encender(callbackEncender);
    alert(camion.listaAccesorios);
    alert(camion.obtenerPrecioTotal());
    camion.motor.apagar(callbackApagar);
}