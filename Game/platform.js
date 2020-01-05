class Platform {
    constructor(x, y,img) {
        this.body = Bodies.rectangle(x, y, 400, 20);
        this.width = 400;
        this.height = 20;
        this.image = img;
        World.add(world, this.body);
      }

      display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y);
      }
      
    /**   display(){
        rectMode(CENTER);
        fill (0, 0, 255);
        rect (this.body.position.x,this.body.position.y,this.width,this.height);
      }
      */
}
