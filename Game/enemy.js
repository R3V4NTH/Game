class Enemies{
    constructor(x,y, width, height,health,atk1,atk2,atk3,atk4,img) {
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = img;
      }

      attacks() {
        var attack1 = createSprite();
        attack1.setAnimation();

        var attack2 = createSprite();
        attack2.setAnimation();

        var attack3 = createSprite();
        attack3.setAnimation();

        var attack4 = createSprite();
        attack4.setAnimation();

        if(World.frameCount % 300 === 0) {
          var attack = createSprite(400,365,10,40);
          
          //generate random obstacles
          var rand = randomNumber(1,4);
          attack = attack + rand;
          
          //assign scale and lifetime to the obstacle           
          attack.scale = 0.5;
          attack.lifetime = 70;
          //add each obstacle to the group
          EnemyAttacksGroup.add(attack);
        }
      }
      
      display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y,150,200);
    }
    
}
