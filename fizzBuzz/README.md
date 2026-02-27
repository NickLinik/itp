# fizzBuzz
## What I Did
I created a fizzBuzz program as efficiently as im capable of 
: <br/>
``` 
for (let i=1; i<=100; i++) {
    console.log((i % 3 === 0 ? "fizz" : "") + (i % 5 === 0 ? "buzz" : "") || i);
};
```


## How I Did It
First I started to write something starting with an if statement inside the loop (not fully thought out the problem yet), and then realized that that was pretty stupid, and that it would be way better if the logic could be within the ``` console.log() ``` statement. So I did that instead. The way the logic works, is that the code first asseses fizz and buzz cases using modulo and adds them to the string if appropriate using the compact `?` if statements. If only one is true the appropriate output is added to the string, and the other simply returns an empty string, not affecting the output. If both are true, both fizz and buzz are added together and returned. If neither are true, an empty string is returned. This logic is nested in the left side of an or statement. If the left side returns anything thats not an empty string it is returned, and the other side of the statement does not run. If an empty string is returned on the left side, it evaluates to false in the or statement and instead jumps to the right side of the or statement returning `i`. This is all nested in a `for()` loop that iterates i from 1 to 100 and then stops. All in all pretty simple. 

## Problems I Faced
I faced no problems exept for initially having the `?  : ` statements return `false` in the false case, which allows the logic to work the same, but returns things like fizzfalse and falsebuzz, because js converts it to a string. So i changed it to the empty string solution which is more elegant and functions correctly. 

## Borrowed Code
I used no external code. 