# Implicit Coercion in JavaScript

## JavaScript is so crazy even a gorilla would say it's bananas

Implicit Coercion is one of the foundational principles of JavaScript, but it isn't something that is talked about or taught in-depth. Or at least, I was not taught this. Occasionally, there would be unexpected results in the output of functions and I would be unable to explain why or how. 

Basically, JavaScript tries to be helpful and reduce the amount of code to be written. You don't explicitly have to convert a string to an integer or vice versa using `parseInt() or toString()`. One way to implicitly convert types is using the  `+` operator. 

# Common patterns using plus (+) operator
## String conversions

The plus (`+`) operator is an overloaded operator, overloaded means it performs more than one operation. In addition to performing addition between two numbers and concatenating, or joining, two strings, the plus operator will ALSO try to convert variables to the same type and add them. One common example is adding a string to a number to make a string. Adding `"5" + 5` will produce `"55"`. Another common pattern is adding an empty string to an element and convert that to a string. `"" + 55`, will also produce `"55"`. 

# Plus operator can also do this
## Number conversion

However, the plus operator (`+`) can also convert strings to numbers. In the MDN documentation, this is called the [unary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment). This is where the plus sign precedes its operand and converts it to a number. 

For example, `5 + + '5'` will produce `10`. The unary operator converts the string `'5'` to the number `5` and adds the two numbers, resulting in `55`. 

However, you can also convert a number into a string with the unary operator. In this operation, `"5" + + 5`, the unary operator will convert the number `5` to a string and add two strings, resulting in `"55"`. Using the unary operator in this way isn't as common, at least not intentionally. Usually, adding another `+` operator is a typographical error and resuls in unexpected errors.

The implicit conversion of another `+` operator can be a double-edged sword. It cuts both ways and can produce unintended results. Especially with typographical errors.

# Double-edged Sword of Conversion using `+`

This was encapsulated in a discussion on social media with string concatenation. The question asked was given the code below (with slight modification) why does JavaScript produce its result?  If you are not familiar with what the `+` operator does, then the output is a confusing and weird. If you understand what the `+` operator does, then the result is funny.

`var crazy = "b" + "a" + + "a" + "a" + "s";`  
`var gorilla = crazy.toLowerCase();`  
`console.log(gorilla);`  

Know the answer? 

The explanation and answer is below.

When looking at the code, there is another `+` operator in front of the second 'a'. The `+` operator will try to convert "a" into a number. However, 'a' can't be a number, so the result is NaN. Because `+` tries to convert types, NaN is converted to the string 'NaN' and concatenates with the other characters `'b'` and the third `'a'`. And with the `toLowerCase()` method, 'NaN' is converted to 'nan'.

The result is `"bananas"`.

Truly, JavaScript is so crazy, even a gorilla would say it's `bananas`. 
