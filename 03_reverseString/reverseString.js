const reverseString = function(string) {
    let newString = "" ;
    for ( x = string.length - 1 ; x > -1  ; --x ) {
        newString += string.slice(x, x+1) ;
    }
    return newString ;
};

// Do not edit below this line
module.exports = reverseString;