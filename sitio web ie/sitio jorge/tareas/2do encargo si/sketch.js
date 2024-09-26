let circles = [];
let growRate = 1;
let maxCanvasSize;
let gridSize = 5; // Número de columnas y filas

function setup() {
  createCanvas(400, 400);
  noStroke();
  maxCanvasSize = width;

  // paleta de colores 
  let colors = [
    color(128, 0, 32),   // Burdeos oscuro
    color(139, 0, 0),    // Granate
    color(153, 50, 204), // Tonalidad burdeos más clara
    color(255, 0, 0)     // Rojo intenso
  ];

  // 
  let step = width / gridSize;
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      circles.push({
        x: col * step + step / 2, // Posición X del centro del círculo
        y: row * step + step / 2, // Posición Y del centro del círculo
        size: 0,
        maxSize: step, // Tamaño máximo del círculo
        color: random(colors), // Color aleatorio de la paleta
        growing: true // Indica si el círculo está creciendo
      });
    }
  }
}

function draw() {
  background(255);

  //  círculos
  for (let i = 0; i < circles.length; i++) {
    let circ = circles[i];

    // Si el círculo está creciendo
    if (circ.growing) {
      circ.size += growRate;

      // Dibuja el círculo en su posición
      fill(circ.color);
      ellipse(circ.x, circ.y, circ.size, circ.size);

      // Cuando el círculo alcanza el tamaño máximo, deja de crecer
      if (circ.size >= circ.maxSize) {
        circ.growing = false;
      }
    } else {
      // Si no está creciendo, lo reiniciamos después de un tiempo
      if (frameCount % 100 === 1) { // Reinicia después de 1 segundo
        circ.size = 0;
        circ.color = random([
          color(128, 0, 32),   // Burdeos oscuro
          color(139, 0, 0),    // Granate
          color(153, 50, 204), // Tonalidad burdeos más clara
          color(255, 0, 0)     // Rojo intenso
        ]);
        circ.growing = true;
      }
    }
  }
}