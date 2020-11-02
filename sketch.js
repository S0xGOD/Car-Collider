var car ,wall
var speed ,weight


function setup(){
createCanvas(1200,400);
speed = Math.ceil(random(20,50));
weight = Math.ceil(random(400,1500));
car = createSprite(50,200,50,50);
car.shapeColor = "white";
car.velocityX = speed;
wall = createSprite(1100,200,60,height/2);
wall.shapeColor = "white" ;

}

function draw(){
background(0);

if(wall.x-car.x < (car.width+wall.width)/2)
{
car.velocityX=0;

var deformation=0.5*weight*speed* speed/22509;
if(deformation>180)
{
    car.shapeColor=color(255,255,0);
}

if(deformation<180 && deformation>100)
{
   car.shapeColor=color(230,230,0);
}
if(deformation<100)
{
   car.shapeColor=color(0,255,0);

}
   }



drawSprites();
}