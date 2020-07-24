
//sketch one 
let img;
let positions=[];
let canvas;
let bags = [];
let randoimg;



function setup() {
  
  canvas = createCanvas(windowWidth, 5500,WEBGL); 
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  frameRate(15);

 //orbit for loop
  for (let i=0; i<100; i++)
  {
    positions.push([random(-250,230), random(-250,230),random(-8,12) ])
  }

}

function preload(){

let bag1 = loadImage('https://i.imgur.com/D4UD8ZR.png');
let bag2 = loadImage('https://i.imgur.com/dbRPZPs.png');
let bag3 = loadImage('https://i.imgur.com/AWIK21Z.png');
let bag4 = loadImage('https://i.imgur.com/8VF57rW.png');
let bag5 = loadImage('https://i.imgur.com/Byt5s4R.png');
let bag6 = loadImage('https://i.imgur.com/pr9v70C.png');
let bag7 = loadImage('https://i.imgur.com/MWY2YJi.png');
bags = [bag1, bag2, bag3, bag4, bag5, bag6, bag7];

}


function draw() {
  
  translate(-width/2, -height/2);
  let randoimg = random(bags);
  

  // bag painter
  push();
  translate(mouseX, mouseY);
  noStroke();
  texture(randoimg);
  rotateZ(millis() / 1000);
  plane(150);
  pop();


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}