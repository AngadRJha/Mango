class Stone{
    constructor(x,y){
        var options={
            friction:1
        }
        
        this.body = Bodies.rectangle(x,y,20,20,options)
        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        var pos = this.body.position
        rect(pos.x,pos.y,20,20)
    }
}