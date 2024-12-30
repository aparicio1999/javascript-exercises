const getTheTitles = function(array) {
    let res = [];
    for (let i=0; i<array.length;i++) {
        res.push(array[i].title);
    }
    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
