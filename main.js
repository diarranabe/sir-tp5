
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD
new DnD(canvas);
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////

// Code temporaire pour tester l'affiche de la vue
var rec = new Rectangle(10, 20, 50, 100, 5, 'red');
// rec.paint(ctx);
var ligne = new Line(20, 20, 300, 100, 5, '#000AAA');
// ligne.paint(ctx);
// tester également Dessin.

var drawing = new Drawing();
drawing.formes.push(rec);
drawing.formes.push(ligne);
drawing.paint(ctx, canvas);
// Code final à utiliser pour manipuler Pencil.
//var drawing = new Drawing();
//var pencil = new Pencil(ctx, drawing, canvas);
//drawing.paint(ctx, canvas);

