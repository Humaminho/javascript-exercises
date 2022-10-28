const sumAll = function(start, end) {
    let sum = 0
    if ( typeof start !== "number" || typeof end !== "number" || start <= 0 || end <= 0 ) {
        return "ERROR"
    } else {
        if ( start < end ) {
            for ( x = start; x <= end ; x++ ) {
                sum += x ;
            }
        } else {
            for ( x = end; x <= start ; x++ ) {
                sum += x ;
        }
        }
    return sum ;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
