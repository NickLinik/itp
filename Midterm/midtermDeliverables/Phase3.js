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
