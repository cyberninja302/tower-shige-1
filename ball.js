class Ball{
    constructor(x,y,radius){
        var options ={
            restituition: 1.0,
            density: 0.8,
            fricition: 0.8
        }
        //create the properties for x y and radius 
        this.x = x;
        this.y = y;
        this.radius = radius;
        //write the code to create a circular body as a property
        this.body= Bodies.circle(x,y,radius,options);
        //add the body to the world
        World.add(world,this.body);   
           
    }
    //display function will create the ball's circle using ellipse command with ellipse mode as RADIUS
    
    display(){
        var pos=this.body.position ;
        //var angle= this.body.angle;

        push()
        //translate(pos.x,pos.y)
        //rotate(angle);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y,this.radius, this.radius);
        pop()    
    }
}