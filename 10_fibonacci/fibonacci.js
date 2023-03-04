const fibonacci = function(nr) {
    if(nr<0)
        return "OOPS"

    arr = [];

    let endNR = 2; //initialize
    let first = 1;
    let second = 1;

    while(endNR<nr)
    {
        first = first + second;
        second = second + first;
        endNR += 2;
    }   

    if(nr % 2 === 0)
        return second;
    else
        return first;
    

};

// Do not edit below this line
module.exports = fibonacci;
