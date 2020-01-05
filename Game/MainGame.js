class MainGame {
    constructor(){
  
    }
   
    start(){
        //if(gameState === MainGame){
            //player = new Player();

        //}
        //pregame = new PreGame ();
        //form.display();
    }
  
    play(){
     // pregame.hide();
     if(keyIsDown(UP_ARROW)){
        invisiblePlayer.setVelocity(0,-12);
    }
    }
  
    end(){
      console.log("Game Ended");
    }
}