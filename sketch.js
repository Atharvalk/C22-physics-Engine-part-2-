// Engine,Body
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// World,Engine
let engine;
let world;
// Ground
var ground;

// wall,ball,button
var top_wall;
var ball;
var button

function setup() {
  createCanvas(400,400);

//up button
  button = createImg('up.png')
  button.position(2,2)
  button.size(50,50)
  button.mouseClicked(VForce)

// Engine
  engine = Engine.create();
  world = engine.world;

 //Ball
  var options = {
    restitution:1
  }
  ball = Bodies.circle(200,200,25,options)
  World.add(world,ball)
  
  // Ground
  ground =new Ground(200,390,400,20);

 // Walls
  top_wall1 = new Ground(50,200,30,20);
  top_wall2 = new Ground(150,200,30,20);
  top_wall3 = new Ground(250,200,30,20);
  top_wall4 = new Ground(350,200,30,20);

// Modes
  rectMode(CENTER);          
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  
  
// Display
  ground.show();
  top_wall1.show();
  top_wall2.show();
  top_wall3.show();
  top_wall4.show();
  ellipse(ball.position.x,ball.position.y,25)
  Engine.update(engine);
}
// Ball Force
function VForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
}