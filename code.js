var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

createEdgeSprites();
// creating the player Sofia
var Sofia = createSprite(50, 50, 20, 20);
// creating the maze walls (wall1 - wall2)
var wall1 = createSprite(120,23,10,150); 
var wall2 = createSprite(230,0,10,300);
var wall3 = createSprite(281,60,100,10);
var wall4 = createSprite(280,365,10,50);
var wall5 = createSprite(190,140,80,10);
var wall6 = createSprite(340,300,100,10);
var wall7 = createSprite(265,265,100,10);
var wall8 = createSprite(170,270,10,100);
var wall9 = createSprite(110,180,100,10);
var wall10 = createSprite(3,90,100,10);
var wall11 = createSprite(20,140,10,100);
var wall12 = createSprite(3,195,100,10);
var wall13 = createSprite(42,306,50,10);
var wall14 = createSprite(26,350,50,10);
var wall15 = createSprite(95,350,10,100);
var wall16 = createSprite(215,310,10,100);
var wall17 = createSprite(270,160,10,100);
var wall18 = createSprite(315,160,10,150);
var wall19 = createSprite(360,160,10,100);
//create cup
var cup = createSprite(350,350,50,50);
cup.shapeColor="yellow"
Sofia.shapeColor="blue"



  
function resetSofia()
{
  Sofia.bounceOff(edges);
  Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
  Sofia.bounceOff(cup);
}

function checkwin()
{
  if ( Sofia.isTouching(cup))  
{
  textSize(40);
  stroke("red");
  text("You Win", 200,200);
  }
}
function draw() {
  //setting the background color to pink
  background("pink");
  resetSofia()
  if (keyDown("up")) {
   
    Sofia.y = Sofia.y - 5
  } 
  if (keyDown("down")) {
   
    Sofia.y = Sofia.y+5;
  }
   ;
  if (keyDown("left")) {
     
      Sofia.x = Sofia.x - 5;
    }
  if (keyDown("right")) {
     
     Sofia.x = Sofia.x+5;
    } 
drawSprites();
checkwin();
}














// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
