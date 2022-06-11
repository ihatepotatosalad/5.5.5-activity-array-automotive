//this includes the vehicle class as a module

const VehicleModule = require('./vehicle').Vehicle
class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }
    checkService(mileage) {
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService
        }
    }
    start() {
        if (this.fuel > 0) {
            this.start = true
        } else {
            this.start = false
        }

    }
    loadPassenger(num) {
        if (this.passenger < this.maximumPassengers) {
            if ((num + this.passenger) <= this.maximumPassengers) {
                this.passenger = num
                return this.passenger
            } else { console.log('error') }
        } else { console.log('error') }
    }
}
let newCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)
myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(newCar)
//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
