class Chain {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.04
        }
        this.chain = Constraint.create(options)
        World.add(world, this.chain)
    }
    display() {
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.pointB
        // != not equal to null , that means chain's bodyA is not null
        if(this.chain.bodyA != null){
            line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
        
    }
    fly(){
        //setting chains bodyA as null so that ball is free from chain
        this.chain.bodyA = null;
    }
}
