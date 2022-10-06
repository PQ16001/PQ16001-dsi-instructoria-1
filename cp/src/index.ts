import * as fs from 'fs';
import { argv } from 'process';
 
let archivo1: string = process.argv[2];
let data1=fs.readFileSync(archivo1, 'utf8');
let archivo2: string = process.argv[3];
      
 
//dados dos parametros se copia el contenido del primer archivo al segundo y lo muestra
if (fs.existsSync(archivo2)) {
    let data2 = fs.readFileSync(archivo2, 'utf8');
    fs.writeFileSync(archivo2, data2 +" "+ data1);

    let copiado = fs.readFileSync(archivo2, 'utf8')
    console.log(copiado);
}else{
    //si no se le pasa un segundo parámetro se crea una copia del primero con el mismo nombre del archivo + -Copy
    if(fs.existsSync(archivo2)==false){
        let nombreCopia=archivo1.slice(0,-4)
        nombreCopia=nombreCopia+"-Copy"+".txt"
        let nuevoArchivo=fs.writeFileSync(nombreCopia,data1);
        
        let data3=fs.readFileSync(nombreCopia,'utf8')
        console.log(data3);
    }
}
//ejecutar el comando npm start nombreArchivo1 nombreArchivo2
//como ejemplo usando el archivo proporcionado en la carpeta de este proyecto --> npm start archivo1.txt archivo2.txt
