class Game {
    constructor() {
        this.bg = createSprite(400, 200, 0, 0)
        this.ground = createSprite(400, 400, 900, 10)
        

        this.player = createSprite(30, 280, 20, 60)
      
        this.player.visible = false;
        this.ground.visible = false

        this.heart3 = createSprite(65, 40, 20, 20)
        this.heart3.visible = true;
        

        this.bgimg = loadImage("images.jpg")
        this.bg.addImage(this.bgimg)
        
        

        this.obstaclegroup = new Group();
        this.vaccineGroup = new Group();
        this.sangrp = new Group();

        this.maskImg = loadImage("mask.png")
        this.maskGroup = new Group()
        this.sc = 0
        this.virusImage = loadImage("virus.png")
        this.vaccineImage = loadImage("vaccine img.png")
        this.playerimg = loadImage("run1 (1).png")
        this.sanitizerImg = loadImage("sanitizer.png")
        this.heartimg = loadImage("heart.png")
        this.heart3.addImage(this.heartimg) 
        this.heart3.scale = 0.1
        this.player.setCollider("rectangle", 0, 0, 50, 110)
        this.player.debug = false;

    }

    play(){
      //  this.bg.x = 400
      //  this.bg.y = 200;
      fill("black")
      textFont("Comic Sans Ms")
      textSize(15)
      text("Vaccines Required: 200", 600, 50);
      text("Vaccine Collected: " + this.sc, 600, 100);
      textSize(20)
      text("Dodge the virus.Collect masks,sanitizers and vaccines ",60,90)

       this.player.visible = true;
        this.player.addImage(this.playerimg)
        this.player.scale = 0.7755
       
        this.player.collide(this.ground)
      this.ground.visible = false;
       
        
        this.ground.velocityX = -2;
         if (this.ground.x < 0) {
            this.ground.x = this.ground.width / 2;
        } 

        if (keyDown("space") && this.player.y >=350) {
            this.player.velocityY = -13;
        }

        this.player.velocityY = this.player.velocityY + 0.8
      this.obstacle();
      this.vaccine();
      this.touch();
    }



    obstacle() {
        if (frameCount % 100 === 0) {
            var obstacle = createSprite(700, 365, 50, 40);
            obstacle.velocityX = -4
            obstacle.debug = false;
            obstacle.x = Math.round(random(400, 800));

            obstacle.addImage(this.virusImage)
            obstacle.scale = 0.08
            obstacle.depth = this.player.depth
            this.obstaclegroup.add(obstacle)
            obstacle.lifetime = 400
            obstacle.setCollider("circle", 0, 0, 140)
        }
    }
    vaccine() {
        if (frameCount % 200 === 0) {
            var vaccine = createSprite(800, 350, 20, 50)
            vaccine.velocityX = -2
            //vaccine.x = Math.round(random(800,400))

            vaccine.addImage(this.vaccineImage)
            vaccine.scale = 0.3
            vaccine.depth = this.player.depth
            vaccine.setCollider("rectangle", 100, 0, 60, 120)

            this.vaccineGroup.add(vaccine)
        }
    }

    touch() {
        for (var i = 0; i < this.obstaclegroup.length; i++) {
            if (this.player.isTouching(this.obstaclegroup.get(i))) {
                this.heart3.destroy()
                this.ground.velocityX = 0
                this.obstaclegroup.setVelocityXEach(0)
                this.vaccineGroup.setVelocityXEach(0)
                this.maskGroup.setVelocityXEach(0)
                this.sangrp.setVelocityXEach(0) 
                this.player.velocityY = 0;
                textFont("Comic Sans Ms")
                textSize(20)
                text("You failed at saving the world. Try again", 300,300)
                

                /*  if(keyDown("space") && this.player.y >= 300) {
                    this.player.velocityY = 0;
                  }
                this.player.velocityY = this.player.velocityY + 0 */

            }
        }

        for (var o = 0; o < this.sangrp.length; o++) {
            if (this.player.isTouching(this.sangrp.get(o))) {
                this.sc = this.sc + 10
                this.sangrp.get(o).destroy()

            }
        }

        for (var s = 0; s < this.vaccineGroup.length; s++) {
            if (this.player.isTouching(this.vaccineGroup.get(s))) {
                this.sc = this.sc + 1
                this.vaccineGroup.get(s).destroy()
            }
        }

        for (var z = 0; z < this.maskGroup.length; z++) {
            if (this.player.isTouching(this.maskGroup.get(z))) {
                this.sc = this.sc + 5
                this.maskGroup.get(z).destroy()
            }
        }




    }

    sanitizers() {
        if (frameCount % 250 === 0) {
            var sanitizer = createSprite(800, 350, 20, 10)
            sanitizer.velocityX = -2
            sanitizer.addImage(this.sanitizerImg)
            sanitizer.scale = 0.08
            this.sangrp.add(sanitizer)

        }
    }

    mask() {
        if (frameCount % 300 === 0) {
            var mask = createSprite(800, 350, 20, 10)
            mask.velocityX = -2
            mask.addImage(this.maskImg)
            mask.scale = 0.2
            mask.setCollider("rectangle", 0, 0, 250, 200)
            this.maskGroup.add(mask)

        }
    }

    gameWin() {
        if (this.sc === 200 || this.sc === 210 || this.sc === 205 || this.sc === 209 || this.sc === 204 || this.sc === 201 || this.sc === 202 || this.sc === 203 || this.sc === 206 || this.sc === 207 || this.sc === 208 || this.sc === 209 || this.sc === 211 || this.sc === 212 || this.sc === 213 || this.sc === 214 || this.sc === 215 || this.sc === 216 || this.sc === 217 || this.sc === 218 || this.sc === 219 || this.sc === 220) {
                this.heart3.destroy()
                this.ground.velocityX = 0
                this.obstaclegroup.setVelocityXEach(0)
                this.vaccineGroup.setVelocityXEach(0)
                this.maskGroup.setVelocityXEach(0)
                this.sangrp.setVelocityXEach(0)
                this.player.velocityY = 0;  
                this.obstaclegroup.destroyEach()
            textFont("Comic Sans Ms")
            textSize(20)
            text("You won!You have saved the world ", 400, 200)

        }
    }
    



}