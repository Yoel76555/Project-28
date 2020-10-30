class Mango{
 
    constructor(x,y,r){
     var options={
          isStatic:true,
          restitution:0,
          friction:1,
     }
     this.x=x;
     this.y=y;
     this.r=r;
     this.body=Bodies.circle(this.x,this.y,this.r/3,options);
     World.add(world,this.body);
     this.image=loadImage("mango.png");
    }
    display(){
       var mangopos=this.body.position;
       push();
       translate(mangopos.x,mangopos.y);
       rectMode(CENTER);
       strokeWeight(3);
       //fill("red");
       imageMode(CENTER);
       //ellipse(0,0,this.r,this.r);
       image(this.image,0,0,this.r,this.r);
       pop();
      }
    };

