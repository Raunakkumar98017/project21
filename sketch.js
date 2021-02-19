var canvas;
var music;
var ball,edges;
var block1,block2,block3,block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,585,360,25);
    block1.shapeColor = "blue";
    block2 = createSprite(295,585,200,25);
    block2.shapeColor = "yellow";
    block3 = createSprite(515,585,200,25);
    block3.shapeColor = "pink";
    block4 = createSprite(740,585,220,25);
    block4.shapeColor = "green";


    //create box sprite and give velocity
    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor = "white";

    ball.velocityX = 6;
    ball.velocityY = 8;
    
   
}

function draw() {
    background("black");
    //create edgeSprite
    edges = createEdgeSprites();
    
    ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue"
        music.play();

    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "yellow";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();

    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "pink";
        music.play();
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
    }


    drawSprites();
}
