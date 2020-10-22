class cha
{
    constructor(BodyA,BodyB)
    {
     var properties={bodyA:BodyA,bodyB:BodyB,stiffness:0.1,length:20}  
     this.chai=constraint.create(properties);
     World .add(world,this.chai);
    }
    display()
    {
       line(this.chai.bodyA.position.x,this.chai.bodyA.position.y,this.chai.bodyB.position.x,this.chai.bodyB.position.y );
    }
}