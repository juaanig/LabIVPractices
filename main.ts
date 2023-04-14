import { creatorDistributorFactory } from "./entities/creatorDistributorFactory";

function main() {


    let factory = new creatorDistributorFactory ;

    let dron1 = factory.createDistributor("Dron");
    dron1?.createDistributor();

    let human1 = factory.createDistributor("Human");
    human1?.createDistributor();
    
    let car1 = factory.createDistributor("Car");
    car1?.createDistributor();

}

main()