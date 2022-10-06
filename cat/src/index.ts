import fs from 'fs';
class Leer{
    nombreArchivo:string;
    constructor(archivo:string){
        this.nombreArchivo=archivo;
    }

   leer(){
        fs.readFile(this.nombreArchivo, 'utf8', (err, data)=> {
        console.log(data);
        });
          }
   
}
//Se pide el nombre del archivo a leer, 
//ejecutar --> npm start doc.txt --para probar con un archivo de ejemplo que está en la carpeta del proyecto
let nombre:string=process.argv[2];
let leyendoArchivo=new Leer(nombre);
leyendoArchivo.leer()
