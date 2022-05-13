const data = require("../server/data");

const isPrime = function (input) {
    // your code here:  this function accepts a positive integer 'input' and should return true if the integer is prime and false if it is not (for simplicity, do not consider 0 or 1 as prime)

    if (input === 0) {
        return false;
    }

    if (input === 1) {
        return false;
    }

    if (input < 0) {
        return false
    }

    const range = [...Array(Math.floor(Math.sqrt(input)) + 1).keys()].splice(2);

    let indicator = 0;
    range.every(num => {
        if (input % num === 0) {
            indicator = 1
            return false;
        }
        return true
    })

    if (indicator === 1) {
        return false
    }

    return true;
};

const nameVowels = function () {
    // your code here:  using 'data', this function should return the number of animals who's name contains more than 3 vowels (for simplicity, do not consider "y" a vowel)
    const vowels = /[aeiou]/gi
    return data.filter(animal => {
        const matchResult = animal.name.match(vowels)
        return matchResult.length > 3
    }).length;
};

const addProperty = function () {
    // your code here:  using 'data', this function should return (without changing the order) a list of animals with a property named 'gender' added to each animal. the value of this new property should be 'F' if the id is prime (highest priority), 'M' if the id is odd, and 'N/A' if the id is even (lowest priority)
    return data.map(animal => {
        let gender = 'N/A';
        if (isPrime(animal.id)) {
            gender = 'F'
        } else if (animal.id % 2 == 1) {
            gender = 'M'
        }
        return {...animal, gender};
    })
};

const palindromes = function (input) {
    // your code here:  this function accepts one string 'input' and should return true if the string is a palindrome and false if it is not
    const reversed = [...input].reverse().join("");
    if (reversed.toLowerCase() === input.toLowerCase() ) {
        return true;
    }
    return false;
};

const anagrams = function (input1, input2) {
    // your code here:  this function accepts two strings 'input1', 'input2' and should return true if the strings are anagrams and false if they are not
    temp1 = [...input1].sort();
    temp2 = [...input2].sort();
    
    if (temp1 === temp2) {
        return true;
    } else {
        return false;
    }
};

const ageSum = function () {
    // your code here:  using 'data', this function should return the sum of all animals ages
    let initialValue = 0
    return data.reduce( (previousValue, currentValue) => {
        return previousValue + currentValue.age
    }, initialValue);
};


module.exports = {
    isPrime,
    nameVowels,
    addProperty,
    palindromes,
    anagrams,
    ageSum,
};
