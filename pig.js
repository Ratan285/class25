class Pig{
    constructor(x,y){
       var options = {
            restituion: 0.8,
            friction: 0.3,
            density: 1.0

        }
        //(200,200,50,50)
        //350,360.60.60)
        this.wbox= Bodies.rectangle(x,y,50,50,options);
        World.add(myWorld,this.wbox);

        this.width = 50;
        this.height = 50;


}
display(){
    var pos = this.wbox.position;
    var angle = this.wbox.angle;

    push();
    
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("green");
    strokeWeight(4);
    stroke("black");
    fill(255);
    rect(0,0,this.width,this.height);

    pop();

}
}

