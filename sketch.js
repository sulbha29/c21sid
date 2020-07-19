var fixedRect, movingRect;
var go1,go2,go3,go4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  go1 = createSprite(100,100,50,50);
  go1.shapeColor = "blue";
  go2 = createSprite(200,100,50,50);
  go2.shapeColor = "blue";
  go3 = createSprite(300,100,50,50);
  go3.shapeColor = "blue";
  go4 = createSprite(400,100,50,50);
  go4.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,go1)){
    go1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    go1.shapeColor = "blue";
    movingRect.shapeColor = "green"
  }
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true;
}
else {
 return false;
}
}