"use strict";

class MissileCommand {
    
    constructor() {
        this.waveEnemyMissiles = 30;
        this.alliedMissiles = 30;
        this.circles = [];
        this.rockets = [];
        this.cities = [];
        this.silos = [];
        this.missiles = [];
        this.ufos = [];
        this.shots = [];
        this.stops = 0;
        this.pointSum = 0;
        this.scores = [];
        this.record = 0;
        this.score;
        this.arrows = [];
        this.endOfStage = [];
        this.grounds = [];
        
        this.gameObjects = [this.rockets, this.circles, this.shots, this.silos, 
                            this.cities, this.arrows, this.scores, 
                            this.grounds];
        
        this.draw = this.draw.bind(this);
        this.missileDestroyed = 25;
        this.ufoDestroyed = 100;
        window.addEventListener("load", ()=> {
            this.canvas = document.getElementsByTagName("canvas")[0];
            this.ctx = this.canvas.getContext("2d");
            this.draw();

        });
        this.stopAnimation = false
    }

    subscribeShot(shot) {
        this.shots.push(shot);
        
    }

    unsubScribeShot(shot) {
        for(let i = 0; i < this.shots.length; i++) {
            if(shot === this.shots[i]) [
                this.shots.splice(i, 1)
            ]
        }
    }

    subscribeCircle(circle) {
        this.circles.push(circle);
        
    }

    unsubscribeCircle(circle) {
        for(let i = 0; i < this.circles.length; i++) {
            if(circle === this.circles[i]) [
                this.circles.splice(i, 1)
            ]
        }
    }

    subscribeRocket(rocket) {
        this.rockets.push(rocket);
    }
    
    unSubscribeRocket(rocket) {
        this.rockets.forEach((element, i) => {
            if(element === rocket) {
                this.rockets.splice(i, 1);
            }
        });
    }
    
    subscribeCity(city) {
        this.cities.push(city);
    }
    
    unSubscribeCity(city) {
        this.cities.forEach((element, i) => {
            if(element === city) {
                this.cities.splice(i, 1);
            }
        });
    }

    subscribeSilo(silo) {
        this.silos.push(silo);
    }
    
    unSubscribeSilo(silo) {
        this.silos.forEach((element, i) => {
            if(element === silo) {
                this.silos.splice(i, 1);
            }
        });
    }

    subscribeScore(score) {
        this.scores[0] = score;
    }

    subscribeArrow(arrow) {
        this.arrows[0] = arrow;
        
    }
    
    unsubscribeScore() {
        this.scores.forEach((element, i) => {
            if(element === silo) {
                this.scores.splice(i, 1);
            }
        });
    }

    subscribeEndOfStage(endStage) {
        this.endOfStage[0] = endStage;
    }

    unsubscribeEndOfStage(endStage) {
        this.endOfStage.forEach((element, i) => {
            if(element === endStage) {
                this.endOfStage.splice(i, 1);
            }
        });
    }

    subscribeGround(ground) {
        this.grounds.push(ground);
    }

    checkRocketBombCollision(x,y) {
        
        for (let i = 0; i < this.circles.length; i++) {
            let a = this.circles[i].endX - x;
            let b = this.circles[i].endY - y;
            let dist = Math.sqrt(Math.pow(a, 2) + Math.pow(b,2));
            if (dist <=  this.circles[i].radius) {
                
                this.updateScore(this.missileDestroyed);
                return true;
            }
        }
        
        return false;
    }

    distance(origin, target) {

        let a = target.x - origin.x;
        let b = target.y - origin.y;
        let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b,2));
    
        return c;
    }

    checkRocketCityCollision(x, y) {
        for (let i = 0; i < this.cities.length; i++) {
            let a = this.cities[i].x - x;
            let b = this.cities[i].y - y;
            if (x >=  this.cities[i].x && x <= (this.cities[i].x + this.cities[i].width) && y >= this.cities[i].y) {
                this.cities.splice(i, 1);
                return true;
            }
        }
        
        return false;
    }

    checkRocketSiloCollision(x, y) {
        for (let i = 0; i < this.silos.length; i++) {
            let a = this.silos[i].x - x;
            let b = this.silos[i].y - y;
            if (x >=  this.silos[i].x && x <= (this.silos[i].x + this.silos[i].width) && y >= this.silos[i].y) {
                this.silos.splice(i, 1);
                return true;
            }
        }
        
        return false;
    }

    clearCanvas(ctx) {
        ctx.clearRect(0, 0, 800, 600);
    }

    draw() {
        
        this.clearCanvas(this.ctx);
        for(let i = 0; i < this.gameObjects.length; i++) {
            
                for(let j = 0; j < this.gameObjects[i].length; j++) {
                    this.gameObjects[i][j].draw()
                }
        }
        if(!this.stopAnimation) {
            window.requestAnimationFrame(this.draw.bind(this));
        }else {
            this.endOfStage[this.endOfStage.length - 1].draw()
        }
    }

    bringTheRain() {
        
        
        let interval = setInterval(()=> {
            this.waveEnemyMissiles--;
            
            let rocket = new Rocket(this);
            
            if(this.waveEnemyMissiles === 0) {
                clearInterval(interval);
                this.gameWait();
            }

        }, 1000);    

    }

    gameWait() {
        let pause = 0;
        let clearing = setInterval(()=> {
            pause++;
            if(pause === 1) {
                clearInterval(clearing);
                this.clearStage();   
            }          
        }, 8000);
    }

    clearStage() {

        

        
        let numRockets = this.alliedMissiles;
        let numCities = this.cities.length;

        let canvas = document.getElementById('missile_command');
        let ctx = canvas.getContext('2d');
        let ending = new EndOfStage(this, canvas, numRockets, numCities);

        
        
        setTimeout(()=> {
            this.nextStage()
        }, 3000)
        

        
    }

    nextStage() {
        this.stopAnimation = false;
        this.waveEnemyMissiles = 30;
        this.alliedMissiles =30;
        this.bringTheRain();
        this.draw();
    }
    
    buildSilos() {
        let silo1 = new Silo(this);
        silo1.x = 10;
        silo1.rockets = [
            {x: 40, y : 490},    
            {x: 30, y : 500},    
            {x: 50, y : 500},
            {x: 20, y : 510},
            {x: 40, y : 510},
            {x: 60, y : 510}
            
        ];

        let silo2 = new Silo(this);
        silo2.x = 375;
        silo2.rockets = [
            {x: 405, y : 490},    
            {x: 395, y : 500},    
            {x: 415, y : 500},
            {x: 385, y : 510},
            {x: 405, y : 510},
            {x: 425, y : 510}
            
        ];

        let silo3 = new Silo(this);
        silo3.x = 700;
        silo3.rockets = [
            {x: 730, y : 490},    
            {x: 720, y : 500},    
            {x: 740, y : 500},
            {x: 710, y : 510},
            {x: 730, y : 510},
            {x: 750, y : 510}
            
        ];
        
    }

    buildCities() {
        
        let city1 = new City(this);
        city1.x = 115;
        
        let city2 = new City(this);
        city2.x = 210;
        
        let city3 = new City(this);
        city3.x = 300;
        
        let city4 = new City(this);
        city4.x = 475;
        
        let city5 = new City(this);
        city5.x = 555;
        
        let city6 = new City(this);
        city6.x = 630;
        
    }

    insertArrow() {
        let canvas = document.getElementById('missile_command');
        let arrow = new Arrow(this, canvas);
    }

    updateScore(addScore) {
        
        this.pointSum += addScore;
        let canvas = document.getElementById('missile_command');
        this.score = new Score(this, canvas, this.pointSum);
        
    }

    buildGround() {
        let ground = new Ground(this);
    }

    loadGame()  {
        this.buildGround();
        this.buildSilos();
        this.buildCities();
        this.insertArrow();
        this.updateScore(0);
        this.bringTheRain();
        
    }
}
