let maxLevel = 3;  // Defino el nivel máximo de recursión
let baseSize = 100;  // Establezco el tamaño base para el triángulo más grande
let numTriangles = 8;  // Decido cuántos sub-triángulos voy a tener por nivel

function setup() {
  createCanvas(windowWidth, windowHeight);  // Creo un lienzo que ocupa toda la ventana
  noFill();  // No quiero relleno en mis triángulos
}

function draw() {
  angleMode(DEGREES);  // Cambio el modo de ángulo a grados
  
  background(0, 15);  // Dibujo un fondo semitransparente

  translate(width / 2, height / 2);  // Canto el origen en el centro del canvas

  // Muevo el fractal según la posición del mouse
  let t = map(mouseX, 0, width, 0, 360);  // Relaciono el movimiento del mouse con el ángulo
  let scaleFactor = map(mouseY, 0, height, 0.1, 1.5);  // Ajusto el tamaño con el mouseY

  fractalTriangle(baseSize * scaleFactor, maxLevel, t);  // Ingreso al fractal triangular
}

// Esta función me ayuda a dibujar los triángulos fractales
function fractalTriangle(size, level, t) {
  // Cambio el color de los triángulos en tonos de rojo
  stroke(map(level, 0, maxLevel, 150, 255), 0, 0);  // Variación en la intensidad del rojo
  strokeWeight(1);  // Elijo que los bordes sean más delgados
  
  // Dibujo el triángulo
  beginShape();
  vertex(0, -size / sqrt(3)); // Coloco el vértice superior
  vertex(-size / 2, size / (2 * sqrt(3))); // Vértice inferior izquierdo
  vertex(size / 2, size / (2 * sqrt(3))); // Vértice inferior derecho
  endShape(CLOSE);

  if (level > 0) {
    let angle = 360 / numTriangles;  // Divido el triángulo en más segmentos
    let newSize = size * 0.6;  // Reduzco el tamaño de los sub-triángulos

    for (let i = 0; i < numTriangles; i++) {
      let x = cos(angle * i + t) * (size * 0.6);  // Muevo los triángulos alrededor
      let y = sin(angle * i + t) * (size * 0.6);
      push();
      translate(x, y);  // Muevo a la posición del sub-triángulo
      fractalTriangle(newSize, level - 1, t);  // Llamo a la función para dibujar sub-triángulos
      pop();
    }
  }
}