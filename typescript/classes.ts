class Vehicle {
    constructor(protected color: string) {
        
    }
    protected honk(): void {
        console.log('beep');
    }
};

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }

    private drive(): void {
        console.log('vroom');
    }

    startDriving(): void {
        this.drive()
    }
};

const car = new Car(4, 'red');
car.startDriving();



