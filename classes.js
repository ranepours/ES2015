//PART ONE
class Vehicle {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        console.log("*beep*");
    }
    toString(){
        console.log(`This car is a ${this.year} ${this.make} ${this.model}.`)
    }
}

//PART TWO
class Car extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

//PART THREE
class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        super (make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        console.log("*vroom*");
    }
}

//PART FOUR
class Garage {
    constructor (capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add (anotherRide) {
        if (!(anotherRide instanceof Vehicle)){
            return `only vehicles allowed`;
        } if (this.vehicles.length >=  this.capacity){
            return `capacity reached at ${this.capacity} vehicles.`;
        }
        this.vehicles.push(anotherRide);
        return `Vehicle added.`;
    }
}