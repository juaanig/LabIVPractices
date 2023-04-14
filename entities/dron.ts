import { Distributor } from "../interfaces/IDistributor";

export class Dron implements Distributor{

    private _capacity:Number;
    private _batery:Number;

    constructor(){
        this._capacity = 120;
        this._batery = 100;
    }
    
    //Override de metodo de Irepartidor
    createDistributor(): void {
        console.log("se ha creado un Dron")
    }

}