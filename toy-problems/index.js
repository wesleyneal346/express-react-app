const data = require("../server/data");

/**
 * Test the input number for primeness. Must be positive, and not 0 or 1.
 * @param {number} input an integer to test if it is prime
 * @returns True if the number is prime, false if otherwise.
 */
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

/**
 * Count the number of animals that have names with more than three vowels
 * @returns a total number of animals that have a name with more than three vowels
 */
const nameVowels = function () {
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

/**
 * Tests whether the input string is a palindrome
 * @param {string} input The string to test palindromeness
 * @returns True if the input string is a palindrome, false otherwise
 */
const palindromes = function (input) {
    const reversed = [...input].reverse().join("");
    if (reversed.toLowerCase() === input.toLowerCase() ) {
        return true;
    }
    return false;
};

/**
 * Test whether the input strings are anagrams of one another.
 * @param {string} input1 The first string to test with
 * @param {string} input2 The second string to test with
 * @returns true if the two input strings are palindroms of one another, false otherwise
 */
const anagrams = function (input1, input2) {
    temp1 = [...input1].sort();
    temp2 = [...input2].sort();
    
    if (temp1 === temp2) {
        return true;
    } else {
        return false;
    }
};

/**
 * Calculates the total age of the animals in the list
 * @returns a number indicating the total age of the animals in the list 
 */
const ageSum = function () {
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
