/*
// Phase 2

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
*/
/*
// Phase 3
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

*/


// Phase 4
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
