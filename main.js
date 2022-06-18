function preload(){}

function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(110, 250);
video=createCapture(VIDEO);
video.hide();
tint_color="";

}
function draw(){
    image(video, 0, 0, 640, 480);
    rect(30, 10, 55, 55);
    rect(30, 400, 55, 55);
    rect(550, 400, 55, 55);
    rect(550, 10, 55, 55);
    
}
