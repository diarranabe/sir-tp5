// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Forme.prototype.paint = function (ctx) {
  ctx.beginPath();
  ctx.lineWidth = this.epaisseur;
  ctx.strokeStyle = this.couleur;
};

Rectangle.prototype.paint = function (ctx) {
  ctx.beginPath();
  ctx.lineWidth = this.epaisseur;
  ctx.strokeStyle = this.couleur;
  ctx.rect(this.x, this.y, this.largeur, this.hauteur);
  ctx.stroke();
};

Line.prototype.paint = function (ctx) {
  ctx.beginPath();
  ctx.lineWidth = this.epaisseur;
  ctx.strokeStyle = this.couleur;
  ctx.moveTo(this.xa, this.ya);
  ctx.lineTo(this.xb, this.yb);
  ctx.stroke();
};


Drawing.prototype.paint = function(ctx, canvas) {
  console.log(this.formes);
  ctx.fillStyle = '#F0F0F0'; // set canvas' background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  this.formes.forEach(function(eltDuTableau) {
      eltDuTableau.paint(ctx);
  });
};
