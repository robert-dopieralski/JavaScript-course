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
    drive: function(speed, time) { 
        console.log(speed * time); 
    }
};

console.log(myCar.maxSpeed)
myCar2.drive(50,3);