function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  
  fill(255, 255, 0);
  stroke(0);

  beginShape();

  vertex(0.5 * width, 0.1 * height);      // Top point
  vertex(0.61 * width, 0.35 * height);    // Upper-right
  vertex(0.9 * width, 0.35 * height);     // Bottom-right
  vertex(0.68 * width, 0.55 * height);    // Bottom-inner-right
  vertex(0.78 * width, 0.9 * height);     // Bottom-most point
  vertex(0.5 * width, 0.7 * height);      // Bottom-center
  vertex(0.22 * width, 0.9 * height);     // Bottom-most-left
  vertex(0.32 * width, 0.55 * height);    // Bottom-inner-left
  vertex(0.1 * width, 0.35 * height);     // Bottom-left
  vertex(0.39 * width, 0.35 * height);    // Upper-left

  endShape(CLOSE);
}

