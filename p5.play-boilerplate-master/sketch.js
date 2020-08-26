
var obj1, obj2;

function setup() {
  createCanvas(800,800);

  obj1 = createSprite(0, 400, 50, 50);
  obj2 = createSprite(800, 400, 50, 50);
}

function draw() {
  background(0);  
  obj1.setVelocity(2, 0);
  obj2.setVelocity(-2, 0);
  bounceOff(obj1, obj2);
  drawSprites();
}