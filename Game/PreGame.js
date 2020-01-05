/**class PreGame{

constructor() {
    this.input = createInput("Enter your Username");
    this.buttonC = createButton('Confirm');
    this.buttonS = createButton('Start');
    this.buttonB = createButton('Back');
    this.greeting = createElement('h2');
    this.title = createElement('h2');

  }
  
  hide(){
    this.greeting.hide();
    this.buttonC.hide();
    this.input.hide();
    this.title.hide();
    this.buttonS.hide();
    this.buttonB.hide();
  }

  display(){
    this.title.html("Work in progress");
    this.title.position(displayWidth/2, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.buttonC.position(displayWidth/2 + 30, displayHeight/2);

    this.buttonC.mousePressed(()=>{
      this.input.hide();
      this.buttonC.hide();
      player.name = this.input.value();
      
      this.greeting.html("Welcome, Player " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      this.buttonS.position(displayWidth/2 - 55, displayHeight/4 + 50);
      this.buttonB.position(displayWidth/2 + 85, displayHeight/4 + 50);

    });

    this.buttonB.mousePressed(()=>{
      this.buttonS.hide();
      this.buttonB.hide();
      this.greeting.hide();
      this.input.display();
      this.buttonC.display();
      this.input.value() = null;
    });

/**    this.buttonS.mousePressed(()=>{
      maingame.play();
    });*/

//}
//}
