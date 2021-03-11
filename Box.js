    class Box{
        constructor(x,y,width,height){
           var options = {
                restituion: 0.8,
                friction: 0.3,
                density: 1.0

            }
            //(200,200,50,50)
            //350,360.60.60)
            this.wbox= Bodies.rectangle(x,y,width,height,options);
            World.add(myWorld,this.wbox);

            this.width = width;
            this.height = height;


    }
    display(){
        var pos = this.wbox.position;
        var angle = this.wbox.angle;

        push();
        
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0,0,this.width,this.height);

        pop();

    }
}

