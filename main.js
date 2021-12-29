noseX=0;
noseY=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/hjXjRsnD/lips.jpg');
}

function setup(){
canvas=createCanvas(400, 400)
canvas.center()
video=createCapture(VIDEO)
video.size(400, 400)
video.hide()
poseNet=ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses)
}

function gotPoses(results){
if(results.length>0){
console.log(results)
noseX=results[0].pose.nose.x-23;
noseY=results[0].pose.nose.y+25;
console.log("nosex="+noseX)
console.log("nosey="+noseY)}
}

function modelLoaded(){
console.log('model has loaded')
}

function draw(){
image(video, 0, 0, 400, 400)
image(clown_nose, noseX, noseY, 45, 25)
}
function pic(){
save('my_selfie.png')
}
