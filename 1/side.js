var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Robert";
myCar.drive = function () { console.log("now driving"); };
var myVar = "hey";

myCar.drive();

var myCar2 = {

    maxSpeed: 70,
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

var myCar3 = {

    maxSpeed: 60,
    driver: "abdul",
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

myCar2.logDriver();
myCar3.logDriver();
myCar2.test();
myCar3.test();

console.log(myCar2.maxSpeed)
myCar2.drive(50, 3);

