var string = "I'm a \"fun\" string";
var a = "string";
console.log(string);
console.log(string.toUpperCase());
console.log(string.indexOf("string"));
var b = string.indexOf(a);
console.log(string.indexOf(a));
if (string.indexOf(a) === -1) {
    console.log("word " + a + " is not in the string")
}
else {
    console.log("the word " + a + " starts at position " + b);
}