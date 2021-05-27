class Lab{
    constructor(){
        this.scientist = loadImage("person.png")
       // this.base = createSprite(400,200,800,400)
        this.people = createSprite(200,200,50,100)

    }
    display(){
        this.people.x = 100;
        this.people.y = 200;
        
        this.people.addImage(this.scientist)
    // people.shapeColor = "red"
        textSize(17)
        stroke("green")
        textFont("Comic Sans Ms")
        fill("black")
        text("OK now i have created the world's first size shrinking formula,   uhh uhh why am i coughing.", 10, 320)
        stroke("orange")
        text("DIES*", 20,350)
        text("press'l'", 100,350)
    }

    update(state){
        gameState = state;
    }
    remove(){
        this.people.destroy();
    }

}
