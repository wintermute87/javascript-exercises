const findTheOldest = function(people) {

    const oldest = people.reduce((oldestPerson, person) => {
    const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
    const personAge = getAge(person.yearOfBirth, person.yearOfDeath);
    return oldestAge < personAge ? person : oldestPerson;

    });
  
    return oldest;
  };


  const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
  
    return death - birth;
  };
  


const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  console.log(findTheOldest(people))





// Do not edit below this line
module.exports = findTheOldest;
