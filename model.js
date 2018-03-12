// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
  this.formes = new Array();
};

function Forme(epaisseur, couleur) {
  this.epaisseur = epaisseur;
  this.couleur = couleur;

  this.getEpaisseur = function () {
    return this.epaisseur;
  };

  this.getCouleur = function () {
    return this.couleur;
  };
};

function Rectangle(x, y, largeur, hauteur, epaisseur, couleur) {
  Forme.call(this, epaisseur, couleur);
  this.x = x;
  this.y = y;
  this.largeur = largeur;
  this.hauteur = hauteur;

  this.getX = function () {
    return this.x;
  }.bind(this);

  this.getY = function () {
    return this.y;
  }.bind(this);

  this.getLargeur = function () {
    return this.largeur;
  }.bind(this);

  this.getHauteur = function () {
    return this.hauteur;
  }.bind(this);
};
Rectangle.prototype = new Forme();

function Line(xa, ya, xb, yb, epaisseur, couleur) {
  Forme.call(this, epaisseur, couleur);
  this.initx = xa;
  this.inity = ya;
  this.finalx = xb;
  this.finaly = yb;

  this.getInitX = function () {
    return this.initx;
  }.bind(this);

  this.getInitY = function () {
    return this.inity;
  }.bind(this);

  this.getFinalX = function () {
    return this.finalx;
  }.bind(this);

  this.getFinalY = function () {
    return this.finaly;
  }.bind(this);
};
Line.prototype = new Forme();


function Circle(x, y, rayon, epaisseur, couleur) {
  Forme.call(this, epaisseur, couleur);
  this.x = x;
  this.y = y;
  this.rayon = rayon;

  this.getX = function () {
    return this.x;
  }.bind(this);

  this.getY = function () {
    return this.y;
  }.bind(this);

  this.getRayon= function () {
    return this.rayon;
  }.bind(this);
};
Circle.prototype = new Forme();

function undoRedo() {
  this.commands = new Array();
}
