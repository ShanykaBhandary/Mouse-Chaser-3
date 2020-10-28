const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world
var maze1,maze2,maze3,maze4,maze5,maze6,maze7,maze8,maze9,maze10,maze11,maze12,maze13,maze14,maze15,maze16,maze17,maze18,maze19,maze20
var maze21,maze22,maze23,maze24,maze25,maze26,maze27,maze28,maze29,maze30//,maze31,maze32,maze33,maze34,maze35


function setup() {
  createCanvas(800,800);
  
  engine=Engine.create();
  world=engine.world;

  mouse=createSprite(3,10,20,20)
  

  maze1=createSprite(200, 200, 20, 200)
  maze1.shapeColor=("pink")
  maze2=createSprite(200, 200, 200, 20)
  maze2.shapeColor=("pink")
  maze3=createSprite(0, 99, 200, 20)
  maze3.shapeColor=("pink")
  maze4=createSprite(395, 304, 200, 20)
  maze4.shapeColor=("pink")
  maze5=createSprite(0, 304, 420, 20)
  maze5.shapeColor=("pink")
  maze6=createSprite(99, 209, 20, 100)
  maze6.shapeColor=("pink")
  maze7=createSprite(180, 28, 20, 70)
  maze7.shapeColor=("pink")
  maze8=createSprite(169, 395, 20, 60)
  maze8.shapeColor=("pink")
  maze9=createSprite(323, 51, 200, 20)
  maze9.shapeColor=("pink")
  maze10=createSprite(305, 396, 20, 90)
  maze10.shapeColor=("pink")
  maze11=createSprite(51, 312, 20, 200)
  maze11.shapeColor=("pink")
  maze12=createSprite(225, 396, 20, 120)
  maze12.shapeColor=("pink")
  maze13=createSprite(398, 240, 100, 20)
  maze13.shapeColor=("pink")
  maze14=createSprite(209, 144, 150, 20)
  maze14.shapeColor=("pink")
  maze15=createSprite(328, 60, 20, 200)
  maze15.shapeColor=("pink")
  maze16=createSprite(94, 0, 20, 100)
  maze16.shapeColor=("pink")
  maze17=createSprite(145, 355, 100, 20)
  maze17.shapeColor=("pink")
  maze18=createSprite(244, 230, 20, 100)
  maze18.shapeColor=("pink")
  maze19=createSprite(366, 57, 20, 100)
  maze19.shapeColor=("pink")
  maze20=createSprite(44, 142, 20, 100)
  maze20.shapeColor=("pink")
  maze21=createSprite(185, 248, 50, 20)
  maze21.shapeColor=("pink")
  maze22=createSprite(374, 227, 20, 100)
  maze22.shapeColor=("pink")
  maze23=createSprite(390,240,50,100)
  maze23.shapeColor=("pink")
  maze24=createSprite(345,450,100,20)
  maze24.shapeColor=("pink")
  maze25=createSprite(450,400,20,190)
  maze25.shapeColor=("pink")
  maze26=createSprite(455,0,20,260)
  maze26.shapeColor=("pink")
  maze27=createSprite(500,300,20,100)
  maze27.shapeColor=("pink")
  maze28=createSprite(475,120,100,20)
  maze28.shapeColor=("pink")
  maze29=createSprite(4,450,200,20)
  maze29.shapeColor=("pink")
  /*maze30=createSprite()
  maze30.shapeColor=("pink")
  maze31=createSprite()
  maze31.shapeColor=("pink")
  maze32=createSprite()
  maze32.shapeColor=("pink")
  maze33=createSprite()
  maze33.shapeColor=("pink")
  maze34=createSprite()
  maze34.shapeColor=("pink")
  maze30=createSprite()
  maze30.shapeColor=("pink")*/
}

function draw() {
  background("black");
  


  maze1.display();
  maze2.display();  
  maze3.display();
  maze4.display();
  maze5.display();
  maze6.display();
  maze7.display();
  maze8.display();
  maze9.display();
  maze11.display();
  maze12.display();
  maze13.display();
  maze14.display();
  maze15.display();
  maze16.display();
  maze17.display();
  maze18.display();
  maze19.display();
  maze20.display();
  maze21.display();
  maze22.display();
  maze23.display();
  maze24.display();
  maze25.display();
  maze26.display();
  maze27.display();
  maze28.display();
  maze29.display();

  if(keyDown(UP_ARROW)){
    mouse.velocityX=0
    mouse.velocityY=-5
  }
  if(keyDown(DOWN_ARROW)){
    mouse.velocityX=0
    mouse.velocityY=5
  }
  if(keyDown(RIGHT_ARROW)){
    mouse.velocityX=5
    mouse.velocityY=0
  }
  if(keyDown(LEFT_ARROW)){
    mouse.velocityX=-5
    mouse.velocityY=0
  }
edges=createEdgeSprites();
mouse.bounceOff(edges);
mouse.bounceOff(maze1)
mouse.bounceOff(maze2)
mouse.bounceOff(maze3)
mouse.bounceOff(maze4)
mouse.bounceOff(maze5)
mouse.bounceOff(maze6)
mouse.bounceOff(maze7)
mouse.bounceOff(maze8)
mouse.bounceOff(maze9)
mouse.bounceOff(maze10)
mouse.bounceOff(maze11)
mouse.bounceOff(maze12)
mouse.bounceOff(maze13)
mouse.bounceOff(maze14)
mouse.bounceOff(maze15)
mouse.bounceOff(maze16)
mouse.bounceOff(maze17)
mouse.bounceOff(maze18)
mouse.bounceOff(maze19)
mouse.bounceOff(maze20)
mouse.bounceOff(maze21)
mouse.bounceOff(maze22)
mouse.bounceOff(maze23)
mouse.bounceOff(maze24)
mouse.bounceOff(maze25)
mouse.bounceOff(maze26)
mouse.bounceOff(maze27)
mouse.bounceOff(maze28)
mouse.bounceOff(maze29)

  drawSprites();
}