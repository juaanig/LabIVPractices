import { Distributor } from "../interfaces/IDistributor";

export class DeliveryMan implements Distributor{

    private _capacity:Number;
    private _name:string;

    constructor(){
        this._capacity = 120;
        this._name = "El masi";
    }

    createDistributor(): void {
        console.log("Soy un repartidor humano");
    }


}