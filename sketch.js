
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,rubber,stone,ground,brick;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer=new Hammer(600,200);
	rubber=new Rubber(910,00);
	ground=new Ground(600,height,1200,40);
	stone=new Stone(680,00);
	brick=new Brick(470,00);
	sand1=new Sand(140,00);
	sand2=new Sand(141,00);
	sand3=new Sand(142,0);
	sand4=new Sand(143,0);
	sand5=new Sand(144,0);
	sand6=new Sand(145,0);
	sand7=new Sand(146,0);
	sand8=new Sand(147,0);
	sand9=new Sand(148,0);
	sand10=new Sand(149,0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  


  hammer.display();
  rubber.display();
  ground.display();
  stone.display();
  brick.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
 

 
}



