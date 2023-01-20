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
  re_img = loadImage("assets/modern_button/sector62.png");
  start_img3 = loadImage("assets/modern_button/sector78.png")

  
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
var stage = 1;
var ref_color = [];
var mouse = false;
var field = [];
const maxTime = 5;
var time = 0;
var tempTime = 0;

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
  else if(screen_status == 'end'){
    end_screen();
  }
}

function end_screen(){
  background('pink');
  textSize(20);
  fill("black");
  text((stage -1 ==0) ? ":(" : "result : Stage "+(stage-1) ,width*0.4,height*0.1);
  
  re = new ImageButton(re_img,width*0.3,height*0.3,50,50);
  home = new ImageButton(start_img3,width*0.6,height*0.3,50,50);
  re.draw();
  home.draw();
  if(re.click()){
    screen_status = 'main';
    
  }
  
  if(home.click()){
    stage = 1;
    time = maxTime;
    game_init();
    screen_status = 'game'
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
      time = maxTime;
      game_init();
      screen_status = 'game';
  }

}

function game_init(){
  if(time>=maxTime){
    time = maxTime;
  }
  field = [];
    //console.log("asdf");
    for(var i=0; i<stage+1; i++)field[i]=[]
    /*for(a in field){
      field[a] = new Array(stage+1);
    }*/
    ref_color = [random(0,255-(200-stage*10)),random(0,255-(200-stage*10)),random(0,255-(200-stage*10))];
    answer = floor(random(0,(stage+1)*(stage+1)));
    print("answer",answer);
    real_index = 0
    for(var i = 0;i<(stage+1);i++){
      for(var j = 0;j<(stage+1);j++){
        
        //print(color(255,255,255))
        
        field[i][j] = new RectButton(color(ref_color[0],ref_color[1],ref_color[2]),i*(width/(stage+1)),j*(height/(stage+1)),30-stage,30-stage);
        if(real_index++==answer){
          modify = 200-stage*10;
          if(modify < 40){
            modify = 40
          }
          t_color = color(
            ref_color[0]+modify,
            ref_color[1]+modify,
            ref_color[2]+modify
          );
          print(i,j);
          print("there is answer");
          field[i][j].answer = true;
          field[i][j].color = t_color;
        }
        
      }
    }
}
function game_screen(){
  
  print(time);
  // background('green');
  // back_button = new RectButton("yellow",150,150,50,50);
  // fill('white');
  // text("go main",100,90);
  // back_button.draw()
  // if(back_button.click()){
    
  //   screen_status = 'main';
  // }
  tempTime += deltaTime;
  if(time<=0){
    screen_status = 'end';
  }
  if(tempTime >= 100){
    print(tempTime+"ms");
    tempTime =0;
    time-=0.1;
  }
  background("black");
  
  
  for(buttons in field){
    for(button in field[buttons]){
      field[buttons][button].pos(buttons*(width*0.8/(stage+1)),button*(height/(stage+1)));
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
          time += 3;
          game_init();
        }
      }
    }
    //console.log(game_button);
  }
  fill('red');
  rect(width*0.9,0,width*0.1,(time/maxTime)*height);
  fill('white');
  textSize(15);
  text(floor(time)+1,width*0.85,20);

}


function mousePressed(){
  //console.log("a");
}