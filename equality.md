# JavaScript Equality

## Introduction

Equality in JavaScript can be a controversial subject. Initially I was taught not to use double equals (==) because it was too difficult to understand, too complicated, and just plain weird. So don't bother learning "loose equals" and just use triple equals (===) or "strict equality". 

However, there are "gotcha's" or edge cases with strict equality. While null and undefined will return true if compared with ===, Not a Number (NaN) will return false when compared to itself. The other issue with NaN, is that NaN is a type of number. Using typeof(), NaN returns `"number"`. Sometimes, you need to check if a number is a number or NaN is NaN. 

Other edge cases you might have to compare 0 and -0. Using strict equality `0 === -0` returns true. 

A way to check for the same value is Object.is(element1, element2).

## Check same value Object.is()

Object.is() checks for the same value. Does what you expect for ===.
`Object.is(NaN, NaN)` returns true
`Object.is(0,-0)` returns false

## Rule of Thumb for using double equals ==

Think of double equals as a numerical checker. Double equals performs type conversion on both elements being checked, but the preference is converting the elements to numbers and performing an equality check. If only numbers are being checked for equality, then double equals adequately performs its purpose.

When to use `==`? Per Kyle Simpson, use `==` when it's helpful and use `===` when you need to be sure.

