var Price;

var bullet;

var edges;

var B1, B2, B3, B4, B5;

var C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, C17, C18, C19, C20, C21, C22, WallGroup;

function preload() {

  PriceRightIMG = loadImage("images/Price's Flashlight equipped Right.jpg");
  PriceLeftIMG = loadImage("images/Price's Flashlight equipped Left.jpg");
  PriceUpIMG = loadImage("images/Price's Flashlight equipped Up.jpg");
  PriceDownIMG = loadImage("images/Price's Flashlight equipped Down.jpg");

  BulletLeftIMG = loadImage("images/pixel-bullet.png");
  BulletRightIMG = loadImage("images/pixel-bullet copy 2.png");
  BulletDownIMG = loadImage("images/pixel-bullet copy 3.png");
  BulletUpIMG = loadImage("images/pixel-bullet copy.png");

  B1img = loadImage("images/Flashlight equipped.png");

  B2img = loadImage("images/Knife equipped.png");

  B3img = loadImage("images/Pistol equipped.png");

  B4img = loadImage("images/AK-47 equipped.png");

  B5img = loadImage("images/SPAS equipped.png");

}

function setup() {
  createCanvas(400,400);

  WallGroup = createGroup();

  edges = createEdgeSprites();

  Price = createSprite(200, 200, 4, 4);
  Price.addImage(PriceRightIMG);
  Price.scale = 0.15;
  Price.debug = true;
  Price.setCollider("circle", 0, 0, 20);

  B1 = createSprite(20, 15, 4, 4);
  B1.addImage(B1img);
  B1.scale = 0.15;

  B2 = createSprite(24, 388, 4, 4);
  B2.addImage(B2img);
  B2.scale = 0.15;

  B3 = createSprite(380, 9, 4, 4);
  B3.addImage(B3img);
  B3.scale = 0.15;

  B4 = createSprite(375, 385, 4, 4);
  B4.addImage(B4img);
  B4.scale = 0.15;

  B5 = createSprite(200, 385, 4, 4);
  B5.addImage(B5img);
  B5.scale = 0.15;

    C1 = createSprite(40, 50, 40, 53);
  C1.shapeColor = "brown";
  C1.debug = true;

    C2 = createSprite(101, 53, 30, 58);
  C2.shapeColor = "brown";
  C2.debug = true;

    C3 = createSprite(40, 136, 40, 79);
  C3.shapeColor = "brown";
  C3.debug = true;

    C4 = createSprite(40, 243, 40, 70);
  C4.shapeColor = "brown";
  C4.debug = true;

    C5 = createSprite(150, 98, 129, 30);
  C5.shapeColor = "brown";
  C5.debug = true;

    C6 = createSprite(137, 160, 154, 30);
  C6.shapeColor = "brown";
  C6.debug = true;

    C7 = createSprite(177, 232, 71, 50);
  C7.shapeColor = "brown";
  C7.debug = true;

    C8 = createSprite(310, 160, 140, 30);
  C8.shapeColor = "brown";
  C8.debug = true;

    C9 = createSprite(125, 258, 67, 102);
  C9.shapeColor = "brown";
  C9.debug = true;

    C10 = createSprite(251, 68, 20, 90);
  C10.shapeColor = "brown";
  C10.debug = true;

    C11 = createSprite(215, 326, 70, 96);
  C11.shapeColor = "brown";
  C11.debug = true;

    C12 = createSprite(18, 33600, 20, 70);
  C12.shapeColor = "brown";
  C12.debug = true;

    C13 = createSprite(200, 39000, 400, 20);
  C13.shapeColor = "brown";
  C13.debug = true;

    C14 = createSprite(175, 43, 79, 40);
  C14.shapeColor = "brown";
  C14.debug = true;

    C15 = createSprite(125, 340, 67, 70);
  C15.shapeColor = "brown";
  C15.debug = true;

    C16 = createSprite(58, 28700, 20, 60);
  C16.shapeColor = "brown";
  C16.debug = true;

    C17 = createSprite(245, 243, 10, 140);
  C17.shapeColor = "brown";
  C17.debug = true;

    C18 = createSprite(40, 340, 40, 70);
  C18.shapeColor = "brown";
  C18.debug = true;

    C19 = createSprite(359, 291, 40, 167);
  C19.shapeColor = "brown";
  C19.debug = true;

    C20 = createSprite(334, 68, 92, 90);
  C20.shapeColor = "brown";
  C20.debug = true;

    C21 = createSprite(295, 291, 40, 167);
  C21.shapeColor = "brown";
  C21.debug = true;

  WallGroup.add(C1);
  WallGroup.add(C2);
  WallGroup.add(C3);
  WallGroup.add(C4);
  WallGroup.add(C5);
  WallGroup.add(C6);
  WallGroup.add(C7);
  WallGroup.add(C8);
  WallGroup.add(C9);
  WallGroup.add(C10);
  WallGroup.add(C11);
  WallGroup.add(C12);
  WallGroup.add(C13);
  WallGroup.add(C14);
  WallGroup.add(C15);
  WallGroup.add(C16);
  WallGroup.add(C17);
  WallGroup.add(C18);
  WallGroup.add(C19);
  WallGroup.add(C20);
  WallGroup.add(C21);

}

function draw() {
  background(0,255,255);  

  Bullet();

  if(keyWentDown(RIGHT_ARROW)) {

    Price.velocityX = 4;
    Price.addImage(PriceRightIMG);
    
  }

  if(keyWentUp(RIGHT_ARROW)) {

    Price.velocityX = 0;
    Price.addImage(PriceRightIMG);

  }

  if(keyWentDown(DOWN_ARROW)) {

    Price.velocityY = 4;
    Price.addImage(PriceDownIMG);

  }

  if(keyWentUp(DOWN_ARROW)) {

    Price.velocityY = 0;
    Price.addImage(PriceDownIMG);

  }

  if(keyWentDown(LEFT_ARROW)) {

    Price.velocityX = -4;
    Price.addImage(PriceLeftIMG);

  }

  if(keyWentUp(LEFT_ARROW)) {

    Price.velocityX = 0;
    Price.addImage(PriceLeftIMG);

  }

  if(keyWentDown(UP_ARROW)) {

    Price.velocityY = -4;
    Price.addImage(PriceUpIMG);

  }

  if(keyWentUp(UP_ARROW)) {

    Price.velocityY = 0;
    Price.addImage(PriceUpIMG);

  }

  Price.bounceOff(WallGroup);
  Price.bounceOff(edges);
  drawSprites();
}

function Bullet() {

  bullet = createSprite(200, 200, 4, 4);
  bullet.addImage(BulletLeftIMG);
  bullet.scale = 0.033;
  bullet.lifetime = 500;

  bullet.x = Price.x;
  bullet.y = Price.y;

  if (keyWentDown ("A")) {

    bullet.velocityX = -4;
    bullet.addImage(BulletLeftIMG);

  }

  if (keyWentUp ("A")) {

    bullet.velocityX = 0;
    bullet.addImage(BulletLeftIMG);

  }

  if (keyWentDown ("D")) {

    bullet.velocityX = 4;
    bullet.addImage(BulletRightIMG);

  }

  if (keyWentUp ("D")) {

    bullet.velocityX = 0;
    bullet.addImage(BulletLeftIMG);

  }

  if (keyWentDown ("S")) {

    bullet.velocityY = 4;
    bullet.addImage(BulletDownIMG);

  }

  if (keyWentDown ("W")) {

    bullet.velocityY = -4;
    bullet.addImage(BulletUpIMG);

  }

}