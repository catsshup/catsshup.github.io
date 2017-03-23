var colors = [
  '#45B29D',
  '#EFC94C',
  '#E27A3F',
  '#DF5A49'
];

var positionsX;
var positionsY;

var couleur;
var parametres = {
  largeur : 200, 
  y : -100,
  x : 200
};

function setup(){
  createCanvas(windowWidth,windowHeight);
  noStroke();
  couleur = (random(colors));

  positionsX = [
  	width/5,
  	width/5*4
  ];

  positionsY = [
  	height+100,
  	-100
  ];
}



function draw(){
  background('#334D5C');
  fill(couleur);
  ellipse(parametres.x,parametres.y,parametres.largeur)
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function keyPressed(){
	parametres.x = random(positionsX);
 	couleur = random(colors);
 	y = random(positionsY);

  TweenMax.fromTo(parametres,1,{

      largeur: 200
    },
    {

      largeur: 0,
      delay:0.5
      //onComplete: reduce
  });
  TweenMax.fromTo(parametres,0.5,{
  	y
  },
  {
    y:height/2
  })

}

function reduce(){
//fromTo (premier objet avec les propriétés de départ,
//puis un deuxieme objet avec les propriétés qu'on souhaite avoir à la fin)
  TweenMax.to(parametres,0.1,{
    y : height/2,
    largeur:0
  })
}
