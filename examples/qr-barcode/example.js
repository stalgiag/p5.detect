let img, boundingBoxes;

function preload() {
  img = loadImage('../assets/barcode.png');
}

function setup() {
  createCanvas(img.width, img.height);
  boundingBoxes = detectCodes(img);
  noFill();
  stroke(200, 0, 200);
}

function draw() {
  image(img, 0, 0);
  //CURRENTLY A STUB, WILL UPDATE ONCE SUPPORT STABILIZES
  // for(let box of boundingBoxes) {
  //   rect(box.x, box.y, box.w, box.h);
  // }
}
