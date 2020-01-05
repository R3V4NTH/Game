class Player{
    constructor(x, y, health, atk1,atk2,atk3,atk4) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        invisiblePlayer = createSprite(x,y);
        invisiblePlayer.visible = false;

        this.body = Bodies.rectangle(invisiblePlayer.position.x,invisiblePlayer.position.y, 20, 40, options);
        this.width = 20;
        this.height = 40;
        World.add(world, this.body);

      }
      
      display(){
        rectMode(CENTER);
        fill (0, 255, 0);
        rect (invisiblePlayer.position.x,invisiblePlayer.position.y,this.width,this.height);
    }
}
