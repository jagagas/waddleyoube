let defaultDuck;
let angelDuck;
let clownDuck;
let devilDuck;
let goose;
let sleepyDuck;
let numDucks = 6;
let ducks = [];
let mySound;

function preload(){
  soundFormats('mp3');
  mySound = loadSound('quack');
  defaultDuck = loadImage("defaultduck.png");
  angelDuck = loadImage("angelduck.png");
  clownDuck = loadImage("clownduck.png");
  devilDuck = loadImage("devilduck.png");
  goose = loadImage("goose.png");
  sleepyDuck = loadImage("sleepyduck.png");
  ducks = [defaultDuck, angelDuck, clownDuck, devilDuck, goose, sleepyDuck];

} 
function setup() {
  createCanvas(800, 500);
  background('orange');
  textFont('monospace');
  textStyle('bold');
  textSize(16);
  fill('white');
  text('Instructions: press the space bar to reveal your duck!', 20, 480);

  // Centered title
  let centerX = width / 2;
  let centerY = height / 2;
  textSize(65);
  fill('yellow');
  text('waddle you be?', centerX - textWidth('waddle you be?') / 2, centerY);
}


function keyTyped() {
  background('lightblue'); // Clear the background before drawing a new duck
  let randoImg = random(ducks);
  image(randoImg, 210, 120, 290, 300);
  mySound.play();
}

function keyTyped() {
  background('lightblue'); // Clear the background before drawing a new duck
  let randoImg = random(ducks);
  image(randoImg, 210, 120, 290, 300);
  mySound.play();
}