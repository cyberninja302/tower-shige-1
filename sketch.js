
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world
var ground, platform
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;

  ground = new Ground(600, 380, 1200, 10);

  ball = new Ball(100,60,20);

  chain1 = new Chain( ball.body,{x:200,y:50});

  platform = new Ground(150,305,300,170)

  box1 = new Box(700,320,70,70);
  box2 = new Box(700,240,70,70);
  box3 = new Box(700,320,70,70);
  box4 = new Box(890,320,70,70);
  box5 = new Box(890,240,70,70);
  box6 = new Box(890,300,70,70);
  box7 = new Box(1060,340,70,70);
  box8 = new Box(1060,340,70,70);
  box9 = new Box(1060,340,70,70);
  //create one more tower with 3 boxes on the right of the existing towers
  //since the towers need to be shifted to right, please increase their x axis values and y will remain same
  //size needs to be same too

}
function draw(){
  background("light blue")
  Engine.update(engine);
  chain1.display();

  platform.display();

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  ball.display();
}
//function which get automatically executed when we drag the mouse
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
  chai
}