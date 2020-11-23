var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bottomBox
var bottomBoxSprite
var rightWallSp,leftWallSp
var wallRight,wallLeft
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 180, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottomBoxSprite = createSprite(10,10,200,20)
	bottomBoxSprite.shapeColor = "red"

	rightWallSp = createSprite(10,10,20,100)
	rightWallSp.shapeColor = "red"

	leftWallSp = createSprite(10,10,20,100)
	leftWallSp.shapeColor = "red"

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 27 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	bottomBox = Bodies.rectangle(width/2, height-55 , 200 , 20 , {restitutuon:0.4, isStatic:true});
	World.add(world, bottomBox)

	wallRight = Bodies.rectangle(width/2 + 110, 605 , 20 , 100 , {restitution:0.5, isStatic:true})
	World.add(world,wallRight)

	wallLeft = Bodies.rectangle(width/2 - 110, 605 , 20 , 100 , {restitution:0.6, isStatic:true})
    World.add(world,wallLeft)

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  bottomBoxSprite.x = bottomBox.position.x
  bottomBoxSprite.y = bottomBox.position.y

  rightWallSp.x = wallRight.position.x
  rightWallSp.y = wallRight.position.y

  leftWallSp.x = wallLeft.position.x
  leftWallSp.y = wallLeft.position.y

  keyPressed()
  drawSprites();

}

function keyPressed() {

 if (keyDown("DOWN")) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Body.setStatic(packageBody, false)
  }
}



