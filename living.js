img = "";

function preload() {
    img = loadImage('living.png');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Sofa", 92, 250);
    noFill();
    stroke("#FF0000");
    rect(89, 240, 500, 130);

    rect(230, 120, 150, 130);
    text("Painting", 250, 135);
}

function back() {
    window.location = "index.html";
}