const data = require("../server/data");

/**
 * Test the input number for primeness. Must be positive, and not 0 or 1.
 * @param {number} input an integer to test if it is prime
 * @returns True if the number is prime, false if otherwise.
 */
const isPrime = function (input) {
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

/**
 * Add the Gender property to the list of animals. 'F' if the ID is a prime
 * number, 'M' if it is odd, and 'N/A' otherwise.
 * @returns the list of animal data with the gender parameter included
 */
const addProperty = function () {
    return data.map(animal => {
        let gender = 'N/A';
        if (isPrime(animal.id)) {
            gender = 'F'
        } else if (animal.id % 2 == 1) {
            gender = 'M'
        }
        return { ...animal, gender };
    })
};

/**
 * Tests whether the input string is a palindrome
 * @param {string} input The string to test palindromeness
 * @returns True if the input string is a palindrome, false otherwise
 */
const palindromes = function (input) {
    const reversed = [...input].reverse().join("");
    if (reversed.toLowerCase() === input.toLowerCase()) {
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
    return data.reduce((previousValue, currentValue) => {
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
