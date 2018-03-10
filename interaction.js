// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  this.startX = 0;
  this.startY = 0;
  this.endX = 0;
  this.endY = 0;


  // Developper les 3 fonctions gérant les événements
  this.mousedown = function (evt) {
    var pos = getMousePosition(canvas, evt);
    this.startX = pos.x;
    this.startY = pos.y;

    interactor.onInteractionStart(this);

    console.log("mousedown");
    console.log(pos);
  }.bind(this);

  this.mouseup = function (evt) {
    var pos = getMousePosition(canvas, evt);
    this.endX = pos.x;
    this.endY = pos.y;

    interactor.onInteractionEnd(this);
    console.log("mouseup");
    console.log(pos);
  }.bind(this);

  this.mousemove = function (evt) {
    interactor.onInteractionUpdate(this);
    console.log("mousemove");
  }.bind(this);

  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.mousedown, false);
  canvas.addEventListener('mousemove', this.mousemove, false);
  canvas.addEventListener('mouseup', this.mouseup, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



