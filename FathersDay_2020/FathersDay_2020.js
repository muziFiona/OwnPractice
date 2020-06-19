let layer =[];
let img2;

let r;
let g;
let b;

let on = flase; 

function preload(){
  layer[1]= loadImage("assests/IMG_2009.png");
  layer[2]= loadImage("assests/IMG_2008.png");
  layer[3]= loadImage("assests/IMG_2010.png");
  layer[4]= loadImage("assests/IMG_2011.png");
  layer[5]= loadImage("assests/IMG_2007.png");
  layer[6]= loadImage("assests/IMG_2006.png");
  layer[7]= loadImage("assests/IMG_2005.png");
  
}

function setup() {
createCanvas(windowWidth, windowHeight, WEBGL);

r= 65;
g=160;
b=255;

}


function draw() {
background(r,g,b,255);
orbitControl();
Drawing();
//changeCol();

}

function Drawing(){
  
fill(0,0,0,0);
tint(255,255);

noStroke();
rectMode(CENTER);
scale(0.4);

translate(0,0,200);

texture(layer[7]);
rect(0,0,1000,1000);

translate(0,0,180);
texture(layer[6]);
rect(0,0,1000,1000);

translate(0,0,150);
texture(layer[5]);
rect(0,0,1000,1000);

translate(0,0,120);
texture(layer[4]);
rect(0,0,1000,1000);

translate(0,0,60);
texture(layer[2]);
rect(0,0,1000,1000);

translate(0,0,100);
texture(layer[3]);
rect(0,0,1000,1000);

translate(0,0,0);
texture(layer[1]);
rect(0,0,1000,1000);

texture(layer[3]);

//rotateY(HALF_PI);
//translate(500,0,-500);
//rect(0,0,1000,1000);

//translate(0,0,1000);
//rect(0,0,1000,1000);


}

function changeCol(){
  if (on){
  r = 160;
  g = 65;
  b = 200;
} else {
  r = 65;
  g = 160;
  b = 255;
}
}

function mouseClicked(){
  on = !on;
}
