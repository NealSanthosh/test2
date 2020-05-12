var response;
var responseJSON;
var canvas;
var database;
var form;
var updater;
var voterCount;



function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );

  database = firebase.database();

  form = new Form();

  update = new Updater();

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  form.display();
}