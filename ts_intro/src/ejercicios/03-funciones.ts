/*
    ===== Código de TypeScript =====
*/
//Funciones basicas 


function sumar(a:number, b:number):number {
    
    return a + b;
}

function multiplicar(numero:number, otroNumero?:number, base:number = 2):number {
    return numero * base; 
}

interface PersonajeOR{
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar (personaje:PersonajeOR, curarX:number ):void {
    personaje.pv += curarX;

    
}

const nuevoPersonaje: PersonajeOR = {
    nombre: 'Sergio',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida:', this.pv);
    }
}
curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();






// const resultado = multiplicar(5, 0,10);
// // const sumarFlecha = (a: number, b:number):number => {
// //     return a + b;
// // }


// // const resultado = sumar(10,20); 
//  console.log(resultado);