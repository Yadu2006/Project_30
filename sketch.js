const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground2 = new Ground(685, 300 , 300, 20);
    ground3 = new Ground(1005, 200 , 250, 20);


    box1 = new Box(600, 270, 30, 40);
    box2 = new Box(630, 270, 30, 40);
    box3 = new Box(660, 270, 30, 40);
    box4 = new Box(690, 270, 30, 40);
    box5 = new Box(720, 270, 30, 40);
    box6 = new Box(750, 270, 30, 40);
    box7 = new Box(780, 270, 30, 40);
    
    box8 = new Box(630, 230, 30, 40);
    box9 = new Box(660, 230, 30, 40);
    box10 = new Box(690, 230, 30, 40);
    box11 = new Box(720, 230, 30, 40);
    box12 = new Box(750, 230, 30, 40);

    box13 = new Box(660, 190, 30, 40);
    box14 = new Box(690, 190, 30, 40);
    box15 = new Box(720, 190, 30, 40);

    box16 = new Box(690, 150, 30, 40);

    box17 = new Box(950, 170, 30, 40);
    box18 = new Box(980, 170, 30, 40);
    box19 = new Box(1010, 170, 30, 40);
    box20 = new Box(1040, 170, 30, 40);
    box21 = new Box(1070, 170, 30, 40);

    box22 = new Box(980, 130, 30, 40);
    box23 = new Box(1010, 130, 30, 40);
    box24 = new Box(1040, 130, 30, 40);

    box25 = new Box(1010, 90, 30, 40);

    bird = new Bird(100,100);

    slingshot = new SlingShot(bird.body,{x:200, y:100});
}

function draw(){
    
    background(255);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    ground2.display();
    ground3.display();

    box3.display();
    box4.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    bird.display();

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed()
{

    if(keyCode === 32)
    {

        slingshot.attach(bird.body);

    }

}