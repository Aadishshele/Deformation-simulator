var car 
var wall
var speed
var weight

function setup() {
  
  createCanvas(1600,400);
  car = createSprite(30, 200, 30, 30);
  car.velocityX=6
  wall = createSprite(1500,200,60,height/2)
  wall.shapeColor=color(80,80,80)
  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
  background("Black");  
  if(car.isTouching(wall)){
    car.velocityX=0
    var deformation = 0.5 * weight * speed * speed/22500

    if(deformation < 100 ){
      car.shapeColor=color(0,255,0)
    }
    if(deformation > 100 && deformation < 180 ){
      car.shapeColor=color(230,230,0)
    }
    if(deformation < 180){
      car.shapeColor=color(25,0,0)
    }
  }
  
  drawSprites();
}