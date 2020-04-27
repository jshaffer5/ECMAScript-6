// "use strict" is a literal expression that enables strict mode. 
// This directive helps developers write better code and get more meaningful error messages
// With strict mode, you can not, for example, use undeclared variables...this helps debug typos

"use strict";
let my_variable = 3.14; 
my_varible = 3.1415; // this throws an error because my_varible is not declared

// Compiling a numeric literal (4 + 5;) or a string literal ("John Doe";) in a JavaScript program has no side effects. 
// It simply compiles to a non existing variable and dies.
// So "use strict"; only matters to new compilers that "understand" the meaning of it.

// The this keyword in functions behaves differently in strict mode.
// If the object is not specified, functions in strict mode will return undefined and functions in normal mode will 
// return the global object (window):

"use strict";
function myFunction() {
  alert(this); // will alert "undefined"
}
myFunction();
