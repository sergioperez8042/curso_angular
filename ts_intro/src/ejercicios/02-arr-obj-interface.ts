/*
    ===== Código de TypeScript =====
*/
let habilidades:string[] = ['bash', 'Counter', 'healing'];

//onjetos
interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;//? significa que es opcional 
}
const personaje: Personaje= {
    nombre: 'Sergio',
    hp: 100,
    habilidades: ['bash', 'Counter', 'healing']
}

personaje.puebloNatal = 'Pueblo Paleta';
console.table(personaje);