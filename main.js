canvas = new fabric.Canvas("myCanvas");

plX = 10;
plY = 10;

blkW = 30;
blkH = 30;

var plObj = "";
var blObj = "";

function plUpdate(){
   fabric.Image.fromURL("player.png", function(Img){
       plObj = Img;
       plObj.scaleToWidth(150);
       plObj.scaleToHeight(150);

       plObj.set({
           top : plY, left : plX 
       });
       canvas.add(plObj);
   }) 
}

function newBloImg(getImg){
    fabric.Image.fromURL(getImg, function(Img){
        blObj = Img;
        blObj.scaleToWidth(blkW);
        blObj.scaleToHeight(blkH);
 
        blObj.set({
            top : plY, left : plX 
        });
        canvas.add(blObj);
    }) 
 }

 window.addEventListener("keydown", mykeydown);

 function mykeydown(e){
     keyP = e.keyCode;
     console.log(keyP);

     if(e.shiftKey == true && keyP == '80'){
         console.log("shift and p pressed together");
         blkW = blkW + 10;
         blkH = blkH + 10;
         document.getElementById("cWidth").innerHTML = blkW;
         document.getElementById("cHeight").innerHTML = blkH;
     }

     if(e.shiftKey == true && keyP == '77'){
        console.log("shift and m pressed together");
        blkW = blkW - 10;
        blkH = blkH - 10;
        document.getElementById("cWidth").innerHTML = blkW;
        document.getElementById("cHeight").innerHTML = blkH;
    }

    if(keyP == '37'){
        left();
        console.log("left");
    }

    if(keyP == '38'){
        up();
        console.log("up");
    }

    if(keyP == '39'){
        right();
        console.log("right");
    }

    if(keyP == '40'){
        down();
        console.log("down");
    }

    if(keyP == '87'){
        newBloIm("wall.jpg");
        console.log("w");
    }

    if(keyP == '71'){
        newBloIm("ground.png");
        console.log("g");
    }

    if(keyP == '76'){
        newBloIm("light_green.png");
        console.log("l");
    }

    if(keyP == '84'){
        newBloIm("trunk.jpg");
        console.log("t");
    }

    if(keyP == '82'){
        newBloIm("roof.jpg");
        console.log("r");
    }

    if(keyP == '89'){
        newBloIm("yellow_wall.png");
        console.log("y");
    }

    if(keyP == '68'){
        newBloIm("dark_green.png");
        console.log("d");
    }

    if(keyP == '85'){
        newBloIm("unique.png");
        console.log("u");
    }

    if(keyP == '67'){
        newBloIm("cloud.jpg");
        console.log("c");
    }

 }

 function up(){
     if(plY > 0){
         plY = plY - blkH;
         console.log("block height = " + blkH );
         console.log("up arrow is pressed. x = " + plX + " , y = " + plY);
         canvas.remove(plObj);
         plUpdate();
     }
 }

 function down(){
     if(plY <= 450){
         plY = plY + blkH;
         console.log("block height = " + blkH);
         console.log("down arrow is pressed. x = " + plX + " , y = " + plY);
         canvas.remove(plObj);
         plUpdate();
     } 
 }

 function left(){
     if(plX > 0){
         plX = plX - blkW;
         console.log("block width = " + blkW);
         console.log("left arrow is pressed. x = " + plX + " , y = " + plY);
         canvas.remove(plObj);
         plUpdate();
     }
 }

 function right(){
    if(plX < 850){
        plX = plX + blkW;
        console.log("block width = " + blkW);
        console.log("left arrow is pressed. x = " + plX + " , y = " + plY);
        canvas.remove(plObj);
        plUpdate();
    }
}

 