class Mango{
    constructor(x,y){
        var options={
            isStatic: true,
            
        }
        this.image = loadImage("mango.png");
        
        this.body= Bodies.circle(x,y,30,options)
        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        
        pop();
        
    }
}