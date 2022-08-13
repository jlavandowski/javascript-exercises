const leapYears = function(year) {
    let leapYear = +year;
    if ((leapYear % 4 === 0) && (leapYear % 100 === 0) && (leapYear % 400 === 0)) {
        return true;
    } else if (leapYear % 100 === 0) {
        return false;
    } else if (leapYear % 4 === 0) {
        return true;
    } else {
        return false;
    }
};

leapYears(700);

// Do not edit below this line
module.exports = leapYears;
