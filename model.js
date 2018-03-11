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
  };

  this.getY = function () {
    return this.y;
  };

  this.getLargeur = function () {
    return this.largeur;
  };

  this.getHauteur = function () {
    return this.hauteur;
  };
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
  };

  this.getInitY = function () {
    return this.inity;
  };

  this.getFinalX = function () {
    return this.finalx;
  };

  this.getFinalY = function () {
    return this.finaly;
  };
};
Line.prototype = new Forme();
