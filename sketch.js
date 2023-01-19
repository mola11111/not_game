

function preload(){
  start_img = loadImage("assets/modern_button/sector12.png");
  start_img2 = loadImage("assets/modern_button/sector114.png");
  
}



function setup() {
  createCanvas(300,300);
  start_button = new ImageButton(start_img,200,200,50,50);
  test_button = new RectButton("green",100,100,50,50);
  noStroke();
}


function draw() {
  start_button.draw();
  test_button.draw();
  if(start_button.click()){
    console.log("push!");
    start_button.change_image(start_img2);
  }
  else{
    start_button.change_image(start_img); 
  }

  if(test_button.click()){
    console.log("test");
    test_button.change_color('red');
  }
  else{
    test_button.change_color('green');
  }

}

