var zBereich

var kreise = new Array();
function zFarbe() { var fw = color(random(255), random(255), random(255)); return fw; }
function zDicke() { var zd = random(5); return zd; }
function zDurchmesser() { var zdm = random(10, 60); return zdm; }
function zXKoord() { var zx = random(width); return zx; }
function zYKoord() { var zy = random(height); return zy; }

function setup() {
  zBereich = createCanvas(windowWidth, windowHeight);
  zBereich.position(0, 0);
  for (var i = 0; i < 200; i++) { 
    kreise[i] = {
      fuellfarbe: zFarbe(), 
      linienfarbe: zFarbe(), 
      dicke: zDicke(), 
      durchmesser: zDurchmesser(), 
      xkoord: zXKoord(), 
      ykoord: zYKoord()
    }
  }  
}

var i = 0;

function draw() {
  if (i > kreise.length) {
    i = 0 
  }
  if (frameCount%5 == 0) {
    stroke(kreise[i].linienfarbe);
    strokeWeight(kreise[i].dicke);
    fill(kreise[i].fuellfarbe);
    ellipse(kreise[i].xkoord, kreise[i].ykoord, kreise[i].durchmesser, kreise[i].durchmesser);     
    i++;
  }
}