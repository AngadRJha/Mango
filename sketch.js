
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var mango
var boy, boyprint, stone, tree,treePrint

var ground;
function preload()
{
	boyprint = loadImage("boy.png") 
	treePrint = loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	
	boy = createSprite(200,500,40,40);
	boy.addImage(boyprint)
	boy.scale= 0.15
	stone = new Stone(121,400)
	stone.scale=0.1
	constraint1 = new Slingshot(stone.body,{x:121,y:400})
	
	ground =  new Ground(400,597,800,120)
	
	tree = createSprite(668,350,20,20)
	tree.addImage(treePrint)
	tree.scale = 0.4
	mango = new Mango(408,201)
	mango1 = new Mango(621,105)
	mango2 = new Mango(820,150)
	mango3 = new Mango(511,369)
	Engine.run(engine)
}


function draw() {
  rectMode(CENTER);
  background(0);

  

  text("x: "+mouseX+" y: "+mouseY,mouseX,mouseY)
  

 

  stone.display()
  constraint1.display()
  mango.display()
  mango1.display()
  mango2.display()
  mango3.display()
  ground.display()
  
  detectollision(stone,mango);
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  Engine.update(engine)
  
 
  drawSprites();
 
}
function mouseReleased(){
    constraint1.fly();
    
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function keyPressed(){
    
    if(keyCode === 32){
        gameState="onSling"
        constraint1.attach(stone.body);
    }
}
function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}
}




