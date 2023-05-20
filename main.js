"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var telefono_1 = require("./telefono");
var mail_1 = require("./mail");
var direccion_1 = require("./direccion");
var persona1 = new persona_1.Persona("Vlad", "García", 28, "12345678H", new Date("01/01/1990"), "Verde", "Macho", new direccion_1.direccion("nuevita", 2, 2, "B", 64087, "manchita", "badajoz"), new mail_1.mail("Electrónico", "correito@hotmail.com"), new telefono_1.telefono("Movil", 123456789), "Alergico al melocoton");
console.log(persona1);
var persona2 = new persona_1.Persona("Lulu", "Suárez", 18, "24681357A", new Date("02/02/2002"), "Lila", "Hembra", new direccion_1.direccion("Poeta Bodría", 2, 1, "C", 46010, "Valencia", "Valencia"), new mail_1.mail("Electrónico", "lulilu@hotmail.com"), new telefono_1.telefono("Fijo", 901555555), "Compañera de clases");
console.log(persona2);
var persona3 = new persona_1.Persona("Ana", "Ruiz", 40, "98765432K", new Date("03/03/1970"), "Verde", "Hembra", new direccion_1.direccion("viejita", 1, 1, "A", 64087, "manchita", "badajoz"), new mail_1.mail("Electrónico", "aru03@hotmail.com"), new telefono_1.telefono("Móvil", 124578326), "Madre de lulu");
console.log(persona3);
var arrayPersona = [persona1, persona2, persona3];
var dniAModificar = "12345678H";
for (var i = 0; i < arrayPersona.length; i++) {
    if (arrayPersona[i].dni == dniAModificar) {
        arrayPersona[i].direcciones = new direccion_1.direccion("viejita", 8, 7, "a", 64087, "manchita", "badajoz");
        arrayPersona[i].mail = new mail_1.mail("electrónico", "vladisito@yahoo.es");
        arrayPersona[i].telefonos = new telefono_1.telefono("movil", 112233445);
    }
    console.log(arrayPersona[i]);
}
;
