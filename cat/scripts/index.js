"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class Leer {
    constructor(archivo) {
        this.nombreArchivo = archivo;
    }
    leer() {
        fs_1.default.readFile(this.nombreArchivo, 'utf8', (err, data) => {
            console.log(data);
        });
    }
}
//Se pide el nombre del archivo a leer, 
//ejecutar --> npm start doc.txt --para probar con un archivo de ejemplo que está en la carpeta del proyecto
let nombre = process.argv[2];
let leyendoArchivo = new Leer(nombre);
leyendoArchivo.leer();
