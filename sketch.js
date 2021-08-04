var path,pathimg
var runner,runnerimg,runnering
var line1,line2
function preload(){
   //pre-load images
  pathimg=loadImage("path.png")
  runnerimg=loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathimg)
  path.velocityY = 4
  path.scale=1.2

runner=createSprite(190,50)
runner.addAnimation("running",runnerimg)
runner.scale=0.07

line1 = createSprite(390,390,50,800)
line1.visible = false

line2 = createSprite(0,0,50,800)
line2.visible = false
}



function draw() {
  background(200)



if(path.y > 400){
  path.y = height/2;
}

runner.x = World.mouseX

runner.collide(line1)

runner.collide(line2)

drawSprites()

}
