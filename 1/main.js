function getAverage (a,b)
{
    var average = (a+b)/2;  //local variable
    console.log(average);
    return average; // local variable
}

var myResult=getAverage (7,8); //global variable


function logResult()
{
    console.log("the average is " + myResult);
}

logResult();