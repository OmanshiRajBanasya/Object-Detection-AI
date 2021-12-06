img = "";

function preload() {
    img = loadImage('kitchen.png');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Storage", 92, 250);
    noFill();
    stroke("#FF0000");
    rect(89, 240, 200, 170);

    rect(389, 200, 140, 200);
    text("Cupboard", 400, 220);
}

function back() {
    window.location = "index.html";
}