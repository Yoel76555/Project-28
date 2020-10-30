
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone, tree, ground, boy,boyImg;
var mango1,mango2,mango3,mango4;
function preload()
{
	boyImg=loadImage("boy.png");
	
}

function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	//creating the sprites
	stone=new Stone(235,420,30);
	tree=new Tree(1050,580,500,500);
	ground= new Ground(600,height,1300,20);

	mango1= new Mango(800,330,40,40);
	mango2= new Mango(900,250,40,40);
	mango3= new Mango(1000,290,40,40);
	mango4= new Mango(1100,300,40,40);
	mango5= new Mango(730,290,40,40);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  image(boyImg,200,375,200,300);
  stone.display();
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  
  drawSprites();
 
}
function detectollision(Lstone,Lmango){
	mangoBodyPosition=mango1.body.position;
	stoneBodyPosition=stone.body.position;
 
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoPosition.x, mangoBodyPosition.y);
	if(distance<=mango1.r+stone1.r){
		Matter.Body.setStatic(mango1.body,false);
	}

}
function keyPressed() {
    if(keyCode === 32){
	Matter.Body.setPosition(stone.body,{x:235, y:420});
	launcherObject.attach(stone.body);
   }
}



