/* Old Code
let convert = function(F) {
    let C = (F - 32) * (5/9);
    return C;
};
let F = prompt("Please enter the temperature in F:");
let C = convert(F);
console.log(`The Temperature is ${C} degrees C.`);
alert("The Temperature is " + C + " degrees C.");
*/

let F = prompt("Please enter the temperature in F:");
let C = ((F - 32) * (5/9)).toFixed(1);
console.log(`The Temperature is ${C} degrees C.`);
alert("The Temperature is " + C + " degrees C.");

