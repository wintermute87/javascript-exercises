const repeatString = function(inputString,nrTimes) {
    
    if(nrTimes < 0)
        return "ERROR";

    let resultString = "";


    for(let i=0; i < nrTimes; i++ )
    {
        resultString = resultString.concat(inputString);
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
