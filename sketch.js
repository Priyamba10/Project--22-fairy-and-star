var starImg,bgImg,fairyImg;
var star, starBody,fairy,fairyBody;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage1.png");
	
	

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy = createSprite(100,600);
	fairy.addAnimation("flying fairy",fairyImg);
	fairy.scale = 0.3;




	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if (star.y > 520 && starBody.position.y > 520){
	  Matter.Body.setStatic (starBody,true);
  }

  //write code to stop star in the hand of fairy

  drawSprites();

}
function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	if (keyCode === RIGHT_ARROW) {
	fairy.x = fairy.x + 20;
	}
	if (keyCode === LEFT_ARROW) {
		fairy.x = fairy.x - 20;
		}

	//writw code to move fairy left and right
	
}
