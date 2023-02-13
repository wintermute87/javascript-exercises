const removeFromArray = function(inputArray) {

    //arguments

    for(let i = 1; i<arguments.length; i++)
    {
        let index =inputArray.indexOf(arguments[i]);
        if(index != -1)
            inputArray.splice(index,1);
    }


    
    
    
    return inputArray;

};

// Do not edit below this line
module.exports = removeFromArray;
