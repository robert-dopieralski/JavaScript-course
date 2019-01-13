var myCar = {

    maxSpeed: 40,
    driver: "Hammurabi",
    drive: function (speed, time) {
        console.log(speed * time);
    },
    logDriver: function () {
        console.log("Driver name is " + this.driver)
    },
    test: function () {
        console.log(this);
    }
};

var Car = function(maxSpeed, driver){
this.maxSpeed = maxSpeed;
this.driver = driver;
this.drive = function (speed, time) {
    console.log(speed * time);
};
this.logDriver = function () {
    console.log("Driver name is " + this.driver)
};
};
var myCar2 = new  Car(50,"ninja_2");
var myCar3 = new  Car(60,"ninja_3");
var myCar4= new  Car(70,"ninja_4");
var myCar5 = new  Car(80,"ninja_5");

myCar.drive(30,5);
myCar3.logDriver();