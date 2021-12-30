noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
difference=0;
function setup() {
video = createCapture(VIDEO);
video.size(550,500);

canvas = createCanvas(550,500);
canvas.position(560,100);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results){
 if (results.length > 0) {
 console.log(results);
 noseX=results[0].pose.nose.x;
 noseY=results[0].pose.nose.y;
 
 leftWristX=results[0].pose.leftWrist.x;
 rightWristX=results[0].pose.rightWrist.x;
 difference=floor(leftWristX-rightWristX);
 
 }
}

function modelLoaded(){
console.log('PoseNet Is Initialized');    
}

function draw() {
background('#ebd234');
document.getElementById("square_site").innerHTML="Width And Height of a Square will be = "+difference+"px";
fill('#f90093');
stroke('#f90093');
square(noseX,noseY,difference);

}
