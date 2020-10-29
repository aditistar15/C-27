class Chain {
    constructor(firstbody,secondbody){
        var options = {
            bodyA : firstbody.body,
            bodyB : secondbody.body,
            stiffness : 0.04,
            length : 200
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
  
    display() {
      strokeWeight (3.0);
     line(this.chain.bodyA.position.x,this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);
    }
  }
  