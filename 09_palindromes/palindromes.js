const palindromes = function (string) {
    let leftToRight = [];
    let rightToLeft = [];
    for (x=0; x<string.length;x++) {
        if (string[x]!== " " && string[x]!== "," && string[x]!== "." && string[x]!== "!") {
            leftToRight.push(string.slice(x,x+1).toLowerCase());
        } else continue;
    };
    for (x=0; x<string.length;x++) {
        if (string[x]!== " " && string[x]!== "," && string[x]!== "." && string[x]!== "!") {
            rightToLeft.unshift(string.slice(x,x+1).toLowerCase());
        } else continue;
    };
    return leftToRight.join() === rightToLeft.join()
};

// Do not edit below this line
module.exports = palindromes;


// PALINDROMES, GET THE TITLES AND FIND THE OLDEST!