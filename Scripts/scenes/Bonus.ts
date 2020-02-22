module scenes
{
    export class Bonus extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private background:createjs.Bitmap;

        // 4 dice objects
        private dice:objects.Dice[] = [ // 2 dice objects
            new objects.Dice(),
            new objects.Dice(),
            new objects.Dice(),
            new objects.Dice()
        ];

        private result1:objects.Label; // label for 1st die result
        private result2:objects.Label; // label for 2nd die result
        private result3:objects.Label; // label for 3rd die result
        private result4:objects.Label; // label for 4th die result
        private result:objects.Label;
        private rollButton:objects.Button;

        private isRolling:boolean;
        private rollAnimation:number;

        private results:number[] = [0, 0, 0, 0];

        private backButton:objects.Button;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        /**
         * Start function to initialize objects
         * Author: Shristi Gurung
         * Date: 02-22-2020
         *
         * @memberof Bonus
         */
        public Start(): void 
        {
            this.background = new createjs.Bitmap("./Assets/images/dicebackground.png");
            this.addChild(this.background);

            this.dice[0] = new objects.Dice(config.Game.ASSETS.getResult("blank"), 0, 0, false);
            this.dice[1] = new objects.Dice(config.Game.ASSETS.getResult("blank"), 200, 0, false);
            this.dice[2] = new objects.Dice(config.Game.ASSETS.getResult("blank"), 400, 0, false);
            this.dice[3] = new objects.Dice(config.Game.ASSETS.getResult("blank"), 600, 0, false);
            this.result1 = new objects.Label("","35px","Consolas", "#000000", 180, 200, false);
            this.result2 = new objects.Label("","35px","Consolas", "#000000", 380, 200, false);
            this.result3 = new objects.Label("","35px","Consolas", "#000000", 580, 200, false);
            this.result4 = new objects.Label("","35px","Consolas", "#000000", 780, 200, false);
            this.result = new objects.Label("Result: ","35px","Consolas", "#000000", 200, 305, false);
            this.rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);

            this.backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 500, 430, true);

            this.isRolling = false;
            this.rollAnimation = 0;

            
             this.Main();
        }        
        
        /**
         * Update function to show roll animation and results
         * Author: Shrsti Gurung
         * Date: 02-22-2020
         * @memberof Bonus
         */
        public Update(): void 
        {
            if(this.isRolling) {
                if(this.rollAnimation < 25) {
                    this.removeChild(this.dice[0]);
                    this.removeChild(this.dice[1]);
                    this.removeChild(this.dice[2]);
                    this.removeChild(this.dice[3]);

                    this.dice[0] = new objects.Dice(config.Game.ASSETS.getResult(Math.floor((Math.random() * 6) + 1).toString()), 0, 0, false);
                    this.dice[1] = new objects.Dice(config.Game.ASSETS.getResult(Math.floor((Math.random() * 6) + 1).toString()), 200, 0, false);
                    this.dice[2] = new objects.Dice(config.Game.ASSETS.getResult(Math.floor((Math.random() * 6) + 1).toString()), 400, 0, false);
                    this.dice[3] = new objects.Dice(config.Game.ASSETS.getResult(Math.floor((Math.random() * 6) + 1).toString()), 0, 200, false);

                    this.addChild(this.dice[0]);
                    this.addChild(this.dice[1]);
                    this.addChild(this.dice[2]);
                    this.addChild(this.dice[3]);
                    this.rollAnimation++;
                } else {
                    this.results[0] = Math.floor((Math.random() * 6) + 1);
                    this.results[1] = Math.floor((Math.random() * 6) + 1);
                    this.results[2] = Math.floor((Math.random() * 6) + 1);
                    this.results[3] = Math.floor((Math.random() * 6) + 1);
                    this.removeChild(this.dice[0]);
                    this.removeChild(this.dice[1]);
                    this.removeChild(this.dice[2]);
                    this.removeChild(this.dice[3]);
                    this.dice[0] = new objects.Dice(config.Game.ASSETS.getResult(this.results[0].toString()), 0, 0, false);
                    this.dice[1] = new objects.Dice(config.Game.ASSETS.getResult(this.results[1].toString()), 200, 0, false);
                    this.dice[2] = new objects.Dice(config.Game.ASSETS.getResult(this.results[2].toString()), 400, 0, false);
                    this.dice[3] = new objects.Dice(config.Game.ASSETS.getResult(this.results[3].toString()), 600, 0, false);
                    this.addChild(this.dice[0]);
                    this.addChild(this.dice[1]);
                    this.addChild(this.dice[2]);
                    this.addChild(this.dice[3]);

                    this.removeChild(this.result1);
                    this.removeChild(this.result2);
                    this.removeChild(this.result3);
                    this.removeChild(this.result4);
                    this.result1 = new objects.Label(this.results[0].toString(),"35px","Consolas", "#000000", 180, 200, false);
                    this.result2 = new objects.Label(this.results[1].toString(),"35px","Consolas", "#000000", 380, 200, false);
                    this.result3 = new objects.Label(this.results[2].toString(),"35px","Consolas", "#000000", 580, 200, false);
                    this.result4 = new objects.Label(this.results[3].toString(),"35px","Consolas", "#000000", 780, 200, false);
                    this.addChild(this.result1);
                    this.addChild(this.result2);
                    this.addChild(this.result3);
                    this.addChild(this.result4);
    
                    this.removeChild(this.result);
                    let result = this.results[0];
                    let min = this.results[0];
                    for(let i = 1; i<4; i++) {
                        result += this.results[i];
                        if (min > this.results[i]) {
                            min = this.results[i];
                        }
                    }
                    result -= min;
                    this.result = new objects.Label("Result: " + result,"35px","Consolas", "#000000", 200, 305, false);
                    this.addChild(this.result);

                    this.isRolling = false;
                }
            }
        }
        
        /**
         * Main function to add listeners and objects to scene
         * Author: Shrsti Gurung
         * Date: 02-22-2020
         * @memberof Bonus
         */
        public Main(): void 
        {
            this.rollButton.on("click", () => {
                this.isRolling = true;
                this.rollAnimation = 0;
            });

            this.backButton.on("click", () => {
                config.Game.SCENE = scenes.State.PLAY;
            });

            this.addChild(this.dice[0]);
            this.addChild(this.dice[1]);
            this.addChild(this.dice[2]);
            this.addChild(this.dice[3]);
            this.addChild(this.result1);
            this.addChild(this.result2);
            this.addChild(this.result3);
            this.addChild(this.result4);
            this.addChild(this.result);
            this.addChild(this.rollButton);
            this.addChild(this.backButton);
        }

        
    }
}
