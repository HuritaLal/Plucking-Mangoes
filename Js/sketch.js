const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var tree,stone,ground,launcher;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("Photos/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone = new Stone(235,420,30); 

	mango1 = new Mango(1100,100,30);
    mango2 = new Mango(1170,130,30);
	mango3 = new Mango(1010,140,30);
	mango4 = new Mango(1000,70,30);
	mango5 = new Mango(1100,70,30);
	mango6 = new Mango(1000,230,30);
	mango7 = new Mango(900,230,40);
	mango8 = new Mango(1140,150,40);
	mango9 = new Mango(1100,230,40);
	mango10 = new Mango(1200,200,40);
	mango11 = new Mango(1120,50,40);
	mango12 = new Mango(900,160,40);

	tree = new Tree(1050,580);

	ground = new Ground(width/2,600,width,20);

	launcher = new Launcher(stone.body,{x:235,y:420})
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(engine);
}

function draw() {
  background(46, 92, 232);
  textSize(25);
  fill(40, 27, 84)
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);

 tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  ground.display();
  launcher.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	launcher.attach(stone.body);
	}
  }

  function detectCollision(lstone,lmango){
	
  mangoPosition=lmango.body.position
  stonePosition=lstone.body.position
  
  var distance=dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y)

  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }