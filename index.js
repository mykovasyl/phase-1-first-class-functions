
function receivesAFunction(aFunction) {
    return aFunction();
}

const namedFunction = function() {return "Oh boy here we go!"};

function returnsANamedFunction() {
     return namedFunction;
}
console.log(returnsANamedFunction());

function returnsAnAnonymousFunction() {
    return function() {
        return "Take this, First Class Functions!";
    }
}