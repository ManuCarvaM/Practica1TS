import { Persona } from './persona'
import { telefono } from './telefono'
import { mail } from './mail'
import { direccion } from './direccion'

    let persona1 = new Persona("Vlad",
    "García",
    28,
    "12345678H",
    new Date("01/01/1990"),
    "Verde",
    "Macho",
    new direccion("nuevita", 2, 2, "B", 64087, "manchita", "badajoz"),
    new mail("Electrónico", "correito@hotmail.com"),
    new telefono("Movil", 123456789),
    "Alergico al melocoton");

    console.log(persona1);

    let persona2 = new Persona ("Lulu",
    "Suárez",
    18,
    "24681357A",
    new Date("02/02/2002"),
    "Lila",
    "Hembra",
    new direccion("Poeta Bodría", 2, 1, "C", 46010, "Valencia", "Valencia"),
    new mail("Electrónico", "lulilu@hotmail.com"),
    new telefono("Fijo", 901555555),
    "Compañera de clases");

    console.log(persona2);

    let persona3 = new Persona("Ana",
    "Ruiz",
    40,
    "98765432K",
    new Date("03/03/1970"),
    "Verde",
    "Hembra",
    new direccion("viejita", 1, 1, "A", 64087, "manchita", "badajoz"),
    new mail("Electrónico","aru03@hotmail.com"),
    new telefono("Móvil", 124578326),
    "Madre de lulu");

    console.log(persona3);


    let arrayPersona:Persona[] = [persona1, persona2, persona3];
    let dniAModificar = "12345678H"
    for(let i = 0; i < arrayPersona.length; i++){

        if(arrayPersona[i].dni == dniAModificar){
            arrayPersona[i].direcciones = new direccion("viejita", 8, 7, "a", 64087, "manchita", "badajoz");
            arrayPersona[i].mail = new mail("electrónico","vladisito@yahoo.es");
            arrayPersona[i].telefonos = new telefono("movil", 112233445);
        }   
        console.log(arrayPersona[i]);
    };
