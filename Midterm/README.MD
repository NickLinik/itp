# Midterm
## What I did:
### Phase 1

I honestly had no ideas for what to do for this project, so I drew the first two things that came to mind, and ended up making the pacman ghost. If i think of something better, or funnier I'll probably change it. This was my initial sketch In figma: 

<img src="Image Assets/Blinky.png" ></img>
### Phase 2

I then went into my P5 session, and recreated the rough sketch with basic shapes, using the pixel dimensions from figma as a guide. Overall I think this version is much improved. 

<img src="Image Assets/Blinky2.png"></img> <br/>
This is the code for this iteration:
```
//Phase 2
function setup() {
    createCanvas(400, 400);
    
}



function draw() {
    noStroke();
    fill(255, 0, 0);
    rect(150, 150, 100, 100);
    ellipse(200, 150, 100, 50);
    ellipse(162.5, 250, 25,25);
    ellipse(237.5, 250, 25,25);
    ellipse(187.5, 250, 25, 25);
    ellipse(212.5, 250, 25, 25);
    fill(256, 250, 256 );
    ellipse(175, 175, 25, 25);
    ellipse(225, 175, 25, 25);
    fill(0, 0, 256)
    ellipse(180, 175, 10, 10);
    ellipse(230, 175, 10, 10);
}
``` 

### Phase 3

Getting phase 3 done was pretty simple, and I pretty much just followed the documentation on the class git hub and ,it mostly worked.
I did however have to scale down my coordinates and zero them so blinky would actually appear where desired, and additionally be sized correctly so I could use integers for the scale factor rather than decimals (This second part wasn't absolutely needed but makes things nicer to use)
``` 
function setup() {
    createCanvas(400, 400);
     noStroke();
}

function Blinky(x, y, s) {
    push();
    translate(x, y);
    scale(s);
    fill(255, 0, 0);
    rect(0, 2.5, 10, 10);
    ellipse(5, 2.5, 10, 5);
    ellipse(1.25, 12.5, 2.5, 2.5);
    ellipse(3.75, 12.5, 2.5, 2.5);
    ellipse(6.25, 12.5, 2.5, 2.5);
    ellipse(8.75, 12.5, 2.5, 2.5);
    fill(255);
    ellipse(2.5, 5, 2.5, 2.5);
    ellipse(7.5, 5, 2.5, 2.5);
    fill(0, 0, 255);
    ellipse(3, 5, 1, 1);
    ellipse(8, 5, 1, 1);
    pop();
}; 

function draw() {
    Blinky(100, 100, 7);
    Blinky(300, 300, 1);
};
```
The code above results in this image: <br/>

<img src="Image Assets/Phase3.jpg" alt="phase 3 photo"> </img>

### Phase 4

Phase 4 had a few more issues but most were easily fixed. None of the blinky code itself really changed in this step, and all I had to do was create a function to call it based on the grid required, and here is the code I came up with. <br>
```
let Grid = 10;



function setup() {
    createCanvas(400, 400);
     noStroke();
}
 
function Blinky(x, y, s) {
    push();
    translate(x, y);
    scale(s);
    fill(255, 0, 0);
    rect(0, 2.5, 10, 10);
    ellipse(5, 2.5, 10, 5);
    ellipse(1.25, 12.5, 2.5, 2.5);
    ellipse(3.75, 12.5, 2.5, 2.5);
    ellipse(6.25, 12.5, 2.5, 2.5);
    ellipse(8.75, 12.5, 2.5, 2.5);
    fill(255);
    ellipse(2.5, 5, 2.5, 2.5);
    ellipse(7.5, 5, 2.5, 2.5);
    fill(0, 0, 255);
    ellipse(3, 5, 1, 1);
    ellipse(8, 5, 1, 1);
    pop();
}; 

let blinkyWidth = 10;
let blinkyHeight = 13.75;
function draw() {
    let cellW = width / Grid;
    let cellH = height / Grid;
    let s = cellH / blinkyHeight;
    let blinkySWidth = blinkyWidth * s;
    for (let r = 0; r < Grid; r++) {
        for (let c = 0; c < Grid; c++) {
            Blinky(c * cellW + (cellW - blinkySWidth) / 2,r * cellH, s);
        }
    }
}; 
```

The first thing I do is define my grid variable, and then after comes the unchanged blinky function. Then I define the total height and width of the drawing, which will be used to help calculate where and what scale the function should be drawn at. I then start the draw function which first calculates the individual grid box sizes, and then calculates the scale factor of blinky, based off the height of the grid boxes. Initially i used a ``` min() ``` operator here to run the calculation on both the height and width, however in this case (with a square canvas, and this only drawing) the height will always be the constraining factor, so I removed the unnecissary complexity. before the main part of the function I also use the scale factor to get blinky's scaled width, which is important for centering the drawing later on. Then we get into the main part of the function, which is the nested loops (the hint in the documentation got me most of the way there on this project). All it does is it basically draws every row left to right, and then works downward, as the outer loop repeats. An oversimplification is basically the inner loop controls the x values, and the outer controls the y values. My initial code also drew the blinkys all left aligned so I added ` + (cellW - blinkySWidth) ` to the x part of calling the function to adjust and center it. Theres probably a better way to do this, but I didn't find it. 

## How I did it
Overall I pretty much followed the documentation on the git hub and kinda tried stuff until it worked out.

## Problems I faced
The problems I faced are outlined in the 'Wheat I did' section. Overall there werent really any large problems, just small oversights which I believe I have corrected.

## Borrowed Code
I didn't really borrow much code, other than following along with the documentation.

