function preload(){
}
function setup(){
    canvas= createCanvas(500, 400);
    canvas.position(450, 300);
    video= createCapture(VIDEO);
    video.hide();
    tint_color="";
}    
function draw(){
    image(video, 0, 0, 600, 500);
    circle(30, 30, 55);
    circle(470, 30, 55);
    rect(1, 350, 55, 55);
    rect(445, 350, 55, 55);
    
}
function take_snapshot(){
    save('captured_picture.png');
}
function filter_tint(){
    tint_color= document.getElementById("color_name").value;

}