var editingMode = {rect: 0, line: 1};

function Pencil(ctx, drawing, canvas) {
  this.currEditingMode = editingMode.rect;
  this.currLineWidth = 5;
  this.currColour = '#000000';
  this.currentShape = 0;

  // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

  new DnD(canvas, this);

  this.updateShapeList = function () {
    var list = document.getElementById("shapeList");
    list.innerHTML = "";
    drawing.formes.forEach(function (form) {
      var index = drawing.formes.indexOf(form);
      if (form.x) {
        list.innerHTML += "<li style='color:" + form.couleur + ";'> "+index
          + "<button type='button' class='btn btn-default' onclick='removeForm("+index+")'><span class='glyphicon glyphicon-remove-sign'></span></button>" +
          "rect : (" + form.x + "," + form.y + "), largeur:" + form.largeur + ", longeur:" + form.hauteur + ", epai:" + form.epaisseur + "</li>";
      } else {
        list.innerHTML += "<li style='color:" + form.couleur + ";'>"
          + "<button type='button' class='btn btn-default' onclick='removeForm(\"+index+\")'><span class='glyphicon glyphicon-remove-sign'></span></button>" +
          " ligne : (" + form.xa + "," + form.ya + "), (" + form.xb + "," + form.yb + "), epai:" + form.epaisseur + "</li>";
      }
      console.log(form)
    });
  };
  this.updateShapeList();


  // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
  this.onInteractionStart = function (dnd) {
    // this.currEditingMode = ??
    this.currLineWidth = document.getElementById("spinnerWidth").value;
    this.currColour = document.getElementById("colour").value;
    console.log("color : " + this.currColour);
    console.log("width : " + this.currLineWidth);
  }

  this.onInteractionUpdate = function (dnd) {
    // console.log("value : "+document.getElementsByName("mx").value);
    switch (this.currEditingMode) {
      case editingMode.rect: {
        this.currentShape = new Rectangle(dnd.initX, dnd.initY, dnd.finalX - dnd.initX, dnd.finalY - dnd.initY, this.currLineWidth, this.currColour);
        drawing.paint(ctx, canvas);
        this.currentShape.paint(ctx, canvas);
        console.log(this.currentShape);
        break;
      }
      case editingMode.line: {
        this.currentShape = new Line(dnd.initX, dnd.initY, dnd.finalX, dnd.finalY, this.currLineWidth, this.currColour);
        drawing.paint(ctx, canvas);
        this.currentShape.paint(ctx, canvas);
        console.log(this.currentShape);
        break;
      }
    }
  }

  this.onInteractionEnd = function (dnd) {
    drawing.formes.push(this.currentShape);
    drawing.paint(ctx, canvas);
    this.updateShapeList();
  }
};


