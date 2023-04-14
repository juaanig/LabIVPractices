import { Distributor } from "../interfaces/IDistributor";

export class Car implements Distributor{

    private _capacity:Number;
    private _model:string;

    constructor(){
        this._capacity = 120;
        this._model = "Tesla";
    }

    createDistributor(): void {
        console.log("Soy un repartidor Tesla");
    }


}