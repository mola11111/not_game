class Button{
    constructor(x,y,width = 50 ,height = 50){
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }

    click(){
      if(mouseIsPressed && ((mouseX>=this.x && mouseX<=this.x+this.width) && (mouseY>this.y && mouseY<=this.y+this.height))){
        return true;
      }
      return false;
    }
  }

class ImageButton extends Button{
    constructor(image,x,y,width = 50 ,height = 50){
      super(x,y,width,height);
      this.image = image;
    }
  
    draw(){
      image(this.image,this.x,this.y,this.width,this.height);
    }

    change_image(a){
      this.image = a;
    }
}

class RectButton extends Button {
    constructor(color,x,y,width = 50 ,height = 50){
        super(x,y,width,height);
        this.color = color;
    }

    draw(){
        fill(this.color);
        rect(this.x,this.y,this.width,this.height);
    }

    change_color(a){
        this.color = a; 
    }
}
