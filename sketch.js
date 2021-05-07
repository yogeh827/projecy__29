const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var ground1, ground2 ; 
var box1,box2,box2,box2,box2,box2,box2,box2,box2,box2,box2,box2,box2,box2,box2,box2,box2,box2,box2,box2; 
var polygon;
var slingshot;
var gameState = "onSling";





function setup() {
  createCanvas(1600,800);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
  polygon = new Polygon(250,250,20,20);
  slingshot = new SlingShot(polygon.body,{x:250, y:250});
  
  

  ground1 = new Ground(680,350,250,10);
  ground2 = new Ground(940,250,225,10);
    
    box1 = new Box (850,225,30,40);
    box2 = new Box (880,225,30,40);
    box3 = new Box (910,225,30,40);
    box4 = new Box (940,225,30,40);
    box5 = new Box (970,225,30,40);
    box6 = new Box (1000,225,30,40);
    box7 = new Box (1030,225,30,40);

    
    box8 = new Box (880,185,30,40);
    box9 = new Box (910,185,30,40);
    box10 = new Box (940,185,30,40);
    box11= new Box (970,185,30,40);
    box12= new Box (1000,185,30,40);
   
    box13 = new Box (910,145,30,40);
    box14 = new Box (940,145,30,40);
    box15= new Box (970,145,30,40);

    box16 = new Box (940,105,30,40);


    box33 = new Box(590,325,30,40);
   box17 = new Box (620,325,30,40);
    box18 = new Box (740,325,30,40);
    box19 = new Box (650,325,30,40);
    box20 = new Box (680,325,30,40);
    box21 = new Box (710,325,30,40);
    box22 = new Box (740,325,30,40);
    box23 = new Box (770,325,30,40);
    box24 = new Box (740,285,30,40);
    box25 = new Box (620,285,30,40);
    box26 = new Box (650,285,30,40);
    box27 = new Box (680,285,30,40);
    box28 = new Box (710,285,30,40);
    box29 = new Box (650,245,30,40);
    box30 = new Box (680,245,30,40);
    box31 = new Box (710,245,30,40);
    box32 = new Box (680,205,30,40);
    

}

function draw() {
  background(47,37,32);  

  Engine.update(engine);

  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();

  polygon.display();
  slingshot.display();
  

  drawSprites();
}
function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}