status="";
input="";
function setup() {
    canvas=createCanvas(480, 380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function start() {
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}
function draw() {
    image(video, 0, 0, 380, 380);
    if(status != "") {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
        for(i = 0; i< object.length; i++) {
            document.getElementById("status").innerHTML="Status: Objects Detected";
            document.getElementById("number_of_objects").innerHTML="Number of objects detected:" + objects.length;
            fill(r,g,b);
            percent=floor(object[i].confidence * 100);
            text(object[i].label + "" + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}