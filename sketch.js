
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var ground;

function preload()
{

}

function setup() {
	createCanvas(1900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(200,450,5);
	
	ground = new Ground(width/2,690,1900,20);

	
	log2 = new Log(1730,550,300,270);
	

	Engine.run(engine);
  console.log(ball);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
Engine.update(engine);


  
  fill("yellow");
  stroke(500);
  textSize(50);
  text("CRUMPLED BALL - 2",650,150);
  fill("red");
  text("PRESS 'UP ARROW' TO THROUGH",500,350);
  
  
  
  ball.display();
  ground.display();
  
  log2.display();
 

 
  
}

function KeyPressed(){

if(keyCode === "UP_ARROW"){

Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});




}





}



