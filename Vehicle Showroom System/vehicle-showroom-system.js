class Vehicle {
    constructor(make, model, year, type, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.type = type;
        this.color = color;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, type, color, numberOfDoors) {
        super(make, model, year, type, color);
        this.numberOfDoors = numberOfDoors;
    }

    describeCar() {
        const description = `The ${this.year} ${this.make} ${this.model} car is a ${this.color} ${this.type} ` +
        `with ${this.numberOfDoors} doors, known for its reliability and sleek design.`;
        
        return description;
    }
}

const car = new Car("Mitsubishi", 'Strada', 2024, 'Pickup', 'Black', 4);

console.log(car.describeCar())
