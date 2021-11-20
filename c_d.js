img="";
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
    fill("yellow");
    text("Cat",300,75);
    noFill();
    stroke("pink");
    rect(300,60,250,350);
    fill("blue");
    text("Bowl",257,300);
    noFill();
    stroke("green");
    rect(285,315,105,100);
}