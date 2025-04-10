let img;

function preload() {
    img = loadImage('assets/puppy.jfif');
}

function setup() {
    createCanvas(600, 600);
    imageMode(CENTER);
}

function draw() {
    background(220);
    image(img, mouseX, mouseY);
}