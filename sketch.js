let xoff=0.0;
let yoff=1;

let xoff2=2;
let yoff2=3;

let xoff3=4;
let yoff3=5;

let c;
let rg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(windowWidth, windowHeight);
  background(0);
  c=1.1;
}

function draw() {
  background(0, 5);
  noFill();
  
  strokeWeight(2);
  
  xoff =xoff+0.003;
  yoff =yoff+0.003;
  
  stroke(255);
 // for(let i=0; i<=width; i++){
  let ny = map(noise(xoff),0,1,0,height*c);
  let nx = map(noise(yoff),0,1,0,  width*c);
    //stroke(255, 0 , 0);
    point(nx,ny);
   // stroke(255, 127, 0);
    point(nx+5,ny+5);
    //stroke(255, 255, 0);
    point(nx+10,ny+10);
    //stroke(0, 255, 0);
    point(nx+15,ny+15);
    //stroke(0, 0, 255);
    point(nx+20,ny+20);
    //stroke(148, 0, 211);
    point(nx+25,ny+25);
  
 // }
 
 xoff2 +=0.003;
  yoff2 +=0.003;

  let ny2 = map(noise(xoff2),0,1,0,height*c);
  let nx2 = map(noise(yoff2),0,1,0,  width*c);
    stroke(255, 0 , 0);
    point(nx2,ny2);
    stroke(255, 127, 0);
    point(nx2+5,ny2+5);
    stroke(255, 255, 0);
    point(nx2+10,ny2+10);
    stroke(0, 255, 0);
    point(nx2+15,ny2+15);
    stroke(0, 0, 255);
    point(nx2+20,ny2+20);
    stroke(148, 0, 211);
    point(nx2+25,ny2+25);
 
  stroke(255);
   xoff3 +=0.003;
  yoff3 +=0.003;
 
  let ny3 = map(noise(xoff3),0,1,0,height*c);
  let nx3 = map(noise(yoff3),0,1,0,  width*c);
    point(nx3,ny3);
    point(nx3+5,ny3+5);
    point(nx3+10,ny3+10);
    point(nx3+15,ny3+15);
    point(nx3+20,ny3+20);
    point(nx3+25,ny3+25);
 /* 
*/

}
