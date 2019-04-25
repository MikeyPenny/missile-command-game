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
        this.circles.push(circle);
        
        
    }

    unsubscribeCircle(circle) {
        this.circles.forEach((element, i) => {
            if(element === circle ) {
                this.circles.splice(i, 1)
            }
        })
        
    }

    subscribeRocket() {}
    
    unSubscribeRocket() {}
    
    subscribeCity(city) {
        this.cities.push(city);
    }
    
    unSubscribeCity() {}

    subscribeSilo(silo) {
        this.silos.push(silo);
    }
    
    unSubscribeSilo() {

    }

    checkRocketBombCollision() {

    }

    checkRocketCityCollision() {

    }

    checkRocketSiloCollision() {

    }

    bringTheRain() {
        
  

        let interval = setInterval(()=> {
            this.waveEnemyMissiles--;

            let rocket = new Rocket();
            rocket.bringTheRain();  
            
            if(this.waveEnemyMissiles === 0) {
                clearInterval(interval);
            }
        }, 1000);  

    }

    

    

    countEnemyMissiles() {
        this.waveEnemyMissiles--;
    }

    cleanStage() {

    }

    buildSilos() {
        let silo1 = new Silo();
        silo1.x = 80;
        this.subscribeSilo(silo1);

        let silo2 = new Silo();
        silo2.x = 400;
        this.subscribeSilo(silo2);

        let silo3 = new Silo();
        silo3.x = 720;
        this.subscribeSilo(silo3);
    }

    buildCities() {
        let city1 = new City();
        city1.x = 155;
        this.subscribeCity(city1);
        let city2 = new City();
        city2.x = 275;
        this.subscribeCity(city2);
        let city3 = new City();
        city3.x = 465;
        this.subscribeCity(city3);
        let city4 = new City();
        city4.x = 565;
        this.subscribeCity(city4);
    }

    loadGame()  {
        this.buildSilos();
        this.buildCities();
        this.bringTheRain();
        
        
    }
    
}
