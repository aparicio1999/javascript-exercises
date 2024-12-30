const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^\w\']|_/g, "");
    let length = string.length;
    for (let i=0; i<Math.floor(length/2);i++) {
        if (string[i] !== string[length-1-i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
