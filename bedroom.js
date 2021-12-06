img = "";

function preload() {
    img = loadImage('bedroom.png');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bed", 92, 250);
    noFill();
    stroke("#FF0000");
    rect(89, 240, 460, 180);

    rect(293, 50, 200, 300);
    text("Cupboard", 300, 70);
}

function back() {
    window.location = "index.html";
}