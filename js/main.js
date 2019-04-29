const missileCommand = new MissileCommand();
let alliedMissiles = 30;

function shootTo(e) {
    new Shot(missileCommand, e);
    alliedMissiles--;
    missileCommand.alliedMissiles = alliedMissiles;
}

function distance(origin, target) {

    let a = target.x - origin.x;
    let b = target.y - origin.y;
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b,2));

    return c;
}

window.onload = function() {
    
    let startBtn = document.getElementById('start');
    startBtn.onclick = () => {
        let canvas = document.getElementById('missile_command');
        let ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        missileCommand.loadGame();

        canvas.addEventListener("click", shootTo);

    };

    
}



