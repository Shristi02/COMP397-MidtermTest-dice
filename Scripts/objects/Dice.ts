module objects
{
    export class Dice extends GameObject
    {
        
        // constructor
        constructor(imagePath:Object = config.Game.ASSETS.getResult("blank")
            , x:number = 0, y:number= 0, isCentered:boolean = false)
        {
            super(imagePath, x, y, isCentered);

            this.Start();
        }
        
        // PRIVATE METHODS
        protected _checkBounds(): void {
            
        }

        // PUBLIC METHODS

        /**
         * This function is used for initialization
         *
         * @memberof Button
         */
        public Start(): void {
        }

        public Update(): void {
            
        }

        public Reset(): void {
            
        }
    }
}