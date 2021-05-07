var Engine = Matter.Engine
var World = Matter.World
var Events = Matter.Events
var Bodies = Matter.Bodies

var plinkos = [];
//var particle;
var particle=[];

var turn =0;

var gameState = "PLAY";

var divisions=[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  
  Engine.update(engine);
 
  textSize(35);
  fill("white");
  text("Score : "+score,30 ,40);
  //text("Score : "+score,420,100);

  textSize(25)
  text("500",20,550);
  text("500",100,550);
  text("500",180,550);
  text("500",260,550);
  text("100",340,550);
  text("100",420,550);
  text("100",500,550);
  text("200",580,550);
  text("200",660,550);
  text("200",740,550);

  if (gameState === "END")
  {
   textSize(25);
   fill("red");
   text("Game Over",width/2,height/2);
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
    for (var k = 0; k < divisions.length; k++) {
    
      divisions[k].display();
    }
    if (particle.length>0)
    {
      particle[0].display();

      if (particle[0].body.position.y>550){
        console.log(particle[0].body.position.y,particle[0].body.position.x)
        if (particle[0].body.position.x < 80)
        {
          score=score+500;
         particle.pop();
          if (turn>= 5 ) gameState="END";
        }
        else if (particle[0].body.position.x < 160)
        {
          score=score+500;
         particle.pop();
          if (turn>= 5 ) gameState="END";
        }
        else if (particle[0].body.position.x < 240)
        {
          score=score+500;
         particle.pop();
          if (turn>= 5 ) gameState="END";
        }
        else if (particle[0].body.position.x < 320)
        {
          score=score+500;
         particle.pop();
          if (turn>= 5 ) gameState="END";
        }
        else if (particle[0].body.position.x < 400)
        {
          score=score+100;
         particle.pop();
          if (turn>= 5 ) gameState="END";
        }
        else if (particle[0].body.position.x < 480)
        {
          score=score+100;
         particle.pop();
          if (turn>= 5 ) gameState="END";
        }
        else if (particle[0].body.position.x < 540)
        {
          score=score+100;
         particle.pop();
          if (turn>= 5 ) gameState="END";
        }
        else if (particle[0].body.position.x < 620)
        {
          score=score+200;
         particle.pop();
          if (turn>= 5 ) gameState="END";
        }
        else if (particle[0].body.position.x < 700)
        {
          score=score+200;
         particle.pop();
          if (turn>= 5 ) gameState="END";
        }
        else if (particle[0].body.position.x < 780)
        {
          score=score+200;
         particle.pop();
          if (turn>= 5 ) gameState="END";
        }
      }
    }
}
 
  function mousePressed() {
    if(gameState !== "END"){
    turn++;
    particle.push(new Particle(mouseX, 50, 10, 10))
    console.log(particle)
  }
}