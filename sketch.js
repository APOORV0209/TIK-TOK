
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hr,mn,se;
var hrang,mnang,seang;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
angleMode(DEGREES);


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  translate (250,250);
  rotate(-90)
  fill("red")
  ellipseMode(CENTER);
  ellipse(0,0,250,250)
  hr=hour();
  mn=minute();
  se=second();

  hrAngle=map(hr% 12,0,12,0,360)
  mnAngle=map(mn, 0,60,0,360)
  seAngle=map(se,0,60,0,360)
  push ();
  rotate(seAngle )
  stroke ("white")
  strokeWeight(5)
  line(0,0,100,0)
  pop ();

  push ();
  rotate(mnAngle )
  stroke ("green")
  strokeWeight(6)
  line(0,0,75,0)
  pop ();

  push ();
  rotate(hrAngle )
  stroke ("blue")
  strokeWeight(7)
  line(0,0,50,0)
  pop ();
  drawSprites();
}



