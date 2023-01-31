let tablero = new Tablero();
function jugar(){
    tablero.vaciar();
    let pieza = new Pieza(pantalla);
    pieza.pintar();

    tablero.pieza = pieza;
}


