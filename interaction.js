// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  this.initX = 0;
  this.initY = 0;
  this.finalX = 0;
  this.finalY = 0;
  this.pression = false;
  this.moving = false;


  // Developper les 3 fonctions gérant les événements
  this.mousedown = function (evt) {
    var pos = getMousePosition(canvas, evt);
    this.initX = pos.x;
    this.initY = pos.y;
    this.pression = true;
    interactor.onInteractionStart(this);

    console.log("mousedown");
    console.log(pos);
  }.bind(this);

  this.mousemove = function (evt) {
    if (this.pression){
      this.moving = true;
      var pos = getMousePosition(canvas, evt);
      this.finalX = pos.x;
      this.finalY = pos.y;
      interactor.onInteractionUpdate(this);
      console.log("mousemove");
    }
  }.bind(this);

  this.mouseup = function (evt) {
    if (this.moving){
      var pos = getMousePosition(canvas, evt);
      this.finalX = pos.x;
      this.finalY = pos.y;
      this.pression = false;
      this.moving = false;

      interactor.onInteractionEnd(this);
      console.log("mouseup");
      console.log(pos);
    }
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
    x: Math.round(evt.clientX - rect.left),
    y: Math.round(evt.clientY - rect.top)
  };
};



