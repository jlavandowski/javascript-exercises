const reverseString = function(string) {
    let splitString = string.split(''); // splits string with ''
    let backwardString = splitString.reverse(); // reverses string
    let joinString = backwardString.join(''); // joins the string back together 
    return joinString;
};

reverseString(''); 

// actual solution is same but more efficient at return string.split('').reverse().join('')
// same behavior, written better and succinct

// Do not edit below this line
module.exports = reverseString;
