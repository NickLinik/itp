function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
}


let mmMIDI = 64;
if (mmMIDI === 12) {
  console.log("MIDI is 12.");
} else if (mmMIDI === 13) {
  console.log("MIDI is 13.");
} else if (mmMIDI >= 64) {
  console.log("MIDI is greater than or equal to 64.");
} else {
  console.log("MIDI is less than 64 but not 12 or 13.");
}

let count = 0;
while (count < 3) {
  console.log("Happy");
  count++; // shorthand for a
}

let size = 8;
let board = " ";

for (let y = 0; y < size; y++) { 
  for (let x = 0; x < size; x++) { 
    if ((x + y) % 2 === 0) {
      board += " ";
    } else {
      board += "#"; 
    }
  }
  board += "\n";
}
console.log(board);

function cube(x) {
  return x * x * x;
}

console.log(cube(3));
function displayInstrument(name, instrument) {
  console.log(`The instrument is ${name}, ${instrument}.`);
} 

let foods = ["pizza", "sushi", "tacos"];
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

function lyrics() {
  console.log("I am a lumberjack and I'm okay.");
  console.log("I sleep all night and I work all day.");
}

lyrics();       

function repeatLyrics(times) {
  for (let i = 0; i < times; i++) {
    lyrics();
  }
}

repeatLyrics(3);
