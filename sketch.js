var ship,ship_sailing;
var seaImage;
var sea;




function preload(){
seaImage = loadImage("sea.png");
ship_sailing = loadAnimation("ship-1.png","ship-2.png")
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(50,160,30,30);
ship.addAnimation("movingship",ship_sailing);
// ship.scale=1.5;
sea = createSprite(200,180,400,20);
sea.addImage(seaImage)




}

function draw() {
  
  // background("blue");
sea.velocityX=-2

if(sea.velocityX<0){
  sea.x=sea.width/2;
}
// ship.collide(sea);

 drawSprites();
}