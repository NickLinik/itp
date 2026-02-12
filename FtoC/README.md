# F to C Converter
## What I Did
I created a Farenheight to celcius converter, using javaScript, and basic math.

## How I Did It
#### First I wrote this code :
 ```
 let convert = function(F) {
    let C = (F - 32) * (5/9);
    return C;
};
let F = prompt("Please enter the temperature in F:");
let C = convert(F);
console.log(`The Temperature is ${C} degrees C.`);
alert("The Temperature is " + C + " degrees C.");
```
This uses the function ``` convert() ``` to do the math using `F` as a parameter and returns the resulting value. It then declares `F` and assigns it a user inputed value using `prompt()`. Next it calls the function and assigns the resulting value to `C` and finaly it ouputs the value both as an alert popup and in the console. <br>

Then you said that theres a more efficient way to do this without the function, and I realized why this is a somewhat inefficient way to do this . The solution I used would make sense if this were a part of a larger program, where I might use this math again, however this is the programs only function. Making it a less efficient and more redundant solution. <br>

So I stripped that code down into this: 
```
let F = prompt("Please enter the temperature in F:");
let C = ((F - 32) * (5/9));
console.log(`The Temperature is ${C} degrees C.`);
alert("The Temperature is " + C + " degrees C.");
```
Which does the same thing faster with half the lines of code by just doing the math when declaring `C`.<br>

This works but sometimes spits out way too many decimal places which we don't care about, so I added ` toFixed(1) `to the math when declaring `C`so it only saves it to one decimal place. 
This is the resulting final product which acts as intended:
```
let F = prompt("Please enter the temperature in F:");
let C = ((F - 32) * (5/9)).toFixed(1);
console.log(`The Temperature is ${C} degrees C.`);
alert("The Temperature is " + C + " degrees C.");
```

## Problems I Faced
I faced no problems exept for the too many decimal places problem which is solved above. 

## Borrowed Code
I used no external code. 