var bullet, wall;
var speed, weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, 100);
}

function draw() {
  background(255,255,255);   

  damage = Math.round(0.5*weight*speed*speed/thickness^3);

  if(bullet.isTouching(wall)){
    bullet.velocityX = 0; 

  if(damage <= 10){
    wall.shapeColor = "green";
  }

  if(damage > 10){
    wall.shapeColor = "red";
  }
}

  drawSprites();
}