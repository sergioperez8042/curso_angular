// class Heroe {
//     //  alterEgo: string;
//     //  edad: number;
//     // nombreReal: number;
//     //construccion de la clase
//     constructor(
//         public alterEgo: string,
//         public edad: number,
//         public nombreReal: string
//     ) {}
// }

// const ironman = new Heroe('Ironman', 45, 'Tony');//Instancia de la clase Heroe
// console.log(ironman);  
class PersonaNormal{
    constructor(
    public name: string,
        public direccion: string
    ){}

}

class Heroe extends PersonaNormal{

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super( nombreReal, 'NewYor,USA' );
    }
}

const ironman = new Heroe('Ironman', 45, 'Tony');//Instancia de la clase Heroe
console.log(ironman); 