let c;
let y;
var r1;
var r2;
var col ={
  r: 0,
  g: 0,
  b: 0,
  a: 255
}

let capture;
var vScale = 4; 
let size;
let particles = [];
function setup() {
  c= createCanvas(windowWidth, windowHeight);
  //background(220);
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(width/vScale,height/vScale);
  capture.hide();
  //image(capture, 0, 0, windowWidth, windowHeight);
  angleMode(DEGREES);
  
}

function draw() {
  background(50);
  //image(capture, 0, 0, width, height);
  //filter(POSTERIZE,3);
  //size = random(2,10);
  cVideo();

  textSize(32);
  fill(255, 255, 255,255);
  textAlign(LEFT, BOTTOM);
  rotate(0);
  text(month()+'.'+day()+'.'+year(),10,height-10);
  
  time = millis();
  textSize(r2+(mouseX / mouseY)*30);
  //textAlign(CENTER,CENTER);
  fill(col.r, col.g, col.g,col.a);
  rotate(y);
  text("Happy Mothers' Day", mouseX/2, mouseY);
for (let i = 0; i <5; i++){
  let p = new particle();
  particles.push(p);
  }
  for (let i = particles.length-1; i >=0; i --){
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()){
      //remove this particle
      particles.splice(i,1);
    }
  }
  
}

function mousePressed(){
  r1 = random(height/1.25, 100);
  r2 = random(20, 50);
  
  y = random(1,30);
  col.r = random(0,255);
  col.g = random(0,255);
  col.b = random(0,255);
  col.a = random(100,200);
  //size = random(2,10);
  
  vScale = random(4,6);


}

function keyTyped() {
  if (key === ' ') {
    saveCanvas(c, 'myCanvas', 'jpg');
  }

}

function cVideo(){
      capture.loadPixels();
  for (var y = 0; y < capture.height; y++) {
    for (var x = 0; x < capture.width; x++) {
      var index = (capture.width - x + 1 + (y * capture.width)) * 4;
      var r = col.a+capture.pixels[index + 0];
      var g = capture.pixels[index + 1]-col.g;
      var b = capture.pixels[index + 2]+col.b;


      
      var bright = (r + g + b) / 3;
      var w = map(bright, 0, 255, 0, vScale);
      noStroke();
      fill(r,g,b);
      
      rectMode(CENTER);
      rect(x * vScale, y * vScale, w, w);
    }
  }
}

class particle {
  constructor() {
    this.x = width/2;
    this.y =height;
    this.vx = random(-10,10);
    this.vy = random(-10,-1);
    this.alpha = 255;
    
  }
  
    finished(){
    return this.alpha <0;
  }
  update(){
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 10;
  }
  
  show(){
    noStroke();
    //stroke(255);
    fill(col.r,100,col.b, this.alpha);
    ellipse(this.x, this.y, 16);
  }
  
}