img="";
function preload(){
    img=loadImage("picr.webp");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    
    fill("yellow");
    text("Truck",150,50);
    noFill();
    stroke("pink");
    rect(210,40,150,280);
     fill("gold");
    text("Truck",340,100);
    noFill();
    stroke("green");
    rect(340,100,100,200);
       fill("gold");
    text("Grass",50,275);
    noFill();
    stroke("green");
    rect(20,275,100,50);
           fill("gold");
    text("Grass",550,275);
    noFill();
    stroke("green");
    rect(550,275,100,50);
        text("Road",5,350);
    noFill();
    stroke("green");
    rect(5,350,700,50);
    
   
}