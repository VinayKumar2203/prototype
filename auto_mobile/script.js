// first i am using the prototype
// function fourWheeler(model,numSeats){
// this.model=model;
// this.type='Four Wheeler';
// this.numSeats=numSeats;
// this.fuletype="petrole"
// } 
// fourWheeler.prototype.start=function(){
//     console.log("car is start now")
// }

// fourWheeler.prototype.stop=function(){
//     console.log("car  is stop now");
// }

// let car= new fourWheeler("xuv",7)
// console.log(car);
// console.log(car.stop);//car is stop here
// console.log(car.start);//car is start here


// now i an using the constractor function

let fourWheeler={
    type:"four wheeler",
    fuelType:"petrol",
    start:function() {
        console.log("engine started");
    },
    stop:function () {
        console.log("engine stopped")
    },
};
let car=Object.create(fourWheeler);
car.model="thar";
car.numSeats="7";

console.log(car.type);
console.log(car.start());
console.log(car.model);