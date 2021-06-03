export class equipo{
    _id?: number;
    nombre: String;
    puntos: number;
    difGol: number;
    golesFavor: number;
    golesContra: number;

    constructor(nombre: String){
        this.nombre=nombre;
        this.puntos=0;
        this.difGol=0;
        this.golesFavor=0;
        this.golesContra=0;
    }

}