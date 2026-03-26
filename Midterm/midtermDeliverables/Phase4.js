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
    s = cellH / blinkyHeight;
    let blinkySWidth = blinkyWidth * s;
    for (let r = 0; r < Grid; r++) {
        for (let c = 0; c < Grid; c++) {
            Blinky(c * cellW + (cellW - blinkySWidth) / 2,r * cellH, s);
        }
    }
};

