var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=100; k = k + 200) {
    divisions.push(new Divisions(k+170, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=100; k = k + 200) {
    divisions.push(new Divisions(k+260, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=100; k = k + 200) {
    divisions.push(new Divisions(k+350, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=100; k = k + 200) {
    divisions.push(new Divisions(k+440, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=100; k = k + 200) {
    divisions.push(new Divisions(k+530, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=100; k = k + 200) {
    divisions.push(new Divisions(k+620, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=100; k = k + 200) {
    divisions.push(new Divisions(k+710, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=100; k = k + 200) {
    divisions.push(new Divisions(k+800, height-divisionHeight/2, 10, divisionHeight));
  }
  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 40; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }

  
  //create 4th row of plinko objects
  for (var j = 40; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
 // create particle objects


}
 


function draw() {
  background("black");
  textSize(20)
  text(score,10,400);
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  //display the paricles 
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10, width/2+10),10,10))
   }
  for (var j = 0; j<particles.length; j++){
    particles[j].display();
  }
  if(particles.y>600){
    score = score+1
  }
}