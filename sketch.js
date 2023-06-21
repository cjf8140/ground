
let p1t = 0;
let p1tv = 0;
let p1ta = 0;

const g = 0.3;

const p1l = 200;
let p1x = -1;
let p1y = -1;

let pmx = 0;
let pmy = 0;

let drag = 0;

let pg;

function setup() {
  createCanvas(500, 400);
  pg = createGraphics(width, height);
  pmx = width/2;
  pmy = height/2-100;
  
  p1t = PI/4;
  
  setInterval(function() {
    pg.background(255, 60);
    pg.strokeWeight(10);
    pg.stroke(abs(p1tv * 5000), 200- abs(p1tv * 5000 ), 100);
    pg.point(p1x, p1y);
  }, 50);
}


function draw() {
  background(255);
  image(pg, 0, 0);
  if(drag) {
    p1tv = 0;
    p1ta = 0;
    if(mouseY-pmy > 0) {
      p1t = atan((mouseX-pmx) / (mouseY-pmy));
    }
    else {
      p1t = atan((mouseX-pmx) / (mouseY-pmy)) + PI
    }
  
  }
  p1x = pmx + p1l * sin(p1t);
  p1y = pmy + p1l * cos(p1t);
  
  
  
  
  stroke(0);
  strokeWeight(1);
  line(pmx, pmy, p1x, p1y);
  
  stroke(255, 100, 100);
  strokeWeight(7);
  point(pmx, pmy);
  
  
  stroke(100, 100, 250);
  strokeWeight(20);
  point(p1x, p1y);
  
  p1ta = (- g / p1l) * sin(p1t);
  p1tv+=p1ta;
  p1t+=p1tv;
  
  
 //  console.log("t = %f v = %f, a = %f", p1t/3.14*360, p1tv, p1ta);
}

function mousePressed() {
  if(dist(mouseX, mouseY, p1x, p1y) < 30) {
    drag = 1;
  }
}

function mouseReleased() {
  drag = 0;
}
