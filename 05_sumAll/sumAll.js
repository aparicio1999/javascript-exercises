const sumAll = function(from,to) {
    if (typeof from != "number"
        || typeof to != "number"
        || from<0
        || to<0
        || Math.floor(from) != from
        || Math.floor(to) != to
    ) {
        return "ERROR";
    }

    let s=from;
    let f= to; // Start, Finish for the loop
    if (from>to) {
        s=to;
        f=from;
    }

    let sum = s;


    for (let i=s+1;i<=f;i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
