// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Interactive Selection
// http://www.genarts.com/karl/papers/siggraph91.html

let population;
let info;
let mutationRateSlider;
let cloneChanceSlider;
let cloneChanceDiv;
let mutationRateDiv;

function setup() {
  let head = createDiv('Color Combination Generator');
  let help = createDiv('Mouse over or click color combos that look best. The combos with the higher numbers should be the ones you prefer the most. Continue to mouse and click until that is true, then hit Next Generation');
  createP('');
  head.style('font-weight', '800');
  head.style('font-size', '24pt');
  createCanvas(RWIDTH * 7, 350);
  colorMode(RGB, 1.0, 1.0, 1.0, 1.0);
  let popmax = 14;
  let mutationRate = 0.1; // A pretty high mutation rate here, our population is rather small we need to enforce variety
  // Create a population with a target phrase, mutation rate, and population max
  population = new Population(mutationRate, popmax);
  // A simple button class

  button = createButton("evolve new generation");
  button.mousePressed(nextGen);
  // button.position(10, 140);

  createDiv("Mutation Rate")
  mutationRateDiv = createDiv("0.05")
  mutationRateSlider = createSlider(0, 0.5, 0.05, 0.005);
  mutationRateSlider.input(() => population.mutationRate = mutationRateSlider.value());

  createDiv("Clone Chance")
  cloneChanceDiv = createDiv("0.1")
  cloneChanceSlider = createSlider(0, 1, 0.1, 0.01);
  cloneChanceSlider.input(() => population.setCloneChance(cloneChanceSlider.value()));
  info = createDiv('');
}

function draw() {
  background(1);
  // display values
  cloneChanceDiv.html(cloneChanceSlider.value());
  mutationRateDiv.html(mutationRateSlider.value());

  // Display the faces
  population.display();
  population.rollover(mouseX, mouseY);
  info.html("Generation #:" + population.getGenerations());
}

function mousePressed() {
  population.mouseDown(mouseX, mouseY);
}

// If the button is clicked, evolve next generation
function nextGen() {
  population.selection();
  population.reproduction();
}