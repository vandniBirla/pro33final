const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
var world 
var engine  
var bg, bgImg;
var rein, reinImg;
var snow;
function preload(){
  reinImg=loadAnimation("rein1.png","rein2.png")
  bgImg=loadImage("snow2.jpg")
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
 bg= createSprite(200, 10, 50, 50);
 bg.addImage(bgImg)
 bg.velocityX=6;
 rein=createSprite(400,400-80,20,20);
 rein.addAnimation("rein",reinImg);
}

function draw() {
  background(255,255,255);
   Engine.update(engine);

  if(bg.x>400){
    bg.x=200
  }
  spawn();
  drawSprites();
}
function spawn(){
  if(frameCount%1===0){
    snow=new Snow(random(20,780),10,20,20)
  }
}