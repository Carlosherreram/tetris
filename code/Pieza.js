class Pieza{
    constructor(lienzo){
        this.lienzo = lienzo;
        this.forma = [
            [1,1,0],
            [0,1,0],
            [0,1,0]
        ];
        this.iniciox = 3;
        this.inicioy = 0;

    }
    pintar(){
    this.lienzo.fillStyle = 'green';
    this.forma.forEach((fila, inicioy) =>{
        fila.forEach((valor, iniciox) => {
            if(valor>0){
                this.lienzo.fillRect(this.iniciox+iniciox,this.inicioy+inicioy,1,1);
            }
        })
    })
    }
    mover(p){
        this.iniciox = p.x;
        this.inicioy = p.y;
    }

}