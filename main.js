var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 600;

// Code temporaire pour tester l'affiche de la vue
var rec = new Rectangle(10, 20, 50, 100, 5, 'red');
var ligne = new Line(20, 20, 300, 100, 5, '#000AAA');
var ligne2 = new Line(500, 50, 400, 200, 10, 'green');

var drawing = new Drawing();
drawing.formes.push(rec);
drawing.formes.push(ligne);
drawing.formes.push(ligne2);
drawing.paint(ctx, canvas);

// Code final à utiliser pour manipuler Pencil.
var pencil = new Pencil(ctx, drawing, canvas);

function removeForm(index) {
  drawing.formes.splice(index, 1);
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
    case editingMode.polygon:
      pencil.currEditingMode = index;
      break;
  }
}

// Use that for polygom
// Isue : how to change shape type?
ctx.beginPath();

ctx.moveTo(75, 50);
ctx.lineTo(175, 50);

ctx.lineTo(200, 75);
ctx.lineTo(175, 100);

ctx.lineTo(75, 100);
ctx.lineTo(50, 75);

ctx.closePath();
ctx.fillStyle = "green";
ctx.stroke();
