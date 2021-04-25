class launcher{
    constructor(bodyA,pointB){
        var constraintoptions={
            bodyA:bodyA,
            pointB: pointB,
            stiffness:0.04,//0-1
            length:10,
    
        }
    this.launcher=Constraint.create(constraintoptions)
    this.pointB = pointB
    World.add(world,this.launcher)
    }
    
    display(){
        if (this.launcher.bodyA){
            var pointA=this.launcher.bodyA.position
            var pointB=this.pointB
            
            line(pointA.x,pointA.y,pointB.x, pointB.y)
        }
        
    }
    attach(bodyA){
        this.launcher.bodyA=bodyA
    }
    
    fly(){
       this.launcher.bodyA = null;
    }
    
    }