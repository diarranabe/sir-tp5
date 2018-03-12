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
drawing.formes.push(rec);
// drawing.formes.push(ligne);
drawing.formes.push(ligne2);
drawing.formes.push(circle);
drawing.paint(ctx, canvas);

// Code final à utiliser pour manipuler Pencil.
var pencil = new Pencil(ctx, drawing, canvas);

function removeForm(index) {
  // Add shape and action to undoRedo list
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
    case editingMode.circle:
      pencil.currEditingMode = index;
      break;
  }
}

// Use that for polygom
// Isue : how to change shape type?
/*ctx.beginPath();

var a =0;
var b =100;
var c =150;
var d =100;

ctx.moveTo(a+(c+a)/3, a+(c+a)/3);//75,50
ctx.lineTo(c-((a+(c+a)/3)), 50);//175,50

ctx.lineTo(150, 100);//200,75 sommet
ctx.lineTo(100, 150);//175,100

ctx.lineTo(50, 150);//75,100
ctx.lineTo(0, 100);//50,75 init
ctx.lineTo(50, 50);//50,75

ctx.closePath();
ctx.fillStyle = "green";
ctx.stroke();*/
