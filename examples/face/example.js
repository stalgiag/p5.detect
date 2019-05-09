let img, boundingBoxes;

function preload() {
  img = loadImage('../assets/people-laughing.jpg');
}

function setup() {
  createCanvas(400, 400);
  boundingBoxes = detectFaces(img);
  noFill();
  stroke(200, 0, 200);
}

function draw() {
  image(img, 0, 0);
  // console.log(boundingBoxes);
  for(let box of boundingBoxes) {
    rect(box.x, box.y, box.w, box.h);
  }
}
