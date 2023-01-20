const minScreenWidth = 200
const minScreenHeight = 200
var screenWidth = 0;
var screenHeight = 0;

function screenResize(){
  screenWidth = (windowWidth < minScreenWidth) ? minScreenWidth : windowWidth;
  screenHeight = (windowHeight < minScreenHeight) ? minScreenHeight : windowHeight;
}

function preload(){
  start_img = loadImage("assets/modern_button/sector12.png");
  start_img2 = loadImage("assets/modern_button/sector114.png");
  
}

function setup() {
  screenResize();
  createCanvas(screenWidth,screenHeight);
  start_button = new ImageButton(start_img,200,200,50,50);
  test_button = new RectButton("green",100,100,50,50);
  textFont("Comic Sans MS")
  noStroke();
}

var screen_status = 'main';
var answer = -1;
var stage = 3;
var ref_color = [];
var mouse = false;
var field = [];

function draw() {
  screenResize();
  resizeCanvas(screenWidth,screenHeight);
  // switch(screen_status){
  //   case 'main' : main_screen(); break;
  //   case 'game' : game_screen(); break;
  //   default : break;
  // }
  if(screen_status == 'main'){
    main_screen()
  }
  else if(screen_status == 'game'){
    game_screen();
  }
}


function main_screen(){
  background('pink');
  fill('black');
  textSize(20);
  
  text("Find a different color",width/2-100,height*0.4);
  start_button.pos(width/2-30,height*0.5);
  start_button.draw();
  if(start_button.click()){
    // field = [];
    // //console.log("asdf");
    // for(var i=0; i<stage+1; i++)field[i]=[]
    // /*for(a in field){
    //   field[a] = new Array(stage+1);
    // }*/
    // ref_color = [random(0,255),random(0,255),random(0,255)];
    // answer = floor(random(0,(stage+1)*(stage+1)));
    // print("answer",answer);
    // real_index = 0
    // for(var i = 0;i<(stage+1);i++){
    //   for(var j = 0;j<(stage+1);j++){
        
    //     t_color = color(
    //       ref_color[0]+80,
    //       ref_color[1]+80,
    //       ref_color[2]+80
    //     );
    //     //print(color(255,255,255))
    //     print(i*20,j*20);
    //     field[i][j] = new RectButton(color(ref_color[0],ref_color[1],ref_color[2]),i*50,j*50,25,25);
    //     print(i,j)
    //     if(real_index++==answer){
    //       print("there is answer")
    //       field[i][j].answer = true;
    //       field[i][j].color = t_color;
    //     }
        
    //   }
    // }
      game_init();
      screen_status = 'game';
  }

}

function game_init(){
  field = [];
    //console.log("asdf");
    for(var i=0; i<stage+1; i++)field[i]=[]
    /*for(a in field){
      field[a] = new Array(stage+1);
    }*/
    ref_color = [random(0,200),random(0,200),random(0,200)];
    answer = floor(random(0,(stage+1)*(stage+1)));
    print("answer",answer);
    real_index = 0
    for(var i = 0;i<(stage+1);i++){
      for(var j = 0;j<(stage+1);j++){
        modify = 120-stage*12
        if(modify <= 0){
          modify = 12
        }
        t_color = color(
          ref_color[0]+modify,
          ref_color[1]+modify,
          ref_color[2]+modify
        );
        //print(color(255,255,255))
        
        field[i][j] = new RectButton(color(ref_color[0],ref_color[1],ref_color[2]),i*(width/(stage+1)),j*(height/(stage+1)),25-stage,25-stage);
        if(real_index++==answer){
          print(i,j );
          print("there is answer");
          field[i][j].answer = true;
          field[i][j].color = t_color;
        }
        
      }
    }
}
function game_screen(){
  // background('green');
  // back_button = new RectButton("yellow",150,150,50,50);
  // fill('white');
  // text("go main",100,90);
  // back_button.draw()
  // if(back_button.click()){
    
  //   screen_status = 'main';
  // }
  background("black");
  for(buttons in field){
    for(button in field[buttons]){
      field[buttons][button].pos(buttons*(width/(stage+1)),button*(height/(stage+1)));
      field[buttons][button].draw();
    }
  }
  for(game_buttons of field){
    for(game_button of game_buttons){
      if(game_button.click()){
        print("a")
        if(game_button.answer){
          print("bbb");
          stage++;
          game_init();
        }
      }
    }
    //console.log(game_button);
  }

}


function mousePressed(){
  //console.log("a");
}