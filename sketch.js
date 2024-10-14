function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  // Variables\
  let centerX = 0.5 * width;
  let centerY = 0.5 * height;

  let topPointY = 0.1 * height;
  let upperY = 0.35 * height;
  let lowerY = 0.55 * height;
  let bottomPointY = 0.9 * height;

  let outerRightX = 0.9 * width;
  let innerRightX = 0.68 * width;
  let upperRightX = 0.61 * width;
  let bottomRightX = 0.78 * width;

  let outerLeftX = 0.1 * width;
  let innerLeftX = 0.32 * width;
  let upperLeftX = 0.39 * width;
  let bottomLeftX = 0.22 * width;

  fill(255, 255, 0);
  stroke(0);

  beginShape();

  vertex(centerX, topPointY);         // Top point
  vertex(upperRightX, upperY);        // Upper-right
  vertex(outerRightX, upperY);        // Bottom-right
  vertex(innerRightX, lowerY);        // Bottom-inner-right
  vertex(bottomRightX, bottomPointY); // Bottom-most point
  vertex(centerX, 0.7 * height);      // Bottom-center
  vertex(bottomLeftX, bottomPointY);  // Bottom-most-left
  vertex(innerLeftX, lowerY);         // Bottom-inner-left
  vertex(outerLeftX, upperY);         // Bottom-left
  vertex(upperLeftX, upperY);         // Upper-left

  endShape(CLOSE);
}

