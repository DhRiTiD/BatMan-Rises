class Umbrella {
    constructor(x,y){
        var option = {
            isStatic:true
        }

        this.image = loadImage("walking_8.png")
        this.batman = loadImage("batman.png");
        this.umbrella = Bodies.circle(x,y,50,option);
        this.radius = 50;
        World.add(world,this.umbrella);
    }
    display(){
        var pos = this.umbrella.position
        imageMode(CENTER);
        if(frameCount >= 200){
            image(this.batman, pos.x,pos.y+70,300,300);   
            textAlign(CENTER);
            textSize(18); 
            text("I AM BATMAN!!", 200, 320);
        }else{
        image(this.image,pos.x,pos.y+70,300,300);
            
        textAlign(CENTER);
        textSize(18); 
        text("<|Let the Bats know who I am!", 220, 320);
        }
    }
}