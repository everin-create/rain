class Drops{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,50);
        this.radius=50
        World.add(world, this.body);
}
display(){
   if(this.body.position.y>height){
Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
   }
}
ellipseMode()
ellipse(pos.x,pos.y,this.radius);
}