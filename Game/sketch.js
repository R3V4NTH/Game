const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var bg;

var player, invisiblePlayer;
var enemy1, enemy2, enemy3 ,enemy4;
var enemy1Img, enemy2Img, enemy3Img ,enemy4Img;
var platform1, platform2, platform3, platform4;
var platform1Img, platform2Img, platform3Img, platform4Img;

var pregame, maingame;

var EnemyAttacksGroup, PlayerAttacksGroup;

gameState = "PreGame";

function preload() {
    bg = loadImage("Sky_bg.jpg");
    enemy1Img = loadImage("Flame guy.png");
    platform1Img = loadImage("image_3.png");

}

function setup(){
    var canvas = createCanvas(1920,1080);
    engine = Engine.create();
    world = engine.world;
    platform1 = new Platform(400, 910,platform1Img);
    platform2 = new Platform(1200, 785);
    platform3 = new Platform(1690, 520);
    platform4 = new Platform(960, 270);
    
    player = new Player(250, 880, 500);

    enemy1 = new Enemies(515, 865, 50, 70, 1000,1,1,1,1,enemy1Img);
    enemy2 = new Enemies(1315, 735, 50, 80, 2000);
    enemy3 = new Enemies(1805, 510-95/2, 80, 95, 3000);
    enemy4 = new Enemies(1075, 200, 100, 120,4000);

//    pregame = new PreGame();
    maingame = new MainGame();

}

function draw(){
    background(bg);
    engine.world.gravity.y = 1;
    maingame.play();

    
 /**    if(gameState === "PreGame"){
        pregame.display();
        blur = createSprite(displayWidth/2, displayHeight/2);
        blur.addImage("blur",blurImg);
    }
    
    if(gameState === "MainGame"){
        maingame.play();
    }
*/


    platform1.display();
    platform2.display();
    platform3.display();
    platform4.display();
    player.display();
    enemy1.display();
    enemy2.display();
    enemy3.display();
    enemy4.display();
//    blur.display();
 
}


// gameStates = PreGame, lvl1, lvl2, lvl3, lvl4, betLvl, endgame, MainGame 