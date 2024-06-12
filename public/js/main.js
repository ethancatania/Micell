const canvas = document.getElementById('gameCanvas');
const canvasContainer = document.getElementById('gameContainer')
const ctx = canvas.getContext('2d');
let W = canvas.width;
let H = canvas.height;
let redPos = {x: H/6, y: H - H}
let bluePos = {x: H, y: H - H/3}
let hitBoxHeight = 200;
let hitBoxWidth = 100;
let canvasFloor = 600
let canvasCeiling = 0;
let canvasRightSide = 800
let canvasLeftSide = 0;
let velY = 1;
let velX = 1;
let accelY = 0.5;
accelX = 0.5;
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;
let downUp = false;


document.addEventListener('keydown', function(event){
    switch (event.key){
        case 'ArrowLeft':
            leftPressed = true;
            break;
        case "ArrowRight":
            rightPressed = true;
            break;
        case 'ArrowUp':
            upPressed = true;
            break;
        case "ArrowDown":
            downPressed = true; 
            break;
    }
});
document.addEventListener('keyup', function(event){
    switch (event.key){
        case 'ArrowLeft':
            break;
        case "ArrowRight":
            break;
        case 'ArrowUp':
            break;
        case "ArrowDown":
            downUp = true;
            break;
    }
});





function render () {
    ctx.clearRect(0, 0, W, H)
    ctx.strokeStyle = 'black'; 
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, W, H);
    if(redPos.y + hitBoxHeight != canvasFloor){
        if(redPos.y + hitBoxHeight > canvasFloor){
            redPos.y = canvasFloor - hitBoxHeight;
        } else{
            velY += accelY;
            redPos.y += velY;
        }
    } else{
        //if object is on floor level then stop accelerating
        // still be able to jump (by contriolling velocity)
        if(upPressed){
            velY = -15
            redPos.y += velY
            upPressed = false;
        }
    }
    if(redPos.x + hitBoxWidth <= canvasRightSide && redPos.x  >= canvasLeftSide){
        if (leftPressed){
            velX = -5
            redPos.x += velX
            leftPressed = false;
        }
        if (rightPressed){
            velX = 5
            redPos.x += velX
            rightPressed = false;
        }
    } else if (redPos.x + hitBoxWidth >= canvasRightSide){
        if (leftPressed){
            velX = -5
            redPos.x += velX
            leftPressed = false;
        }
    } else if(redPos.x  <= canvasLeftSide){
        if (rightPressed){
            velX = 5
            redPos.x += velX
            rightPressed = false;
        }
    }
    
    ctx.strokeStyle  = 'red'
    ctx.strokeRect(redPos.x, redPos.y , hitBoxWidth, hitBoxHeight)

    requestAnimationFrame(render)
}

requestAnimationFrame(render)