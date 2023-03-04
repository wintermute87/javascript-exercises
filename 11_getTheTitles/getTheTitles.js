const getTheTitles = function(books) {

    arrResult = [];
   
    

    books.forEach(element => {
        arrResult.push(element['title']);
    });

    return arrResult;

};

// Do not edit below this line
module.exports = getTheTitles;
