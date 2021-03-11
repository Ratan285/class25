/*
CLASS 23: 
CREATEING BLUEPRINTS(CLASS)

CLASS: OOP
5 BOXES : 

 
*/
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine;
var myWorld
var ground
var ball;
var box1,box2,box3,box4;
var ground;
var log1,log2;
var pig1,pig2;

function setup() {
  createCanvas(1200,400);

  myEngine = Engine.create();

  myWorld = myEngine.world;

  ground= new Ground(600,390,1200,10);

  box1 = new Box(700,320,70,70);
  pig1 = new Pig(800,320);
  box2 = new Box(920,320,70,70);
  log1 = new Log(810,300,300,PI/2);
  
  box3 = new Box(700,280,70,70);
  pig2 = new Pig(800,280);
  box4 = new Box(920,280,70,70);
  log2 = new Log(810,240,300,PI/2);

 console.log(box1);
 //console.log(box1.height);
 
}

function draw() {
  background("lightblue");

  Engine.update(myEngine);

  box1.display();
  pig1.display();
  box2.display();
  log1.display();

  box3.display();
  pig2.display();
  box4.display();
  log2.display();

  ground.display();

  
  

  
 
  
}