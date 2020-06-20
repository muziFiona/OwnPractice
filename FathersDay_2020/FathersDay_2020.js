let layer = [];
let img2;

let r;
let g;
let b;

let x;


function preload() {
  layer[1] = loadImage("assests/IMG_2009.png");
  layer[2] = loadImage("assests/IMG_2008.png");
  layer[3] = loadImage("assests/IMG_2010.png");
  layer[4] = loadImage("assests/IMG_2011.png");
  layer[5] = loadImage("assests/IMG_2007.png");
  layer[6] = loadImage("assests/IMG_2006.png");
  layer[7] = loadImage("assests/IMG_2005.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  r = 65;
  g = 160;
  b = 255;
  
  x=0;

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
