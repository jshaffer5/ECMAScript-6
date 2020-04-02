// The following examples show how using let can help prevent confusion caused by accidentally changing the value of a global variable

function checkScope() {
  'use strict';
  var i = 'function scope';
  if (true) {
    var i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
// console output:
//
// Block scope i is:  block scope
// Function scope i is:  block scope

function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
// console output
//
// Block scope i is:  block scope
// Function scope i is:  function scope
