
status="";
object=[];
function setup() {
    canvas=createCanvas(380, 380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}
function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    object=results;
}
function draw() {
    image(video, 0, 0, 380, 380);
}
function start() {
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}