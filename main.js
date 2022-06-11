var img = "";
var Status = "";
var jar = [];



function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(635, 415);
    video.hide();
}


function preload() {
    img = loadImage("studyroom.jpg");
}

function draw() {
    image(video, 0, 0, 635, 415);

    if (Status != "") {
        obde.detect(video, gotResult);
        r = random(255);
        g = random(255);
        b = random(255);
        for (i = 0; i < jar.length; i++) {
            document.getElementById("status").innerHTML = "Status: Object Detected";
            fill(r, g, b);
            percent = floor(jar[i].confidence*100);
            text(jar[i].label + " " + percent + "% ", jar[i].x, jar[i].y);
            noFill();
            stroke(r, g, b);
            rect(jar[i].x, jar[i].y, jar[i].width, jar[i].height);
            textSize(23);
            document.getElementById("oby").innerHTML = "Objects Detected are: " + object.length;
        }
    }
}


function modelLoaded() {
    console.log("FLERSHHA");
    Status = true;
}

function gotResult(error, result) {
    if(error) {
        console.log(error);
    }

    else {
        console.log(result);
        jar = result;
    }
}

function sky() {
    obde = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}