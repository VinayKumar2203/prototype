function vehicle(brand,model,speed,fuelTylpe){
 this.brand=brand;
 this.model =model;
 this.speed =speed;
 this.fuelTylpe=fuelTylpe;
}

vehicle.prototype.accelerate =function(){
    this.speed+=20;
}

vehicle.prototype.break=function(){
    this.speed-=10;
}


vehicle.prototype.refuel=function(){
    console.log(`the vehivle is refueling.`)
}

// now create a car constractor function;

 function Car(brand,model,speed,fuelTylpe,numberOfWheels){
    vehicle.call(this, brand,model,speed,fuelTylpe);
    this.numberOfWheels=numberOfWheels;
}

Car.prototype = Object.create(vehicle.prototype);


//create an airplane constructor function; 
function airplane(brand,model,speed,fuelTylpe,numberOfEngines,LandingGear){
   vehicle.call(this,brand,model,speed,fuelTylpe);
   this.numberOfEngines=numberOfEngines;
   this.LandingGear=LandingGear;
}
airplane.prototype=Object.create(vehicle.prototype);

//create a new instance of Car and Airplane, and demonstrate invoking their methods


let car1 = new Car("tata", 2002, 100,"petrol",4);

console.log(car1)
car1.accelerate()

car1.break()

let airplane1=new airplane("airIndia",2000,500,"petrol",4,6);
console.log(airplane1);
airplane1.accelerate()
