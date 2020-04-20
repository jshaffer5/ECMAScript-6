// using const for declaring a variable only prevents reassignment of object
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works fine as the object is only being edited, not reassigned
console.log(s); // returns [5, 6, 45]
