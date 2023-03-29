let fr = 30;  // standard frame rate is 30 frames per sec
let score = 0; //Reset the score to zero
let gameOver = false;  //The game is over - Start over
function setup() {
  if(gameOver == true)  //If the game is over - Exectute the following otherwise, bypass this section
  {
    frameRate(fr/160);  //Slow down the frame rate to be able to read
    createCanvas(720,480);  // Create a standand resolution display
    background(255, 153, 153);  //Screen background Color
    textSize(40);
    text("Game over", 300,250); //Display the text Fame Over
  }
  else  
  {
    createCanvas(720,480);
    background(255, 153, 153);  //Screen Intro color
    r = random(255); // Pick dot color randomly
    g = random(255); // Pick dot color randomly
    b = random(255);  // Pick dot color randomly
     frameRate(fr/160); // Slow down the frame rate to be able to read
    textSize(40);
    text("The circle game", 200,100);
    text("Click on Bob the circle", 175, 250);
    text("and it will change into another color", 75, 300);
    text("Miss and it turns to black", 150,350);
    text("Hit Spacebar to start the game over", 60,425); // Display the text on the screen
  }
}
function draw() {
  if(gameOver == true)  {
    gameOver = false;
    setup();
    return; // Instruction for the Game Over Screen
  }
  frameRate(fr/30);
  background(204, 255, 255);  //Gameplay background 
  // Draw a circle
  strokeWeight(5);
  stroke(r, g, b);
  fill(r, g, b, 100);
  x = random(600);
  y = random(400);
  circle(x, y, 50); // The Radius of this circle must match the diameter od the distance in the following section
  text("Score", 5,50); 
  text(score, 150, 50); // Display the score in the upper left corner 
}
function mousePressed() { // When the user click the mouse inside the circle, the user mark a point and the dot change color
  
  let distance = dist(mouseX, mouseY, x, y);  // Check if mouse is inside the circle
  if (distance < 100) {
    r = random(255);  // Pick new random color values
    g = random(255);  // Pick new random color values
    b = random(255);  // Pick new random color values
    score++; // Adjust score
  }
  else 
  {
    r = 0  // Pick color black if user miss
    g = 0  // Pick color black if user miss
    b = 0  // Pick color black if user miss
    if(score > 0)
    {
      score--; // Score routine
    }
    else 
    {
      gameOver = true;
      setup();  // if the game is over - go back to Setup to execute the routine
    }
  }
}
function keyPressed() { 
  setup();  // When the user press Spacebar on the keyboard, the game Reset
}
