class MissileCommand {
    
    constructor() {
        this.waveEnemyMissiles = 30;
        this.circles = [];
        this.rockets = [];
        this.cities = [];
        this.silos = [];
        this.missiles = [];
        this.ufos = [];
        this.score = 0;
        this.record = 0;
        
    }

    subscribeCircle(circle) {

    }

    unsubscribeCircle() {

    }

    subscribeRocket() {}
    
    unSubscribeRocket() {}
    
    subscribeCity() {}
    
    unSubscribeCity() {}

    subscribeSilo() {}
    
    unSubscribeSilo() {}

    checkRocketBombCollision() {

    }

    checkRocketCityCollision() {

    }

    checkRocketSiloCollision() {

    }

    bringTheRain() {

    }

    countEnemyMissiles() {
        this.waveEnemyMissiles--;
    }

    cleanStage() {

    }

    startGame()  {
        
    }
    
}
