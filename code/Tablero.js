let columnas = 10, filas = 16, bloque = 20, lienzo = document.getElementById('lienzo'),
    pantalla = lienzo.getContext('2d');


pantalla.canvas.height = filas*bloque
pantalla.canvas.width = columnas*bloque
pantalla.scale(bloque,bloque);

class Tablero {
    vaciar(){
        this.matriz = this.ceros();
    }
    ceros(){
        let arr = [];
        for (let i=0;i<filas;i++){
            let arr1 = [];
            for(let j=0;j<columnas;j++){
                arr1.push(0);
            }
            arr.push(arr1)
        }
        return arr;
    }
}

