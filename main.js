var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 600;

// Code temporaire pour tester l'affiche de la vue
var rec = new Rectangle(10, 20, 200, 100, 10, 'red');
var ligne = new Line(20, 20, 300, 100, 5, '#000AAA');
var ligne2 = new Line(650, 70, 400, 500, 10, 'green');
var circle = new Circle(350, 200, 100, 10, 'blue');

var drawing = new Drawing();
// drawing.formes.push(rec);
// drawing.formes.push(ligne);
// drawing.formes.push(ligne2);
// drawing.formes.push(circle);

drawing.undoRedo.ajouter(rec);
drawing.undoRedo.ajouter(ligne2);
drawing.undoRedo.ajouter(circle);

drawing.paint(ctx, canvas);

// Code final à utiliser pour manipuler Pencil.
var pencil = new Pencil(ctx, drawing, canvas);

function removeForm(index) {
  // Add shape and action to undoRedo list
  // drawing.formes.splice(index, 1);
  drawing.undoRedo.supprimer(index);
  pencil.updateShapeList();
  drawing.paint(ctx, canvas);
  console.log("remove : " + index);
}

function switchShape(index) {
  switch (index) {
    case editingMode.rect:
      pencil.currEditingMode = index;
      break;
    case editingMode.line:
      pencil.currEditingMode = index;
      break;
    case editingMode.circle:
      pencil.currEditingMode = index;
      break;
  }
}

function undo() {
  drawing.undoRedo.undo();
  drawing.paint(ctx, canvas);
  pencil.updateShapeList();
}

function redo() {
  drawing.undoRedo.redo();
  drawing.paint(ctx, canvas);
  pencil.updateShapeList();
}
