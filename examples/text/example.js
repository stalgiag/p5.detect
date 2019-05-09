let img, texts;

function preload() {
  img = loadImage('../assets/arendt.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
  texts = detectText(img);
  noFill();
  stroke(200, 0, 200);
}

function draw() {
  image(img, 0, 0);
  for(let t of texts) {
    textSize(18);
    text(t.text, t.x, t.y);
    rect(t.x, t.y, t.w, t.h);
  }
}
