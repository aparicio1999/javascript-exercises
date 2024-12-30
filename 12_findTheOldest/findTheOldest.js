let currentYear = 2024;
const findTheOldest = function(array) {
    let res = 0;
    for (let i=1;i<array.length;i++) {
        if ((array[i].yearOfDeath || currentYear) - array[i].yearOfBirth > 
        (array[res].yearOfDeath || currentYear) - array[res].yearOfBirth) {
            res = i;
        }
    }
    return array[res];
};

// Do not edit below this line
module.exports = findTheOldest;
