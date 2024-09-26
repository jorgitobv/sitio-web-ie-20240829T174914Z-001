function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");

  // Configuración general
  strokeWeight(2);
  noFill();

  // Marco
  strokeWeight(4);
  stroke("cyan");
  line(0, 0, 400, 0);     // Línea superior
  line(0, 0, 0, 400);     // Línea izquierda
  line(400, 0, 400, 400); // Línea derecha
  line(0, 400, 400, 400); // Línea inferior

  // Sección A (izquierda arriba)
  strokeWeight(2);
  stroke("magenta");
  rect(30, 30, 140, 140); // Cambiado a 140x140
  stroke("yellow");
  rect(60, 60, 100, 100); // Cambiado a 100x100
  stroke("cyan");
  rect(90, 90, 60, 60);   // Cambiado a 60x60
  stroke("red");
  rect(120, 120, 30, 30); // Cambiado a 30x30

  // Sección B (derecha arriba)
  strokeWeight(2);
  stroke("magenta");
  rect(220, 30, 140, 140); // Cambiado a 140x140
  stroke("yellow");
  rect(250, 60, 100, 100); // Cambiado a 100x100
  stroke("cyan");
  rect(280, 90, 60, 60);   // Cambiado a 60x60
  stroke("red");
  rect(310, 120, 30, 30); // Cambiado a 30x30

  // Sección C (izquierda abajo)
  strokeWeight(2);
  stroke("magenta");
  rect(30, 220, 140, 140); // Cambiado a 140x140
  stroke("red");
  rect(60, 250, 100, 100); // Cambiado a 100x100
  stroke("yellow");
  rect(90, 280, 60, 60);   // Cambiado a 60x60
  stroke("cyan");
  rect(120, 310, 30, 30); // Cambiado a 30x30

  // Sección D (derecha abajo)
  strokeWeight(2);
  stroke("magenta");
  rect(220, 220, 140, 140); // Cambiado a 140x140
  stroke("green");
  rect(250, 250, 100, 100); // Cambiado a 100x100
  stroke("yellow");
  rect(280, 280, 60, 60);   // Cambiado a 60x60
  stroke("cyan");
  rect(310, 310, 30, 30); // Cambiado a 30x30
}