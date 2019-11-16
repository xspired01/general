// == Abstract Equality
// Type comparison first between two elements, then perform Strict Equality Check

// === Strict Equality
// No type comparison. However, some gotcha's. 
// Not a Number (NaN), NaN === NaN true
// Also, 0 === -0 true

// Object.is(element1, element2)
// Determines if two elements are same value. 
// NaN and NaN >> true
// -0 and -0 >> true
// 


// check for number type in JavaScript
// using Object.is to check for Not a Number (NaN) because NaN === NaN is false 
// Also, typeof(NaN) returns a "number". Basically, design decision
// made early on in JavaScripts development that put NaN under the Number type instead of
// another type like undefined or null. 

function isNumber(num){
    if (!Object.is(num, NaN)){
        return typeof(num) == "number"
    } else {
        return false 
    }
}

// corollary to isNumber is isNaN. Check if an element is NaN, since typeof(NaN) returns "number"
function isNaN(element){
    return Object.is(element, NaN)
}

