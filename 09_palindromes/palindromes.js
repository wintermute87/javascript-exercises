const palindromes = function (text) {

    const arr = Array.from(text);

    const specialChar = " ~!@#$%^&*_-+=`|(){}[]:;\"'<>,.?/";

    arrayFilter = [];
    arrayFilter = arr.filter( element => {
        return !specialChar.includes(element);

    })

    let arrLength = arrayFilter.length-1;
    const reverseText = []

    for (let i = arrLength;  i >-1 ; i--)
    {

        reverseText.push(arrayFilter[i]);
    }

    firstString = arrayFilter.toString().toLowerCase();
    reverseString = reverseText.toString().toLowerCase();

    if(firstString === reverseString)
        return true;
    else
        return false;


};



// Do not edit below this line
module.exports = palindromes;
