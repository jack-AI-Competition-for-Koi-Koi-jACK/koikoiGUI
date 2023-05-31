import { Judgeyaku } from "../common.js";

export class PlayScene extends Phaser.Scene {
    constructor() {
        super({ key: "PlayScene" })
    }


    init() {
        // Can be defined on your own Scenes.
        // This method is called by the Scene Manager when the scene starts, before preload() and create().
        console.log(Judgeyaku([100,300,800])); //{yakus:[{num:1,name:'三光'}],mon:5}
        console.log(Judgeyaku([100]));    //{yakus:[],mon:0}


        console.log(Judgeyaku([120,220,320,420]));
        console.log(Judgeyaku([120,220,320,420,520,620,720,920,1020,1120,130,131,230,231,330,331,430,431,530,531,630,631]));
        console.log(Judgeyaku([130,131,230,231,330,331,430,431,530,531,630,631]));
    }


    preload() {
        // Can be defined on your own Scenes. Use it to load assets.
        // This method is called by the Scene Manager, after init() and before create(), only if the Scene has a LoaderPlugin.
        // After this method completes, if the LoaderPlugin's queue isn't empty, the LoaderPlugin will start automatically
    }


    create() {
        // Can be defined on your own Scenes. Use it to create your game objects.
        // This method is called by the Scene Manager when the scene starts, after init() and preload().
        // If the LoaderPlugin started after preload(), then this method is called only after loading is complete.
        const sceneName = this.add.text(150, 70, 'PlayScene').setFontSize(30).setFontFamily("Arial").setOrigin(0.5).setInteractive();

	    const change = this.add.text(150, 130, 'Change Scene!').setFontSize(20).setFontFamily("Arial").setOrigin(0.5).setInteractive();

        change.on('pointerdown', function (pointer) {
            this.scene.start('ResultScene');
        }, this);
    }


    update() {
        // https://photonstorm.github.io/phaser3-docs/Phaser.Scene.html#update
    }
}