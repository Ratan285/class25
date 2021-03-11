class Log{
    constructor(x,y,height,angle){
       var options = {
            restituion: 0.8,
            friction: 0.3,
            density: 1.0

        }
        //(200,200,50,50)
        //350,360.60.60)
        this.wbox= Bodies.rectangle(x,y,20,height,options);
      

        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.wbox,angle);
        World.add(myWorld,this.wbox);
        


}
display(){
    var pos = this.wbox.position;
    var angle = this.wbox.angle;

    push();
    
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("brown");
    strokeWeight(4);
    stroke("brown");
    rect(0,0,this.width,this.height);

    pop();

}
}

