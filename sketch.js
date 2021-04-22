var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud,cloudsGroup,cloud_image;
var obstaclesGroup,obstacles,o1,o2,o3,o4,o5,o6;
var rand ;
var count = 0;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  
  cloud_image = loadImage("cloud.png")
  
  o1 = loadImage("obstacle1.png")
  
  o2 = loadImage("obstacle2.png")
  
  o3 = loadImage("obstacle3.png")
  
  o4 = loadImage("obstacle4.png")
  
  o5 = loadImage("obstacle5.png")
  
  o6 = loadImage("obstacle6.png")
                 
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudsGroup = new Group();
  ObstaclesGroup = new Group ();
}

function draw() {
  background(0);
count =count+ Math.round(getFrameRate()/60);
 text("Score: "+ count, 500, 50);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  spawnclouds();
  spawnObstacles();
  drawSprites();
}
function spawnclouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y =Math.round( random (80,120));
    cloud.addImage(cloud_image);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }  
}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacles = createSprite(600,165,10,40);
    obstacles.velocityX = - 6 ;
  rand = Math.round(random(1,6));  
    //generate random obstacles
    switch(rand) {
case 1:obstacles.addImage(o1);
break;
case 2: obstacles.addImage(o2);
break;
case 3: obstacles.addImage(o3);
break;
case 4: obstacles.addImage(o4);
break;
case 5: obstacles.addImage(o5);
break;
case 6: obstacles.addImage(o6);
break;
default:
break;

}
    
    //assign scale and lifetime to the obstacle           
    obstacles.scale = 0.5;
    obstacles.lifetime = 100;
    //add each obstacle to the group
    ObstaclesGroup.add(obstacles);
  }
}