//Load images & create image array
//Create Card class


//image # suits:
//0-21: Major Arcana
//22-35: Cups
//36-49: Pentacles
//50-63: Swords
//64-77: Wands

//array to hold card images
let cardImages = [];

//number of images
let numCardImages = 78;

//let updateButton;
let bgCol;
let textCol;
let button1;
let button3;

let card1;
let card3a;
let card3b;
let card3c;



function preload() {
  //for loop to load images
  for(let i = 0; i < 78; i++){

    //use i to access the filename of each image
    //for example, if i = 3,
    //'assets/card_' + i + '.jpg' --> 'assets/card_3.jpg'
    cardImages[i] = loadImage('assets/card_' + i + '.jpg');

  }
}

function setup() {
  let x3 = windowWidth/4;
  let x2 = windowWidth/3;

  bgCol = color(0)
  textCol = color(250,50,100);

  createCanvas(windowWidth, windowHeight);


  card1 = new Card(windowWidth/2);
  card3a = new Card(x3);
  card3b = new Card(x3*2);
  card3c = new Card(x3*3);

  button1 = createButton('single card reading');
  button1.size(200, AUTO);
  button1.position(x2-100, 25);
  button1.style('background-color', bgCol);
  button1.style('color', textCol);
  button1.style('font-size', '24px');
  button1.style('font-family', 'Bodoni');
  button1.mouseClicked(oneCard);

  button3 = createButton('three card reading');
  button3.size(200, AUTO);
  button3.position((x2*2)-100, 25);
  button3.style('background-color', bgCol);
  button3.style('color', textCol);
  button3.style('font-size', '24px');
  button3.style('font-family', 'Bodoni');
  button3.mouseClicked(threeCard);

  // updateButton = createButton('new reading');
  // updateButton.size(AUTO, 25);
  // updateButton.position(375, 25);
  // updateButton.mousePressed(updateCards);

  background(250,50,100);
  //frameRate(1);

}

function draw() {

  imageMode(CENTER);


  // card1.show();
  // card3a.show();
  // card3b.show();
  // card3c.show();

  //choose a random index
  //let randomIndex = int(random(numCardImages));

  //use random index to display random card image
  //image(cardImages[randomIndex], width/2, height/2);

}

function updateCards(){
  card1.update();
  card3a.update();
  card3b.update();
  card3c.update();
}

function oneCard(){
  background(250,50,100);
  card1.show();
  card1.update();
}

function threeCard(){
  background(250,50,100);
  card3a.show();
  card3b.show();
  card3c.show();
  card3a.update();
  card3b.update();
  card3c.update();
}

// function keyPressed(){
//   if (keyCode === LEFT_ARROW){
//     //change spread
//    card1.show();

//   }
//   else if (keyCode === RIGHT_ARROW){
//     //change spread
//     card3a.show();
//     card3b.show();
//     card3c.show();
//   }
// }

class Card {
  constructor(x){
    this.x = x;
    this.y = windowHeight/2;
    this.randomIndex = int (random(numCardImages));
  }

  show(){
    image(cardImages[this.randomIndex], this.x, this.y, 200, 351);

  }

  update(){
    this.randomIndex = int(random(numCardImages));
    image(cardImages[this.randomIndex], this.x, this.y, 200, 351);
  }


}