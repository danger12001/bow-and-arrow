var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var score = 0;
var numberOfArrows = 0;
var game = new Phaser.Game(config);

function preload ()
{
    //TODO load all levels and set level limit
    game.load.json('level00', 'data/level00.json');


    //TODO load all sprites

    //TODO load all animations

}


function player() {}

function enemy() {}


function moveEnemy(){}

function movePlayer() {}



function create ()
{
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);


}

function update() {
    
}