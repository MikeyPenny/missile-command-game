
function clearCanvas(ctx) {
    ctx.clearRect(0, 0, 800, 600);
}

function explodeBomb(canvas, ctx, endX, endY) {

    
    let radius= 1;
    let color = 0;
    let startAngle = 0;
    let endAngle = Math.PI*2;
    let hue = 0;

    function shiftHue(hue) {
        return (hue+15)%360;
    }

    function updateCanvas(){
        
        hue = shiftHue(hue);
        color = "hsl("+hue+",100%,50%)";
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(endX, endY, radius, startAngle, endAngle, true);
        ctx.fill();
        radius += 1;
        if(radius < 60) {
            window.requestAnimationFrame(updateCanvas);
        } else {
            clearCanvas(ctx)
        }

    }

    window.requestAnimationFrame(updateCanvas);
   
}

function shootTo(e) {
    let canvas = document.getElementById('missile_command');
    let ctx = canvas.getContext('2d');

    let startX = 400;
    let startY = 500;
    let endX = e.pageX;
    let endY = e.pageY
    let amount = 0;
    let stepSize = 8;
    let dis = distance({x: startX, y: startY}, {x: endX, y: endY});
    let steps = dis / stepSize
    let speed = 1/steps
    let stepCounter = 0

    function drawLine() {

        amount += speed;
        stepCounter++

        if (amount > 1) {
            amount = 1;
            // new Circle(game)
            explodeBomb(canvas, ctx, endX, endY);
            clearCanvas(ctx);
        } else {
            ctx.strokeStyle = "blue";
            ctx.beginPath();
            ctx.moveTo(startX, startY);            
            ctx.lineTo(startX + (endX - startX) * amount, startY + (endY - startY) * amount);
            ctx.stroke();
            
            window.requestAnimationFrame(drawLine);
        }

    }

    window.requestAnimationFrame(drawLine);

}

function distance(origin, target) {

    let a = target.x - origin.x
    let b = target.y - origin.y 
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b,2))

    return c 
}

window.onload = function() {
    
    let canvas = document.getElementById('missile_command');
    // let ctx = canvas.getContext('2d');

    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    canvas.addEventListener("click", shootTo);
    
}