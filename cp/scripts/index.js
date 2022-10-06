"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
let archivo1 = process.argv[2];
let data1 = fs.readFileSync(archivo1, 'utf8');
let archivo2 = process.argv[3];
//dados dos parametros se copia el contenido del primer archivo al segundo y lo muestra
if (fs.existsSync(archivo2)) {
    let data2 = fs.readFileSync(archivo2, 'utf8');
    fs.writeFileSync(archivo2, data2 + " " + data1);
    let copiado = fs.readFileSync(archivo2, 'utf8');
    console.log(copiado);
}
else {
    //si no se le pasa un segundo parámetro se crea una copia del primero con el mismo nombre del archivo + -Copy
    if (fs.existsSync(archivo2) == false) {
        let nombreCopia = archivo1.slice(0, -4);
        nombreCopia = nombreCopia + "-Copy" + ".txt";
        let nuevoArchivo = fs.writeFileSync(nombreCopia, data1);
        let data3 = fs.readFileSync(nombreCopia, 'utf8');
        console.log(data3);
    }
}
//ejecutar el comando npm start nombreArchivo1 nombreArchivo2
//como ejemplo usando el archivo proporcionado en la carpeta de este proyecto --> npm start archivo1.txt archivo2.txt
