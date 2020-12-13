var canvas, backgroundImg;

var gameState = 0;
var playerCount;

var game, player, form;

function draw() {
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getCount();
  game.start();
}