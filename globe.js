
let img;
let positions=[];
let c;

function setup() {
  
  c = createCanvas(500, 500,WEBGL);
  c.position('globe');
  c.style('z-index', '-1');
}

function preload()
{
  img = loadImage('https://i.imgur.com/yCEOVlZ.jpg');
}

function draw() {
  background(0);
  
  
  // earth image
  noStroke();
  texture(img);
  
  
  //earth's rotation
  rotateY(millis() / mouseX*mouseY*.0005);
  
  //earth
  sphere(200);
  
  
}