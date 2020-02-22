"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Bonus = /** @class */ (function (_super) {
        __extends(Bonus, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Bonus() {
            var _this = _super.call(this) || this;
            // 4 dice objects
            _this.dice = [
                new objects.Dice(),
                new objects.Dice(),
                new objects.Dice(),
                new objects.Dice()
            ];
            _this.results = [0, 0, 0, 0];
            _this.Start();
            return _this;
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
        Bonus.prototype.Start = function () {
            this.background = new createjs.Bitmap("./Assets/images/dicebackground.png");
            this.addChild(this.background);
            this.dice[0] = new objects.Dice(config.Game.ASSETS.getResult("blank"), 0, 0, false);
            this.dice[1] = new objects.Dice(config.Game.ASSETS.getResult("blank"), 200, 0, false);
            this.dice[2] = new objects.Dice(config.Game.ASSETS.getResult("blank"), 400, 0, false);
            this.dice[3] = new objects.Dice(config.Game.ASSETS.getResult("blank"), 600, 0, false);
            this.result1 = new objects.Label("", "35px", "Consolas", "#000000", 180, 200, false);
            this.result2 = new objects.Label("", "35px", "Consolas", "#000000", 380, 200, false);
            this.result3 = new objects.Label("", "35px", "Consolas", "#000000", 580, 200, false);
            this.result4 = new objects.Label("", "35px", "Consolas", "#000000", 780, 200, false);
            this.result = new objects.Label("Result: ", "35px", "Consolas", "#000000", 200, 305, false);
            this.rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 500, 430, true);
            this.isRolling = false;
            this.rollAnimation = 0;
            this.Main();
        };
        /**
         * Update function to show roll animation and results
         * Author: Shrsti Gurung
         * Date: 02-22-2020
         * @memberof Bonus
         */
        Bonus.prototype.Update = function () {
            if (this.isRolling) {
                if (this.rollAnimation < 25) {
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
                }
                else {
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
                    this.result1 = new objects.Label(this.results[0].toString(), "35px", "Consolas", "#000000", 180, 200, false);
                    this.result2 = new objects.Label(this.results[1].toString(), "35px", "Consolas", "#000000", 380, 200, false);
                    this.result3 = new objects.Label(this.results[2].toString(), "35px", "Consolas", "#000000", 580, 200, false);
                    this.result4 = new objects.Label(this.results[3].toString(), "35px", "Consolas", "#000000", 780, 200, false);
                    this.addChild(this.result1);
                    this.addChild(this.result2);
                    this.addChild(this.result3);
                    this.addChild(this.result4);
                    this.removeChild(this.result);
                    var result = this.results[0];
                    var min = this.results[0];
                    for (var i = 1; i < 4; i++) {
                        result += this.results[i];
                        if (min > this.results[i]) {
                            min = this.results[i];
                        }
                    }
                    result -= min;
                    this.result = new objects.Label("Result: " + result, "35px", "Consolas", "#000000", 200, 305, false);
                    this.addChild(this.result);
                    this.isRolling = false;
                }
            }
        };
        /**
         * Main function to add listeners and objects to scene
         * Author: Shrsti Gurung
         * Date: 02-22-2020
         * @memberof Bonus
         */
        Bonus.prototype.Main = function () {
            var _this = this;
            this.rollButton.on("click", function () {
                _this.isRolling = true;
                _this.rollAnimation = 0;
            });
            this.backButton.on("click", function () {
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
        };
        return Bonus;
    }(objects.Scene));
    scenes.Bonus = Bonus;
})(scenes || (scenes = {}));
//# sourceMappingURL=Bonus.js.map