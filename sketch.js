var song;
var button;
var sliderRate;
var sliderPan; 
var fft;

var volhistory = [];
var w;

let img;



function preload(){
   img = loadImage('poemwhite.png');
  
  songA = loadSound("a.mp3", loaded);
  songD = loadSound("d.mp3", loaded);
  songE = loadSound("e.mp3", loaded);
  songH = loadSound("h.mp3", loaded);
  songI = loadSound("i.mp3", loaded);
  songL = loadSound("l.mp3", loaded);
  songN = loadSound("n.mp3", loaded);
  songO = loadSound("o.mp3", loaded);
  songR = loadSound("r.mp3", loaded);
  songS = loadSound("s.mp3", loaded);
  songT = loadSound("t.mp3", loaded);
  
  songOriginal = loadSound("original.mp3", loaded);

  
  sliderRate = createSlider(0,3,1,0.01);
  
  //button
  buttonA = createButton("A"); 
  buttonA.mousePressed(togglePlayingA);
  
  buttonD = createButton("D");
  buttonD.mousePressed(togglePlayingD);
  
   buttonE = createButton("E");
  buttonE.mousePressed(togglePlayingE);
  
   buttonH = createButton("H");
  buttonH.mousePressed(togglePlayingH);
  
   buttonI = createButton("I");
  buttonI.mousePressed(togglePlayingI);
  
   buttonL = createButton("L");
  buttonL.mousePressed(togglePlayingL);
  
   buttonN = createButton("N");
  buttonN.mousePressed(togglePlayingN);
  
   buttonO = createButton("O");
  buttonO.mousePressed(togglePlayingO);
  
     buttonR = createButton("R");
  buttonR.mousePressed(togglePlayingR);
  
     buttonS = createButton("S");
  buttonS.mousePressed(togglePlayingS);
  
     buttonT = createButton("T");
  buttonT.mousePressed(togglePlayingT);
  
  buttonOriginal = createButton("How Do I love Thee?");
  buttonOriginal.mousePressed(togglePlayingOriginal);
}


function loaded(){
  console.log("loaded");
}

function togglePlayingOriginal(){
  if( !songOriginal.isPlaying()) {
    songOriginal.play();
    buttonOriginal.html("stop");
  } else {
    songOriginal.stop();
    buttonOriginal.html("How Do I love Thee?");
  }
}

function togglePlayingA(){
  if( !songA.isPlaying()) {
    songA.play();
    buttonA.html("stop");
  } else {
    songA.stop();
    buttonA.html("A");
  }
}

function togglePlayingD(){
  if( !songD.isPlaying()) {
    songD.play();
    buttonD.html("stop");
  } else {
    songD.pause();
    buttonD.html("D");
  }
}

function togglePlayingE(){
  if( !songE.isPlaying()) {
    songE.play();
    buttonE.html("stop");
  } else {
    songE.stop();
    buttonE.html("E");
  }
}

function togglePlayingH(){
  if( !songH.isPlaying()) {
    songH.play();
    buttonH.html("stop");
  } else {
    songH.stop();
    buttonH.html("H");
  }
}

function togglePlayingI(){
  if( !songI.isPlaying()) {
    songI.play();
    buttonI.html("stop");
  } else {
    songI.stop();
    buttonI.html("I");
  }
}

function togglePlayingL(){
  if( !songL.isPlaying()) {
    songL.play();
    buttonL.html("stop");
  } else {
    songL.stop();
    buttonL.html("L");
  }
}

function togglePlayingN(){
  if( !songN.isPlaying()) {
    songN.play();
    buttonN.html("stop");
  } else {
    songN.stop();
    buttonN.html("N");
  }
}

function togglePlayingO(){
  if( !songO.isPlaying()) {
    songO.play();
    buttonO.html("stop");
  } else {
    songO.stop();
    buttonO.html("O");
  }
}


function togglePlayingR(){
  if( !songR.isPlaying()) {
    songR.play();
    buttonR.html("stop");
  } else {
    songR.stop();
    buttonR.html("R");
  }
}


function togglePlayingS(){
  if( !songS.isPlaying()) {
    songS.play();
    buttonS.html("stop");
  } else {
    songS.stop();
    buttonS.html("S");
  }
}

function togglePlayingT(){
  if( !songT.isPlaying()) {
    songT.play();
    buttonT.html("stop");
  } else {
    songT.stop();
    buttonT.html("T");
  }
}



function setup() {
  angleMode(DEGREES);
  fft = new p5.FFT(0,512);
  
  
  createCanvas(windowWidth,windowHeight);
   background(47, 108, 150);
  
  buttonOriginal.position(windowWidth-120,150);
  buttonOriginal.size(120,40);
  buttonOriginal.style('font-size','10px');
  
  buttonA.position(windowWidth-120,200);
  buttonA.size(120,40);
  buttonA.style('font-size','20px');
  
   buttonD.position(windowWidth-120,250);
  buttonD.size(120,40);
  buttonD.style('font-size','20px');
  
     buttonE.position(windowWidth-120,300);
  buttonE.size(120,40);
  buttonE.style('font-size','20px');
  
  
     buttonH.position(windowWidth-120,350);
  buttonH.size(120,40);
  buttonH.style('font-size','20px');
  
  buttonI.position(windowWidth-120,400);
  buttonI.size(120,40);
  buttonI.style('font-size','20px');
  
    buttonL.position(windowWidth-120,450);
  buttonL.size(120,40);
  buttonL.style('font-size','20px');
  
    buttonN.position(windowWidth-120,500);
  buttonN.size(120,40);
  buttonN.style('font-size','20px');
  
    buttonO.position(windowWidth-120,550);
  buttonO.size(120,40);
  buttonO.style('font-size','20px');
  
    buttonR.position(windowWidth-120,600);
  buttonR.size(120,40);
  buttonR.style('font-size','20px');
  
  buttonS.position(windowWidth-120,650);
  buttonS.size(120,40);
  buttonS.style('font-size','20px');
  
  buttonT.position(windowWidth-120,700);
  buttonT.size(120,40);
  buttonT.style('font-size','20px');
  
  sliderRate.position(windowWidth-120,100);
  
  
  w= width/20;
}

function draw() {
  background(13,109,154);
  
  
  var spectrum = fft.analyze();
  console.log(spectrum);
  stroke(255);
  
  for (var i = 0; i< spectrum.length; i++){
    var amp = spectrum[i];
    var y = map(amp, 0, 300, height, 0);
    line (i * w, height, i * w, y); }
  console.log(spectrum.length);
  stroke(255);
    fill(13, 109, 154);
  noStroke();
  rect(50,20,586.5,950);
  image(img, 50, 20,586.5,965);
  

  songOriginal.rate(sliderRate.value());
  

}