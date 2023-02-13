const sumAll = function(firstNumber, secondNumber) {

    if(typeof(firstNumber) != "number" || typeof(secondNumber) != "number")
        return "ERROR";

    if(firstNumber<0 || secondNumber<0)
        return "ERROR";


    let sum = 0;
    let largestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
    let smallestNumber = firstNumber < secondNumber ? firstNumber : secondNumber;

    for(let i=smallestNumber; i<=largestNumber; i++)
        sum = sum + i;

    return sum;


};

// Do not edit below this line
module.exports = sumAll;
