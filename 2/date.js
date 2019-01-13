var myDate = new Date();
console.log(myDate);
var myPastDate = new Date(1545, 11, 11, 10, 01, 22);
var myFutureDate = new Date(2022, 11, 11, 11, 11, 11);

console.log(myPastDate);
console.log(myFutureDate);

var birthday = new Date(1985, 10, 10, 15, 25);
var birthday2 = new Date(1985, 10, 10, 15, 25);

console.log("birthday info: " + birthday);
//month of birth (0-11)
console.log(birthday.getMonth());

//full year of birth (YYYY)
console.log(birthday.getFullYear());

//date (1-31) of birth
console.log(birthday.getDate());

//day of the week (0-6)
console.log(birthday.getDay());

//hour of birth (0-23)
console.log(birthday.getHours());

//get the number od ms since 1st Jan 1970
console.log(birthday.getTime());

if (birthday.getTime() == birthday2.getTime()) {
    console.log("birthdays are equal");
}
else {
    console.log("birthday are not equal");
}