// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

var formesAtcions = {ajout: 0, suppression: 1};

function Drawing() {
  this.formes = new Array();

  this.undoRedo = new UndoRedo(this);
  this.getFormes = function () {
    return this.formes;
  }.bind(this);
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

  this.getRayon = function () {
    return this.rayon;
  }.bind(this);
};
Circle.prototype = new Forme();

function UndoRedo(drawing) {
  this.undoActions = new Array();
  this.redoActions = new Array();
  this.drawing = drawing;
  this.currIndex = 0;

  this.ajouter = function (forme) {
    this.drawing.getFormes().push(forme);
    this.undoActions.push(new ActionForme(formesAtcions.ajout, forme));
    this.currIndex++;
    console.log("Undo add");
  }.bind(this);

  this.supprimer = function (indice) {
    console.log("Undo suppress -->" + indice);
    var forms = this.drawing.getFormes();
    this.undoActions.push(new ActionForme(formesAtcions.suppression, forms[indice]));
    this.drawing.getFormes().splice(indice, 1);
    this.currIndex++;
  }.bind(this);

  this.undo = function () {
    console.log("Undo function : "+this.undoActions.length);
    // console.log(this.undoActions);

    if (this.undoActions.length > 0) {
      var action = this.undoActions.pop();
      this.redoActions.push(action);
      // console.log(action);

      switch (action.action) {
        case formesAtcions.ajout:
          console.log("Undo ajout");
          this.drawing.getFormes().splice(this.currIndex - 1, 1);
          this.currIndex--;
          break;
        case formesAtcions.suppression:
          console.log("Undo suppress");
          this.drawing.getFormes().push(action.forme);
          this.currIndex--;
          break;
      }
    }
    console.log("Undo done");
  }.bind(this);

  this.redo = function () {
    console.log("Redo function : "+this.redoActions.length);
    // console.log(this.redoActions);
    if (this.redoActions.length > 0) {
      // this.currIndex++;
      var action = this.redoActions.pop();
      switch (action.action) {
        case formesAtcions.ajout:
          console.log("ajout --");
          this.drawing.undoRedo.ajouter(action.forme);
          break;
        case formesAtcions.suppression:
          console.log("suppress -- ");
          // this.drawing.getFormes().push(action.forme);
          break;
      }
    }
    console.log("Redo done");
  }.bind(this);
};

function ActionForme(action, forme) {
  this.action = action;
  this.forme = forme;
  this.index = -1;
};
