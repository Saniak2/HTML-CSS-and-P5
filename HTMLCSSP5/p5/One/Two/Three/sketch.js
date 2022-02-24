function setup() {
  createCanvas(400, 400);
  //background(0);
  background(100, 100, 100);
  noFill();
  stroke('cyan');
}

function draw() {
  ellipse(200, 200, frameCount*5%400);
  if(frameCount * 5 % 400){
    //background(20, 20, 20);
  }
}
