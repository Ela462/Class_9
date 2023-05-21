

function setup() {
  createCanvas(400, 400);
   box = createsprite(150,300,30,30);
  
}

function draw() {
  background(220);
  if(keyIsDown(Right_Arrow)){
  box.position.x = box.position.x + 5;
  }
  drawsprites();
}