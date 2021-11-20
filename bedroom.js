img="";
function preload(){
    img=loadImage("hotel-room.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    
    
     fill("gold");
    text("Lamp",400,100);
    noFill();
    stroke("green");
    rect(400,100,100,200);
       
           fill("gold");
    text("Bedside Table",300,275);
    noFill();
    stroke("green");
    rect(350,275,150,125);
              fill("gold");
    text("Bed",5,175);
    noFill();
    stroke("green");
    rect(5,175,350,400);
            fill("gold");
    text("Wall",5,5);
    noFill();
    stroke("purple");
    rect(5,5,640,165);

   
}