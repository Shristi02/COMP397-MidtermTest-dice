module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private background:createjs.Bitmap;

        private dice:objects.Dice[] = [ // 2 dice objects
            new objects.Dice(),
            new objects.Dice()
        ];
        private result1:objects.Label; // label for 1st die result
        private result2:objects.Label; // label for 2nd die result
        private rollButton:objects.Button; // roll button

        private isRolling:boolean; // boolean to show/diable rolling animation
        private rollAnimation:number; // duration of roll animation

        private results:number[] = [0, 0]; // results of the roll

        private bonusButton:objects.Button;


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
         * AUthor: Shristi Gurung
         * Date: 02-22-2020
         * @memberof Play
         */
        public Start(): void 
        {
            this.background = new createjs.Bitmap("./Assets/images/dicebackground.png");
            this.addChild(this.background);

            this.dice[0] = new objects.Dice(config.Game.ASSETS.getResult("blank"), 75, 100, false);
            this.dice[1] = new objects.Dice(config.Game.ASSETS.getResult("blank"), 375, 100, false);
            this.result1 = new objects.Label("","35px","Consolas", "#000000", 160, 305, false);
            this.result2 = new objects.Label("","35px","Consolas", "#000000", 470, 305, false);
            this.rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.bonusButton = new objects.Button(config.Game.ASSETS.getResult("bonusButton"), 500, 430, true);

            this.isRolling = false;
            this.rollAnimation = 0;

            
             this.Main();
        }        
        /**
         * Update function to show rolling animation and results of the roll
         * Author: Shristi Gurung
         * Date: 02-22-2020
         * @memberof Play
         */
        public Update(): void 
        {
            if(this.isRolling) {
                if(this.rollAnimation < 25) {
                    this.removeChild(this.dice[0]);
                    this.removeChild(this.dice[1]);

                    this.dice[0] = new objects.Dice(config.Game.ASSETS.getResult(Math.floor((Math.random() * 6) + 1).toString()), 75, 100, false);
                    this.dice[1] = new objects.Dice(config.Game.ASSETS.getResult(Math.floor((Math.random() * 6) + 1).toString()), 375, 100, false);

                    this.addChild(this.dice[0]);
                    this.addChild(this.dice[1]);
                    this.rollAnimation++;
                } else {
                    this.results[0] = Math.floor((Math.random() * 6) + 1);
                    this.results[1] = Math.floor((Math.random() * 6) + 1);
                    this.removeChild(this.dice[0]);
                    this.removeChild(this.dice[1]);
                    this.dice[0] = new objects.Dice(config.Game.ASSETS.getResult(this.results[0].toString()), 75, 100, false);
                    this.dice[1] = new objects.Dice(config.Game.ASSETS.getResult(this.results[1].toString()), 375, 100, false);
                    this.addChild(this.dice[0]);
                    this.addChild(this.dice[1]);
    
                    this.removeChild(this.result1);
                    this.removeChild(this.result2);
                    this.result1 = new objects.Label(this.results[0].toString(),"35px","Consolas", "#000000", 160, 305, false);
                    this.result2 = new objects.Label(this.results[1].toString(),"35px","Consolas", "#000000", 470, 305, false);
                    this.addChild(this.result1);
                    this.addChild(this.result2);

                    this.isRolling = false;
                }
            }
        }
        
        /**
         * Main function to add listeners and objects to scene
         * Aurthor: Shristi Gurung
         * Date: 02-22-2020
         * @memberof Play
         */
        public Main(): void 
        {
            this.rollButton.on("click", () => {
                this.isRolling = true;
                this.rollAnimation = 0;
            });

            this.bonusButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.BONUS;
            });


            this.addChild(this.dice[0]);
            this.addChild(this.dice[1]);
            this.addChild(this.result1);
            this.addChild(this.result2);
            this.addChild(this.rollButton);
            this.addChild(this.bonusButton);
        }

        
    }
}