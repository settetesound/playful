let bubbles = [];
var haiku = []; 
var slider;
var button;


function preload() {
  haiku.push(loadSound("sounds/haiku01.mp3"));
  haiku.push(loadSound("sounds/haiku02.mp3"));
  haiku.push(loadSound("sounds/haiku03.mp3"));
  haiku.push(loadSound("sounds/haiku04.mp3"));
  haiku.push(loadSound("sounds/haiku05.mp3"));
  haiku.push(loadSound("sounds/haiku06.mp3"));
  haiku.push(loadSound("sounds/haiku07.mp3"));
  haiku.push(loadSound("sounds/haiku08.mp3"));
  haiku.push(loadSound("sounds/haiku09.mp3"));
  haiku.push(loadSound("sounds/haiku10.mp3"));
  haiku.push(loadSound("sounds/haiku11.mp3"));
}

function setup() {
  createCanvas(windowWidth-40, windowHeight-40);
  background(255); 

  slider = createSlider(0, 1, 1, 0.01);
  
  for(let i = 0; i < 11; i++) {
  let x = random(width);
  let y = random(height);
  let r = random(10,75);

  let b = new Bubble(x, y, r);
  bubbles.push(b);
  }
}


function mousePressed()  {
    
  for (let i = 0; i < bubbles.length; i++) {
    let randomHaiku = haiku[i];
    bubbles[i].clicked(mouseX, mouseY, randomHaiku);  

  }
}



function draw() {
 
  fill(0);
  text("click on the shapes to activate the sound", 10, 15);
  text("Have fun!", 10, 30);
  outputVolume(slider.value());
  
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    
    bubbles[i].show();
  }
   
}

///////////////////////////////////////////////////////////////////////////
class Bubble {
  constructor(x,y,r) {
    this.x = x;
    this.y = y; 
    this.r = r; 
    this.red = 70;
    this.green = 70;
    this.blue = 70; 
    
  }
  
  clicked(px, py, haikusound){
    let d = dist(px, py, this.x, this.y);
    if (d < this.r){ 

      if(!haikusound.isPlaying()) {
        haikusound.setVolume(random(0.1, 0.8));
        haikusound.loop();
        

        this.red = random(255);
        this.green = random(255);
        this.blue = random(255);
      } else {
        haikusound.pause();
        this.red = 70;
        this.green = 70;
        this.blue = 70; 
  }
      console.log("Clicked on bubble");
      //console.log(haikusound);
    }
  }
  
  move() {
    this.x = this.x + random(-3,3);
    this.y = this.y + random(-3,3);
  }
  
  show(){
    stroke(255);
    strokeWeight(2);
    fill(this.red, this.green, this.blue, 50);
    ellipse(this.x, this.y, this.r*2);
  }
}
