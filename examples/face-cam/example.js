let capture;
let boundingBoxes = [];

function setup() {
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.hide();
  background(0);
  
}

function draw() {
  noFill();
  stroke(255,0,0);
  image(capture,0,0);
  for(let box of boundingBoxes) {
    rect(box.x, box.y, box.w, box.h);
  }
  boundingBoxes = detectFaces(capture);
}