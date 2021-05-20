class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    display(){
        var a= this.sling.bodyA.position;
        var b = this.pointB
        line(a.x,a.y,b.x,b.y)
        }
    }
    
