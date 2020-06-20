let layer = [];
let img2;

let r;
let g;
let b;

let x;
let c;

function preload() {
  layer[1] = loadImage("assests/IMG_2009.PNG");
  layer[2] = loadImage("assests/IMG_2008.PNG");
  layer[3] = loadImage("assests/IMG_2010.PNG");
  layer[4] = loadImage("assests/IMG_2011.PNG");
  layer[5] = loadImage("assests/IMG_2007.PNG");
  layer[6] = loadImage("assests/IMG_2006.PNG");
  layer[7] = loadImage("assests/IMG_2005.PNG");

}

function setup() {
 c =  createCanvas(windowWidth, windowHeight, WEBGL);

  r = 65;
  g = 160;
  b = 255;
  
  x=0;

}


function draw() {
  background(65, 160, 255, 255);
  //orbitControl();
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
  image(layer[7], 0,x);

  translate(0, 0, 180);
  image(layer[6],0,x);


  translate(0, 0, 150);
  image(layer[5],0,0);

  translate(0, 0, 120);
  image(layer[4],0,0);

  translate(0, 0, 100);
  image(layer[2],0,0);

  translate(0, 0, 50);
  image(layer[3],0,0);

  translate(0, 0, 0);
  image(layer[1],0,0);


  //x += tan(QUARTER_PI)*100; 


}

function mouseDragged(){ //to create a kind of 3D feeling 
  //allows users to drag the page and move x axis angle
  let camX = map(mouseX, 0, width, -400, 400);
  let camY = map(mouseY, 0, height, -400, 400);
  camera(camX,camY,(height/2)/tan(PI/6),0,0,0,0,1,0);
  
}
