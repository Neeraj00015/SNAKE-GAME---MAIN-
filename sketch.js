var snake,snakeimg,snakebg ;


function preload (){

snakeimg=loadImage ("SNAKE.png") ;

}

function setup () {
  createCanvas(600,600) ;
snake=createSprite(200,200,20,20) ;
snake.addImage (snakeimg) ;
snake.scale=0.5 ; 


}

function draw () {
  background("red");
  if (keyDown ( "LEFT_ARROW")) {
  snake.x=snake.x-2 ; 
  }

if (keyDown ( "RIGHT_ARROW")) {
    snake.x=snake.x+2;

  }

  if (keyDown ( "UP_ARROW")) {
    snake.y=snake.y-2 ;
  }

  if (keyDown ( "DOWN_ARROW")) {
    snake.y=snake.y+2;

  } 
  drawSprites () ;

}
