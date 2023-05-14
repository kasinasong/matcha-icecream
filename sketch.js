let grabbed = [
  false,
  false,
  false,
  false,
  false,
  false,
  false
];
let n=0;
let x=[];
let y=[];
let mixAni;

function preload(){
arrow1= loadImage('arrow_next.png');
arrow2= loadImage('arrow_back.png');
eggbowl = loadImage('eggbowl.png');
yolks = loadImage('yolks.png');
matcha= loadImage('matcha.png');
matchacup= loadImage('matchacup.png');
cream= loadImage('Cream.png');
creamcup= loadImage('CreamCup.png');
sugarshaker= loadImage('SugarShaker.png');
sugar= loadImage('sugar.png');
milk= loadImage('Milk.png');
milkcarton= loadImage('MilkCarton.png');
salt= loadImage('Salt.png');
salttsp= loadImage('SaltTsp.png');
title1= loadImage('Title.png');
text1= loadImage('text1.png');
cone= loadImage('cone.png');
ingredientlist = loadImage('IngredientList.png');
finalrecipe= loadImage('final_recipe.png');
batter = loadImage('batter.png');
fridge = loadImage('fridge.png');
splash = loadImage('splash.png');
floor = loadImage('floor.png');
churn_text=loadImage('churn_text.png');

  
mixAni= loadAnimation('mix_2.png','mix_3.png','mix_4.png','mix_5.png','mix_6.png','mix_7.png','mix_8.png','mix_9.png');
	mixAni.frameDelay = 20;
    mixAni.noLoop();
  
churnAni= loadAnimation('churn_1.png','churn_2.png','churn_3.png','churn_4.png');
  churnAni.frameDelay = 20;
 // churnAni.noLoop();

windowAni=
  loadAnimation('window_1.png','window_2.png','window_3.png','window_4.png','window_5.png','window_6.png');
  windowAni.frameDelay = 20;
  
  icecreamAni=
    loadAnimation('icecream_1.png','icecream_2.png','icecream_3.png','icecream_4.png','icecream_5.png','icecream_6.png');
  icecreamAni.frameDelay = 20;
  
}
function setup() {
  createCanvas(900, 600);
  imageMode=CENTER;
  screen=n


  
//ingredients' initial positions
//eggs
  x[0]= 80;
  y[0]= 60;
//matcha
  x[1]=670;
  y[1]=30;
//sugar
  x[2]=110;
  y[2]=315;
//milk
  x[3]=720;
  y[3]=450;
//cream
  x[4]=750;
  y[4]=200;
//salt
  x[5]=160;
  y[5]=440;
//batter
  x[6]=120;
  y[6]=200;

}

function draw(){
  background(255,241,200)
  imageMode=CENTER;
  image(arrow1,330,530,100,50);
  image(arrow2,470,530,100,50);

  
  if(mouseX > 470 && mouseX < 470+100 && mouseY > 530 && mouseY < 530+50){
    push();
    fill(255,241,200);
    noStroke();
    rect(470,530,120,70);
    image(arrow2, 465,525,110,60);
    pop();}
  
  if(mouseX > 330 && mouseX < 330+100 && mouseY > 530 && mouseY < 530+50){
    push();
    fill(255,241,200);
    noStroke();
    rect(330,530,120,70);
    image(arrow1, 325,525,110,60)
    pop();}
  
  if(screen ==0){
	title()
  }else if(screen == 1){
  	recipe()
  }else if(screen ==2){
    mix()
  }else if(screen==3){
    refrigerate()
  }else if(screen==4){
    churn()
  }else if(screen==5){
    icecream()
  }

  //icecream cursor
  image(cone,mouseX,mouseY);
 

}

function title(){
  imageMode=CENTER;
  image(title1,width/3,height/3,400,200);


}

function recipe(){
  image(ingredientlist,100,30,300,500)
  image(finalrecipe,450,-10,380,580)
   textAlign(CENTER);

}

function refrigerate(){
  image(fridge,400,-15,400,700);
  image(floor,0,480,900,20);
  image(batter,x[6],y[6],150,130)

  text('*drag the batter into the fridge and leave it overnight *',300,60)

if (x[6]>450){animation(windowAni,250,250,0.1,0.1,0.1);}

}

function churn(){
  animation(churnAni,330,250,0.2,0.2,0.2);
  image(churn_text,530,200,300,70)
}

function mix(){
  textAlign(CENTER);
  text('*drag and drop ingredients here*',width/2,380)
  push();
  noFill();
  strokeWeight(2);
  ellipse(width/2,height/2,400,400)
  pop();
  imageMode=CENTER;
  image(text1,width/3,280,300,50);
  image(eggbowl,50,50,200,150);
  image(yolks,x[0],y[0],140,100)
  
  image(matchacup,650,60,200,150);
  image(matcha,x[1],y[1],120,100);
  
  image(sugarshaker,100,250,110,150);
  image(sugar,x[2],y[2],80,80);
 
  image(milk,x[3],y[3],90,90);
  image(milkcarton,700,400,120,150);
  
  image(creamcup,750,250,130,120);
  image(cream,x[4],y[4],120,120);
  
  image(salttsp,145,430,130,130);
  image(salt,x[5],y[5],40,40);

  
if ((x[0] > 250) && (x[0] < 650) && (y[0] > 100) && (y[0] < 500) && (x[1] > 250) && (x[1] < 650) && (y[1] > 100) && (y[1] < 500) && (x[2] > 250) && (x[2] < 650) && (y[2] > 100) && (y[2] < 500) && (x[3] > 250) && (x[3] < 650) && (y[3] > 100) && (y[3] < 500) && (x[4] > 250) && (x[4] < 650) && (y[4] > 100) && (y[4] < 500) && (x[5] > 250) && (x[5] < 650) && (y[5] > 100) && (y[5] < 500)){
  animation(mixAni,495,330,1.5,1.5,1.5);}
}

function icecream(){
  animation(icecreamAni,450,300,0.15,0.15,0.15);}


function mousePressed(){
  
if( n<5 && mouseX > 470 && mouseX < 470+100 && mouseY > 530 && mouseY < 530+50){n=n+1; screen=n
  
 }else if(n>0 && mouseX > 330 && mouseX < 330+100 && mouseY > 530 && mouseY < 530+50){n=n-1; screen=n                                                                         
                                                                                                                                                                
                                                                                        
}else if (screen==2 && (mouseX > x[0]) && (mouseX < x[0] + 200) && (mouseY > y[0]) && (mouseY < y[0]+150)){
    grabbed[0]=true;
    
  }else if (screen==2 && (mouseX > x[1]) && (mouseX < x[1] + 120) && (mouseY > y[1]) && (mouseY < y[1]+100)){
    grabbed[1]=true;
    
  }else if (screen==2 && (mouseX > x[2]) && (mouseX < x[2] + 80) && (mouseY > y[2]) && (mouseY < y[2]+80)){
    grabbed[2]=true;
    
  }else if (screen==2 && (mouseX > x[3]) && (mouseX < x[3] + 120) && (mouseY > y[3]) && (mouseY < y[3]+100)){
    grabbed[3]=true;
    
  }else if (screen==2 && (mouseX > x[4]) && (mouseX < x[4] + 120) && (mouseY > y[4]) && (mouseY < y[4]+150)){
    grabbed[4]=true;
    
  }else if (screen==2 && (mouseX > x[5]) && (mouseX < x[5] + 40) && (mouseY > y[5]) && (mouseY < y[5]+40)){
    grabbed[5]=true;
  }else if (screen==3 && (mouseX > x[6]) && (mouseX < x[6]+150) && (mouseY > y[6]) && (mouseY < y[6]+170)){
    grabbed[6]=true;            }
}

function mouseReleased(){
  grabbed[0]=false;
  grabbed[1]=false;
  grabbed[2]=false;
  grabbed[3]=false;
  grabbed[4]=false;
  grabbed[5]=false;
  grabbed[6]=false;
}

function mouseDragged(){
  if (grabbed[0]){
    x[0]=mouseX;
    y[0]=mouseY;
  }else if (grabbed[1]){
    x[1]=mouseX;
    y[1]=mouseY;
  }else if (grabbed[2]){
    x[2]=mouseX;
    y[2]=mouseY;
  }else if (grabbed[3]){
    x[3]=mouseX;
    y[3]=mouseY;
  }else if (grabbed[4]){
    x[4]=mouseX;
    y[4]=mouseY;
  }else if (grabbed[5]){
    x[5]=mouseX;
    y[5]=mouseY;
  }else if (grabbed[6]){
    x[6]=mouseX;
    y[6]=mouseY;
    
  }
}
  
  
