var editingMode = {rect: 0, line: 1, circle: 2};

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
      if (form.largeur) {
        list.innerHTML += "<li class='list-group-item' style='color:" + form.getCouleur() + ";'> " + (index + 1) +
          "-rect : (" + form.x + "," + form.y + "), larg:" + form.getLargeur() + ", haut:" + form.getHauteur() + ", epai:" + form.getEpaisseur()
          + " <button type='button' class='btn btn-default' onclick='removeForm(" + index + ")'><span class='glyphicon glyphicon-remove-sign'></span></button>" +

          "</li>";
      } else if (form.initx) {
        list.innerHTML += "<li class='list-group-item' style='color:" + form.getCouleur() + ";'>" + (index + 1) +
          "-ligne : (" + form.initx + "," + form.inity + "), (" + form.finalx + "," + form.finaly + "), epai:" + form.getEpaisseur()
          + "<button type='button' class='btn btn-default' onclick='removeForm(" + index + ")'><span class='glyphicon glyphicon-remove-sign'></span></button>" +
          "</li>";
      } else if (form.rayon) {
        list.innerHTML += "<li class='list-group-item' style='color:" + form.getCouleur() + ";'>" + (index + 1) +
          "-cercle : (" + form.getX() + "," + form.getY() + "), rayon:" + form.getRayon() + ", epai:" + form.getEpaisseur()
          + "<button type='button' class='btn btn-default' onclick='removeForm(" + index + ")'><span class='glyphicon glyphicon-remove-sign'></span></button>" +

          "</li>";
      }
      console.log(form)
    });
  };
  this.updateShapeList();


  // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
  this.onInteractionStart = function (dnd) {
    this.currLineWidth = document.getElementById("spinnerWidth").value;
    this.currColour = document.getElementById("colour").value;
  };

  this.onInteractionUpdate = function (dnd) {
    switch (this.currEditingMode) {
      case editingMode.rect: {
        this.currentShape = new Rectangle(dnd.initX, dnd.initY, dnd.finalX - dnd.initX, dnd.finalY - dnd.initY, this.currLineWidth, this.currColour);
        drawing.paint(ctx, canvas);
        this.currentShape.paint(ctx, canvas);
        break;
      }
      case editingMode.line: {
        this.currentShape = new Line(dnd.initX, dnd.initY, dnd.finalX, dnd.finalY, this.currLineWidth, this.currColour);
        drawing.paint(ctx, canvas);
        this.currentShape.paint(ctx, canvas);
        break;
      }
      case editingMode.circle: {
        this.currentShape = new Line(dnd.initX, dnd.initY, dnd.finalX, dnd.finalY, this.currLineWidth, this.currColour);
        var rayon = Math.abs((dnd.finalX - dnd.initX) / 2);
        //Math.abs((((dnd.finalX - dnd.initX) / 2) + ((dnd.finalY - dnd.initY) / 2)) / 2)
        if (rayon < Math.abs(((dnd.finalY - dnd.initY) / 2))) {
          rayon = Math.abs((dnd.finalY - dnd.initY) / 2);
        }

        // this.currentShape = new Circle((dnd.initX + dnd.finalX) / 2, (dnd.initY + dnd.finalY) / 2,
        this.currentShape = new Circle(dnd.initX + (dnd.finalX - dnd.initX) / 2, dnd.initY + (dnd.finalY - dnd.initY) / 2,
          rayon, this.currLineWidth, this.currColour);
        //Math.abs((dnd.finalX - dnd.initX) / 2), this.currLineWidth, this.currColour);
        drawing.paint(ctx, canvas);
        this.currentShape.paint(ctx, canvas);
        break;
      }
    }
  };

  this.onInteractionEnd = function (dnd) {
    console.log("Current");
    console.log(this.currentShape);
    // drawing.formes.push(this.currentShape);
    drawing.undoRedo.ajouter(this.currentShape);
    // Add shape and action to undoRedo list
    drawing.paint(ctx, canvas);
    this.updateShapeList();
  };

};


