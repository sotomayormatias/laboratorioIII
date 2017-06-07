let esSuperman:boolean = true;

//Esto genera un tipo de dato (es similar al typeDef de C)
type Heroe = {nombre:string, edad:number, poderes:string[], getNombre:()=>string};

if(esSuperman){
    console.log("es superman");
}

// let superman:string = "Superman";
// let batman:string = "Batman";
// let linternaVerde:string = "linterna verde";

let superman:string = "Superman";
let batman:string = "Batman";
let linternaVerde:string = "linterna verde";

let mensaje:string = `los heroes son: ${superman}, ${batman}, ${linternaVerde}.`;

alert(mensaje);

let flash: { nombre:string, edad:number, poderes:string[], getNombre:()=>string}= {
    nombre: "Barry Allen",
    edad: 24, 
    poderes: ["Corre muy rápido", "Viaja en el tiempo"],
    getNombre(){ 
        return this.nombre;
    } 
};

let spiderman: Heroe;


let mutable : string | number;

mutable = "hola guachin";
mutable = 23;