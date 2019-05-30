let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d")
cnv.width = 1200
cnv.height = 800

let mouseX, mouseY;
let mouseinput = true;
let ballmove = true;
let cir = {
    x: 600,
    y: 400,
}
let cirmovevalue = {
    x: 5,
    y: 5,
}
let p1 = {
    x: 100,
    y: 275,
    moveY: 0,
    up: false,
    down: false,
}
let p2 = {
    x: 1070,
    y: 275,
    moveY: 0,
    up: false,
    down: false,
}
let color = {
    h: 0,
    s: 100,
    l: 100,
}
let score = {
    L: 0,
    R: 0,
}
let test = 0

document.addEventListener("mousemove", mousemovehandler);
function mousemovehandler() {
    if (mouseinput) {
    let cnvrect = cnv.getBoundingClientRect();
    mouseX = event.x - cnvrect.x;
    mouseY = event.y - cnvrect.y;
    }
}

requestAnimationFrame(loop);
function loop() {

    ctx.fillStyle = "Black";
    ctx.fillRect(0, 0, cnv.width, cnv.height)

    //score
    ctx.font = "100px arial";
    ctx.fillStyle = "White";
    ctx.fillText( score.L + "|" + score.R, 532, 100 )

    

    ctx.beginPath();
    //ctx.fillStyle = "hsl(" + color.h + ", 100%, 50%)"
    ctx.arc(cir.x, cir.y, 30, 0, 2 * Math.PI);
    ctx.fill()

    if (ballmove) {
        cir.x = cir.x + cirmovevalue.x;
        cir.y = cir.y + cirmovevalue.y;
        
        
       if (cir.x <= 30||cir.x >= 1170 ||
            cir.x == p1.x + 45 && cir.y > p1.y && cir.y < p1.y + 250 && cirmovevalue.x == -5||
            cir.x == p2.x - 30  && cir.y > p2.y && cir.y < p2.y + 250 && cirmovevalue.x == 5) {
            
            cirmovevalue.x = -cirmovevalue.x;
            

            //change color each bounce
            color.h = color.h + 30;
           
       
        } if (cir.y <= 30||cir.y >= 770) {
             
        cirmovevalue.y = -cirmovevalue.y;
        

        //change color each bounce
        color.h = color.h + 30;
               
        }
    
    }
    

//Players

ctx.fillStyle = "White"
ctx.fillRect(p1.x, p1.y, 15, 250)
ctx.fillRect(p2.x, p2.y, 15, 250)

//win condition
if (cir.x == 30) {
    LeftWin()
} if (cir.x == 1170) {
    RightWin()
}

function LeftWin() {
    score.R++
}

function RightWin() {
    score.L++
}


//movement





p1.y = p1.y + p1.moveY;   
if(p1.up == true && p1.y > 0) {
        p1.moveY = -10;
} else if (p1.y < 550) {
        p1.moveY = 0;
}
 
p1.y = p1.y + p1.moveY;   
if(p1.down == true && p1.y < 550) {
        p1.moveY = 10;
} else {
        p1.moveY = 0;
}

p2.y = p2.y + p2.moveY;   
if(p2.up == true && p2.y > 0) {
        p2.moveY = -10;
} else {
        p2.moveY = 0;
}
 
p2.y = p2.y + p2.moveY;   
if(p2.down == true && p2.y < 550) {
        p2.moveY = 10;
} else {
        p2.moveY = 0;
}
    



requestAnimationFrame(loop)
}

document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);

function keydown(event) {
   
    if (event.keyCode == 87) {
        p1.up = true
        
    } if (event.keyCode == 83) {
        p1.down = true
        
    } if (event.keyCode == 38) {
        p2.up = true
        
    } if (event.keyCode == 40) {
        p2.down = true
        
    }
}

function keyup(event) {
    if (event.keyCode == 87) {
        p1.up = false
        
    } if (event.keyCode == 83) {
        p1.down = false
        
    } if (event.keyCode == 38) {
        p2.up = false
        
    } if (event.keyCode == 40) {
        p2.down = false
        
    }
    
}
