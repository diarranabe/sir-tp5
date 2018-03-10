// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
  this.formes = new Array();
};

function Forme(epaisseur, couleur) {
  this.epaisseur = epaisseur;
  this.couleur = couleur;
};

function Rectangle(x, y, largeur, hauteur, epaisseur, couleur) {
  Forme.call(this, epaisseur, couleur);
  this.x = x;
  this.y = y;
  this.largeur = largeur;
  this.hauteur = hauteur;
};
Rectangle.prototype = new Forme();

function Line(xa, ya, xb, yb, epaisseur, couleur) {
  Forme.call(this, epaisseur, couleur);
  this.xa = xa;
  this.ya = ya;
  this.xb = xb;
  this.yb = yb;
};
Line.prototype = new Forme();
