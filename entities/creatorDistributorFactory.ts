import { Dron } from './dron';
import { DeliveryMan } from './deliveryMan';
import { Car } from './carDistributor';

export class creatorDistributorFactory {

    
    public createDistributor (typeDistributor:string) {
        
        if(typeDistributor === "Dron"){
            return new Dron; 
        }

        if(typeDistributor === "Human"){
            return new DeliveryMan; 
        }

        if(typeDistributor === "Car"){
            return new Car; 
        }
        


    }


}