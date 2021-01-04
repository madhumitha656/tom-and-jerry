var jerry,tom,backGround

function preload() {
    tomImage =loadAnimation("tomOne.png","tomTwo.png","tomThree.png","tomFour.png");
    jerryImage=loadAnimation("jerryOne.png","jerryTwo.png","jerryThree.png","jerryFour.png");
    backGroundImage=loadImage(garden.png);
}

function setup(){
    createCanvas(1000,800);

    tom=createSprite(500,400,50,60)
    

    jerry=createSprite(500,400,50,60)
    jerry.addAnimation("jerryImage",jerryImage)
}

function draw() {

    background.addImage(backGroundImage);
    if(tom.X-jerry.X<(tom.width-jerry.width/2)){
        jerry.velocityX=0
    }
   tom.addAnimation("tomlastImage",tomImg3)
   tom.changeAnimation("tomlastImage")

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keycode===lEFT_ARROW){
    tom.velocityX=-5
    tom.addAnimation("tomrunning",tomImg2)
    tom.changeAnimation("tomrunning")
}


}
