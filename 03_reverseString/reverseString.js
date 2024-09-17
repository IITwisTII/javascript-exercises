const reverseString = function(string) {
    arrayOfCharacters = []
    for (let i = 0; i < string.length; i++) {
        arrayOfCharacters.push(string[i]);
    }

    return arrayOfCharacters.reverse().join("")
};

console.log(reverseString("hi cocksucker"))

// Do not edit below this line
module.exports = reverseString;
