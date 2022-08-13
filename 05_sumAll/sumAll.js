const sumAll = function(int1, int2) {
    let num1;
    let num2;
    let finalSum = 0;
    if (int1 < 0) {
        return 'ERROR';
    } else if ((int2 !== Number(int2)) || (Array.isArray(int2) == 'True')) {
        return 'ERROR';
    } else if (int1 > int2) {
        num1 = int2;
        num2 = int1;
    } else {
        num1 = int1;
        num2 = int2;
    }
    for (i = num1;  i <= num2; i++) { 
        finalSum += i;
}
return finalSum;
}

sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
