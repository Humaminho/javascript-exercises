const fibonacci = function(numAt) {
    if (numAt < 0 ) {
        return "OOPS";
    } else {
        let array=[];
    for (let i = 1; i<=numAt ; i++) {
        if (isNaN(array[i-3]) && isNaN(array[i-2])) {
            array.push(i);
        } else if (isNaN(array[i-3])) {
            array.push(array[i-2]);
        } else array.push(array[i-2]+array[i-3])
    };
    return array[numAt-1];
    };
};


// Do not edit below this line
module.exports = fibonacci;
