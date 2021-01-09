class Ground{
    constructor(x,y,width,height){
        var options1={
            isStatic:true
         }
         this.width=width;
         this.height=height;
         this.x=x
         this.y=y
         this.body=Bodies.rectangle(x,y,width,height,options1)
         World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}