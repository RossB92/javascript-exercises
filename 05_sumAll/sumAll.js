const sumAll = function(beg,end) {
    let runningTotal = 0;
    if (beg <0 || end < 0) {
        return "ERROR";
    }
    else if (typeof(beg) != 'number' || typeof(end) != 'number') {
        return "ERROR";
    }
    else if (end > beg) {
        for (i = 1; i <= end ; i++) {
            runningTotal = i + runningTotal;
        }
    }
    else if (end < beg) {
        for (i =1; i <= beg; i++){
            runningTotal = i + runningTotal;
        }
    }

    return runningTotal;
};

// Do not edit below this line
module.exports = sumAll;
