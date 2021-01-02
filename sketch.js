var PLAY = 1;
var END = 0;
var gameState = PLAY
var ball, ballImage;
var obstacle, obstacleImage, obstacleGroup;
var backgroundImage, gameoverImage;
var gameover

function preload() {
  ballImage = loadImage("hero.png");
  obstacleImage = loadImage("obstacle.png");
  //backgroundImage = loadImage("background.png");
  gameoverImage = loadImage("gameover.png")

}


function setup() {
  createCanvas(1280, 500);

  ball = createSprite(320, 430, 50, 50);
  ball.addImage(ballImage);
  ball.scale = 0.3;
  ball.setCollider("circle", 0, 0, 97);

  obstacleGroup = new Group();

}

function draw() {
  background("white");



  if (gameState === PLAY) {
    ball.x = World.mouseX;
    wall();


    if (ball.isTouching(obstacleGroup)) {
      obstacleGroup.velocity = 8
      ball.velocity = 0
      gameState = END;
      //text("Good Try",300,200)
      gameover = createSprite(600, 200, 50, 50);
      gameover.addImage(gameoverImage)
      gameover.scale = 1.5
    }

  } else
  if (gameState == END) {

    if (ball.isTouching(obstacleGroup)) {
      obstacleGroup.velocity = 8
      ball.velocity = 0
      gameState = END;

    }

  }
 
 // ball.debug = true;
  
  drawSprites();
}




function wall() {

  if (World.frameCount % 1.5 === 0) {
    obstacle = createSprite(400, 50, 70, 50);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.5
    obstacle.velocityY = 8
    obstacleGroup.add(obstacle)
    //obstacle.debug = true;
    position = Math.round(random(1, 26))
    if (position == 1) {
      obstacle.x = 50
    } else
    if (position == 2) {
      obstacle.x = 100
    } else
    if (position == 3) {
      obstacle.x = 150
    } else
    if (position == 4) {
      obstacle.x = 200
    } else
    if (position == 5) {
      obstacle.x = 250
    } else
    if (position == 6) {
      obstacle.x = 300
    } else
    if (position == 7) {
      obstacle.x = 350
    } else
    if (position == 8) {
      obstacle.x = 400
    } else
    if (position == 9) {
      obstacle.x = 450
    } else
    if (position == 10) {
      obstacle.x = 500
    } else
    if (position == 11) {
      obstacle.x = 5
    } else
    if (position == 12) {
      obstacle.x = 550
    }
    else
    if (position == 13) {
      obstacle.x = 600
    }
    else
    if (position == 14) {
      obstacle.x = 650
    }
    else
    if (position == 15) {
      obstacle.x = 700
    }
    else
    if (position == 16) {
      obstacle.x = 750
    }
    else
    if (position == 17) {
      obstacle.x = 800
    }
    else
    if (position == 18) {
      obstacle.x = 850
    }
    else
    if (position == 19) {
      obstacle.x = 900
    }
    else
    if (position == 20) {
      obstacle.x = 950
    }
    else
    if (position == 21) {
      obstacle.x = 1000
    }
    else
    if (position == 22) {
      obstacle.x = 1050
    } else
    if (position == 23) {
      obstacle.x = 1100
    }
    else
    if (position == 24) {
      obstacle.x = 1150
    }
    else
    if (position == 25) {
      obstacle.x = 1200
    }
    else
    if (position == 26) {
      obstacle.x = 1250
    }

    console.log(obstacle.x)
  }

}