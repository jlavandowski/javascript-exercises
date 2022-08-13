const repeatString = function(string, num) {
    let userString = string.toString();
    if (num === 0) {
        userString = '';
    } else if (num < 0) {
        userString = 'ERROR';
    } else {
        for (i=1; i<num; i++) {
            userString = userString.concat(string)
        }
    }
    return userString;
}
const number = Math.floor(Math.random() * 10)

repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;