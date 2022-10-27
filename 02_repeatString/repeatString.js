const repeatString = function(string, num) {
    let blabla = "" ;
    let i = 1 ;
    while ( i <= num ) {
        if ( num < 0 ) {
            blabla = "ERROR"
        } else
        blabla += string ;
        i++ ;
    }
    return blabla ;
};

// Do not edit below this line
module.exports = repeatString;