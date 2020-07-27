/* link do video: https://www.youtube.com/watch?v=_s1FttOes-4&t=3s */



var tela= 1;
var largura1=130;
var largura2=200;
var largura3=150;
var altura=50;
var xMenu=20;
var yMenu1=55;
var yMenu2=115;
var yMenu3=175;
var xsair=230;
var ysair=460;
var largura4=50;
var altura2=50;
let img;
let anonimo;
var v;
var v2;
var v3;
var r;
var p=[];
var resposta, r2, r7, r4, r5, r6;
var rp;
var vida=3;
var executor=1;
var suaresposta=0;
var pontos=0;
var movi=0;
var time=0, timeS=50;
var nivel=1;


function preload() {
  img = loadImage('euformal.jpg');
  anonimo = loadImage('anonimo.jpg');
  frameRate(30);
}

function setup() {

  createCanvas(500, 500);

}


function draw() {

textStyle(NORMAL);
  
if(tela==1){
  
  background(300, 300, 300);
  textAlign(CENTER);
  textSize(26);
    

  if(mouseX>xMenu && mouseX<largura1+xMenu && mouseY>yMenu1 && mouseY<altura+yMenu1){
 
    stroke(200, 200, 200);
    fill(255, 255, 0)
    rect(xMenu, yMenu1, largura1, altura, 15);
    if (mouseIsPressed){
      tela =2
      vida=3;
      pontos=0;
      time=0;
      timeS=50;
      suaresposta=0;
      executor=1;
    }
  
  }
    
 
    fill(200, 0, 0);
    noStroke();
    text("iniciar", 80, 90);
    

  if(mouseX>xMenu && mouseX<largura2+xMenu && mouseY>yMenu2 && mouseY<altura+yMenu2){
  
	stroke(200);
    fill(255, 255, 0);
   	rect(xMenu, yMenu2, largura2, altura, 15);
   if (mouseIsPressed){
     tela=3
   }
	 }

  
   fill(200, 0, 0);
   noStroke();
   text("informações", 115, 150);
  
  
  if(mouseX>xMenu && mouseX<largura3+xMenu && mouseY>yMenu3 && mouseY<altura+yMenu3){
  
	stroke(200);
    fill(255, 255, 0);
   	rect(xMenu, yMenu3, largura3, altura, 15);
   if (mouseIsPressed){
     tela=4
   }
	 }

  
   fill(200, 0, 0);
   noStroke();
   text("créditos", 92, 210);
  
  
  fill(0, 0, 0);
  noStroke();
  textSize(11);
  text("MENU INICIAL:", 40, 20);
  text("DATA:", 20, 480);
  text("VERSÃO: 0. 0. 1", 450, 480);
} 
  else if (tela==2){
    createCanvas(500, 500);
    textStyle(ITALIC);
    
    background(255, 255, 0);
    rect(10, 10, 480, 480);
    
    
   fill(20);
   noStroke();
   textSize(); 
   text("pontos:", 75, 100);
   text("chances:", 80, 80);
   text("tempo:", 230, 80);
   text("nivel:", 225, 100);
   fill(0, 0, 0);
   noStroke();
   textSize(15);
   text("voltar", 250, 490);
    if(mouseX>xsair && mouseX<largura4+xsair && mouseY>ysair && mouseY<altura2+ysair){
   if (mouseIsPressed){
     tela=1
     vidas=3;
   }
     
}

    /*codigo do jogo*/
    

    fill(0, 0, 0);
if(executor==2){    
    if(mouseX>230 && mouseX<270 && mouseY>180 && mouseY<220){
   
      if (mouseIsPressed){
     v=((Math.random()*10)+1).toFixed(0);
   }  
 }
}  

       textSize(34);
       text(v, 245, 180);
       text(v2, 65, 180);
       fill(255, 255, 0);
       rect(20, 190, 90, 30, 30);
    
       noStroke();
       textSize(20);
       fill(0, 0, 0);
       text("iniciar", 65, 210);
    
    fill(0, 0, 0);
if(executor==1){    
    if(mouseX>50 && mouseX<90 && mouseY>180 && mouseY<220){
   if (mouseIsPressed){
     v2=Math.floor((Math.random() * 256)).toFixed(0);
     executor=2;
   }  
 }
}      
       
       fill(255, 255, 0);
       rect(200, 190, 90, 30, 30); 
    
       noStroke();
       textSize(20);
       fill(0, 0, 0);
       text("iniciar", 245, 210);    
       
    
    fill(0, 0, 0);
if(executor==2){    
    if(mouseX>230 && mouseX<270 && mouseY>180 && mouseY<220){
   if (mouseIsPressed){
       v3=(Math.random()*10).toFixed(0);
   }  
 }
}  
    parseFloat(v2);
    parseFloat(v);
  if(v3==1){
    text("+", 155, 180);
    resposta=(v2+v);
    r2=(v2*v).toFixed(2);
    r4=(v2-v2).toFixed(2);
    r5=(v-v2).toFixed(2);
    r6=(v2/2).toFixed(2);
    r7=3;
  }
  if(v3==2){
    text("-", 155, 180);
    resposta=(v2-v).toFixed(2);
    r2=(v2*v).toFixed(2);
    r4=(v2-v2).toFixed(2);
    r5=(v-v2).toFixed(2);
    r6=(v2/2).toFixed(2);
    r7=3;
  }
    if(v3>2 && v3<7){
    text("x", 155, 180);
      resposta=(v2*v).toFixed(2);
      r2=(v2-v).toFixed(2);
      r4=(v2-v2).toFixed(2);
      r5=(v-v2).toFixed(2);
      r6=(v2/2).toFixed(2);
      r7=7;
  }
    if(v3>=7 && v3<=10){
    text("/", 155, 180);
      resposta=(v2/v).toFixed(2);
      r2=(v2*v).toFixed(2);
      r4=(v2-v2).toFixed(2);
      r5=(v-v2).toFixed(2);
      r6=(v2/2).toFixed(2);
      r7=400;
  }
    
       noStroke();
       textSize(34);
       text("=", 320, 180); 
       fill(255, 255, 0);
    
       fill(0);
       noStroke();
       textSize(40);
       text("?", 380, 180);
    
    /*Resposta*/
fill(0, 0, 0);
if(executor==2){    
if(mouseX>230 && mouseX<270 && mouseY>180 && mouseY<220){
  if (mouseIsPressed){
    rp=(Math.random()*5).toFixed(0);
    executor=0;
    suaresposta=1;
  }
}
}  
if(rp==0){
  p[0]=resposta;  p[1]=r2; p[2]=r7; p[3]=r4; p[4]=r5; p[5]=r6;
     }
if(rp==1){
  p[0]=r2;  p[1]=resposta; p[2]=r7; p[3]=r5; p[4]=r4; p[5]=r6;
}
if(rp==2){
  p[0]=resposta;  p[1]=r6; p[2]=r2; p[3]=r4; p[4]=r5; p[5]=r7;
}
if(rp==3){
  p[0]=r6;  p[1]=r7; p[2]=r4; p[3]=r5; p[4]=r2; p[5]=resposta;
}
if(rp==4){
  p[0]=r7;  p[1]=r6; p[2]=r2; p[3]=resposta; p[4]=r4; p[5]=r5;
}
if(rp==5){
  p[0]=r5;  p[1]=r7; p[2]=resposta; p[3]=r6; p[4]=r2; p[5]=r4;
}
    

      fill(0, 0, 0);
      noStroke();
      textSize(15);
      text(p[0], 80, 310);
      text(p[1], 180, 310);
      text(p[2], 280, 310);
      text(p[3], 80, 360);
      text(p[4], 180, 360);
      text(p[5], 280, 360);
      text(vida, 120, 80);
      text(pontos, 120, 100);
      text(timeS, 265, 80);
      text(nivel, 265, 100);
//reposta:

if(suaresposta==1){    
if(mouseX>60 && mouseX<100 && mouseY>290 && mouseY<320){
  fill(200, 0, 0);
  rect(60, 290, 60, 30);
  if (mouseIsPressed){
   if(p[0]===resposta){
      vida=vida;
      executor=1;
      suaresposta=0;
      pontos=pontos+10;
      timeS=50;  
      time=0;
    }
    else{
      vida=vida-1;
      executor=1;
      suaresposta=0;
      timeS=50;  
      time=0;
    }
  }
}   
if(mouseX>150 && mouseX<190 && mouseY>290 && mouseY<320){
  fill(230, 0, 0);
  rect(150, 290, 60, 30);
  if (mouseIsPressed){
    if(p[1]===resposta){
      vida=vida;
      executor=1;
      suaresposta=0;
      pontos=pontos+10;
      timeS=50;  
      time=0;
    }
    else{
      vida=vida-1;
      executor=1;
      suaresposta=0;
      timeS=50;  
      time=0;
    }
  }
}
if(mouseX>250 && mouseX<290 && mouseY>290 && mouseY<320){
  fill(200, 0, 0);
  rect(250, 290, 60, 30);
  if (mouseIsPressed){
    if(p[2]===resposta){
      vida=vida;
      executor=1;
      suaresposta=0;
      pontos=pontos+10;
      timeS=50;  
      time=0;
    }
    else{
      vida=vida-1;
      executor=1;
      suaresposta=0;
      timeS=50;  
      time=0;
    }
  }
}
if(mouseX>60 && mouseX<100 && mouseY>340 && mouseY<370){
  fill(200, 0, 0);
  rect(60, 340, 60, 30);
  if (mouseIsPressed){
   if(p[3]===resposta){
      vida=vida;
      executor=1;
      suaresposta=0;
      pontos=pontos+10;
     timeS=50;  
     time=0;
    }
    else{
      vida=vida-1;
      executor=1;
      suaresposta=0;
      timeS=50;  
      time=0;
    }
  }
}   
if(mouseX>150 && mouseX<190 && mouseY>340 && mouseY<370){
  fill(230, 0, 0);
  rect(150, 340, 60, 30);
  if (mouseIsPressed){
    if(p[4]===resposta){
      vida=vida;
      executor=1;
      suaresposta=0;
      pontos=pontos+10;
      timeS=50;  
      time=0;
    }
    else{
      vida=vida-1;
      executor=1
      suaresposta=0;
      timeS=50;  
      time=0;
    }
  }
}
if(mouseX>250 && mouseX<290 && mouseY>340 && mouseY<370){
  fill(200, 0, 0);
  rect(250, 340, 60, 30);
  if (mouseIsPressed){
    if(p[5]===resposta){
      vida=vida;
      executor=1;
      suaresposta=0;
      pontos=pontos+10;
      timeS=50;  
      time=0;
    }
    else{
      vida=vida-1;
      executor=1;
      suaresposta=0;
      timeS=50;  
      time=0;
    }
  }
}    
 
  
  if(vida==0){
  tela=5;
     }
  
  
  time=time+1;
  timeS=50-(parseInt(time/30));
  
  if(timeS==0){
   vida=vida-1;
   timeS=50;  
   time=0; 
   suaresposta=0;
   executor=1; 
  }
  
  if(pontos==40*nivel){
   nivel=nivel+1;
  }  
  

  } 
}
  else if(tela==5){
    createCanvas(500, 500)
    background(255, 255, 0);
    
    fill(230, 230, 0)
    rect(10, 10, 480, 480);
  
    fill(20);
    textStyle(BOLDITALIC);
    noStroke();
    textSize(50);
    text("Game Over", movi, 250);
    movi=movi+2;
    
    if(movi==650){
    movi=-150;  
    }  
    
    fill(20);
    textStyle(NORMAL);
    noStroke();
    textSize(25);
    text("Menu Inicial", 125, 300);
    text("Jogar"+"\n"+"Novamente", 315, 300);
    
  
     if(mouseX>70 && mouseX<195 && mouseY>280 && mouseY<310){
  if (mouseIsPressed){
      tela=1;
      
    }
     }       
    
     if(mouseX>240 && mouseX<385 && mouseY>280 && mouseY<330){
  if (mouseIsPressed){
      tela=2;
      vida=3;
      pontos=0;
    }   
     }
  
}  
  
if(tela==3){
    createCanvas(500, 500)
    background(255, 255, 0);
    
    fill(230, 230, 0)
    rect(10, 30, 480, 85);
    
    fill(20);
    noStroke();
    textSize(24);
    text("*INFORMACÕES*", 250, 20);
    textSize(17);
    text(" 4ºAno Ensino Fudamenal: ", 110, 45);
    text("   Matemática: (EF04MA05) Utilizar as"+"\n"+"propriedades das operações para"+"\n"+"desenvolver estratégias de cálculo", 138, 65)
    
    fill(230, 230, 0)
    rect(10, 160, 480, 290);
    
    fill(20);
    noStroke();
    textSize(24);
    text("*RESUMO DO GAME*", 250, 150);
    textSize(17);
    text("o jogo vai sortear 2 numeros aleatorios e uma operação"+"\n"+" matematica, logo apos você tera um limite de tempo para infomar"+"\n"+" a resposta. a cada nivel, o tempo vai ficando mais curto,"+"\n"+" e você tera que cada vez mais, desenvolver estratigias"+"\n"+" para fazer o calculo mais rápido.", 250, 180);
    

    fill(0, 0, 0);
   	text("voltar", 250, 480);
    if(mouseX>xsair && mouseX<largura4+xsair && mouseY>ysair && mouseY<altura2+ysair){
   if (mouseIsPressed){
     tela=1
   }
}
     
  
  }
  
  
if(tela==4){
  createCanvas(500, 500);
  
  background(255, 255, 0);
  
  fill(230, 230, 0)
  rect(10, 10, 480, 145);
  
  fill(230, 230, 0)
  rect(10, 250, 480, 135);
  
  fill(20);
  textSize(17);
  text("Maycon Guilherme Azevedo De Lima: ",320, 80);
  text("Programador",320, 100)
  text("Indefinido: ",305, 325);
  text("educador",300, 305)
  
  image(img , 10, 10);
  image(anonimo , 10, 250);
  
  fill(0, 0, 0);
   	text("voltar", 250, 480);
    if(mouseX>xsair && mouseX<largura4+xsair && mouseY>ysair && mouseY<altura2+ysair){
   if (mouseIsPressed){
     tela=1
   }
      
}

  
}
}
 