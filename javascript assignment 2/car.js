class Automobile {
    constructor(name, model, color, type){
        this.name = name;
        this.model=model;
        this.color=color;
        this.type=type;
    }
    drive() {
        return this.name + ' ' + this.model + ' is ready for drive..'
    }

    openDoor() {
        return 'Door is opened'
    }
}

const vehicle = new Automobile ("Carspeedo","2019" , "Blue", "auto")

class Car extends Automobile{
    constructor(name, model, color, type, door, maxSpeed){
        super(name, model, color, type)
        this.door = door;
        this.maxSpeed = maxSpeed;
        this.drive();
        this.openDoor();
    }
}

const Car1 = new Car("Ferari","2022" , "Blue", "manual","4 door" , "220 km/h")

class Truck extends Automobile{
    constructor(name, model, color, type, tyres, fuel){
        super(name, model, color, type)
        this.tyres= tyres;
        this.fuel = fuel;
        this.drive();
        this.openDoor();
    }
}

const Truck1 = new Truck("Bandito","2007" , "Orange", "manual","12 tyres" , "Diesel")

class Bus extends Automobile{
    constructor(name, model, color, type,busClass,fuel){
        super(name, model, color, type)
        this.busClass= busClass;
        this.fuel = fuel;
        this.drive();
        this.openDoor();
    }
}

const Bus1 = new Bus("daewoo","2022" , "Black", "manual","Business" , "Diesel")


console.log(vehicle)
console.log(vehicle.drive())
console.log(vehicle.openDoor())
console.log(Car1)
console.log(Car1.drive())
console.log(Truck1)
console.log(Truck1.openDoor())
console.log(Bus1)
