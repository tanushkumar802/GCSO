var car,wall;
var speed, weight;
function setup() {
  speed=random(55,90)
  weight=random(400,1500)
  createCanvas(800,400);
  wall= createSprite(700,200,1500,75);
  wall.shapeColor="black"
  car = createSprite(50, 200, 50, 50);
  car.shapeColor="blue"
wall1=createSprite(800,200,25,100);
wall1.shapeColor="red"
}

function draw() {
 car.velocityX=speed;
 if(car.isTouching(wall1)){
   car.velocityX=0;
car.shapeColor="green"
 } 
 background(255,255,255);  
  drawSprites();
}