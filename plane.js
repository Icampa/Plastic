let newModel; 
let c;
  
function setup() { 
  c = createCanvas(windowWidth, windowHeight, WEBGL); 
  c.parent('plane');
  noLoop(); 
  loadModel('plane.obj', true, modelLoaded, loadFailed); 
} 
  
function draw() { 
  background(255); 
  push();
  stroke(0, 0, 255);
  strokeWeight(.5);
  rotateZ(frameCount * 0.01); 
  rotateX(frameCount * 0.01); 
  model(newModel); 
  pop();
  
  loop(); 
} 
  
function modelLoaded(modelObj) { 
  newModel = modelObj; 
  loop(); 
} 
  
function loadFailed(error) { 
  print("The model failed to load", error); 
} 