
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var ball1,ball2,ball3,ball4,ball5,rod,sling1,sling2,sling3,sling4,sling5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
rod =  new Ground(400,200,300,20);
ball1 = new Ball(400,500,30);
sling1 = new SlingShot(ball1.body,{x:400,y:200});
ball2 = new Ball(360,500,30);
sling2 = new SlingShot(ball2.body,{x:360,y:200});
ball3 = new Ball(320,500,30);
sling3 = new SlingShot(ball3.body,{x:320,y:200});
ball4 = new Ball(440,500,30);
sling4 = new SlingShot(ball4.body,{x:440,y:200});
ball5 = new Ball(460,500,30);
sling5 = new SlingShot(ball5.body,{x:480,y:200});



  
}


function draw() {
  Engine.update(engine);
  background(0);
  
  rod.display();
  ball1.display();
  sling1.display();
  ball2.display();
  sling2.display();
  ball3.display();
  sling3.display();
  ball4.display();
  sling4.display();
  ball5.display();
  sling5.display();
  drawSprites();
 
}

function keyPressed() {
  if(keyDown("UP_ARROW")) {
    Matter.Body.applyForce(ball3.body,ball3.body.position,{x:-200,y :-85})
  }
}

