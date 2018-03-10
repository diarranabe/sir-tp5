
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=700
canvas.height=600

// Code temporaire pour tester l'affiche de la vue
var rec = new Rectangle(10, 20, 50, 100, 5, 'red');
var ligne = new Line(20, 20, 300, 100, 5, '#000AAA');

var drawing = new Drawing();
drawing.formes.push(rec);
drawing.formes.push(ligne);
drawing.paint(ctx, canvas);
// Code final à utiliser pour manipuler Pencil.
var pencil = new Pencil(ctx, drawing, canvas);
//drawing.paint(ctx, canvas);


function removeForm(index) {
  drawing.formes.splice(index, 1);
  pencil.updateShapeList();
  drawing.paint(ctx,canvas);
  console.log("remove : "+index);
}
