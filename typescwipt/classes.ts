class Vehicle {
    public honk(): void {
        console.log('beep');
    }
};

class Car extends Vehicle {
    private drive(): void {
        console.log('vroom');
    }

    startDriving(): void {
        this.drive()
    }
};


const vehicle = new Vehicle();

vehicle.honk();
const car = new Car();
car.startDriving();
car.honk();


