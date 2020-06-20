//let layer = [];
//let img2;

//let r;
//let g;
//let b;

//let x;
let c;

let camX;
let camY;

let layer0;
let layer1;
let layer2;
let layer3;
let layer4;
let layer5;
let layer6;

function preload() {
  layer0 = loadImage('assests/IMG_2009.PNG');
  layer1 = loadImage('assests/IMG_2008.PNG');
  layer2 = loadImage('assests/IMG_2010.PNG');
  layer3 = loadImage('assests/IMG_2011.PNG');
  layer4 = loadImage('assests/IMG_2007.PNG');
  layer5 = loadImage('assests/IMG_2006.PNG');
  layer6 = loadImage('assests/IMG_2005.PNG');

}

function setup() {
 c =  createCanvas(windowWidth, windowHeight, WEBGL);

 // r = 65;
 // g = 160;
 // b = 255;
  
 // x=0;

}


function draw() {
  background(65, 160, 255, 255);
  orbitControl();
  Drawing();
}

function Drawing() {

  fill(0, 0, 0, 0);
  tint(255, 255, 255, 255);

  noStroke();
  rectMode(CENTER);
  imageMode(CENTER);
  scale(0.4);

  translate(0, 0, -1000);
  image(layer6, 0,x);

  translate(0, 0, 180);
  image(layer5,0,x);


  translate(0, 0, 150);
  image(layer4,0,0);

  translate(0, 0, 120);
  image(layer3,0,0);

  translate(0, 0, 100);
  image(layer1,0,0);

  translate(0, 0, 50);
  image(layer2,0,0);

  translate(0, 0, 0);
  image(layer0,0,0);

  //x += tan(QUARTER_PI)*100; 

}

//function mouseDragged(){ //to create a kind of 3D feeling 
  //allows users to drag the page and move x axis angle
//  camX = map(mouseX, 0, width, -400, 400);
//  camY = map(mouseY, 0, height, -400, 400);
//  camera(camX,camY,(height/2)/tan(PI/6),0,0,0,0,1,0);
  
//}
