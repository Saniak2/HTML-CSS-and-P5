function setup() {
  createCanvas(400, 400);
  //background(0);
  //background(220);
  noFill();
  stroke('cyan');
}

function draw() {
  ellipse(200, 200, frameCount*5%400);
  if(frameCount * 5 % 400){
    background(100, 60, 200);
  }
}
