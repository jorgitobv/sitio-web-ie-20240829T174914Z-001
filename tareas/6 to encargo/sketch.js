let particles = [];
let particleCount = 100; // Cantidad de partículas por explosión

function setup() {
  createCanvas(800, 800); // Lienzo de 800x800 píxeles.
}

function draw() {
  background(0, 50); // Fondo negro con un poco de transparencia para el efecto de estela.

  // Actualizar y mostrar las partículas
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update(); // Actualizo la posición de la partícula.
    particles[i].display(); // La muestro en pantalla.

    // Eliminar partículas que han terminado su vida
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}

function mousePressed() {
  // Crear un grupo de partículas cuando se presiona el mouse
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(mouseX, mouseY)); // Las partículas se generan en el mouse.
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y); // Posición inicial en el mouse.
    this.vel = p5.Vector.random2D().mult(random(0.5, 2)); // Velocidad suave para la flotación.
    this.size = random(5, 15); // Tamaño aleatorio.
    this.alpha = 255; // Opacidad inicial.
    this.color = color(random(255), random(255), random(255)); // Color aleatorio.
    this.shape = random(['circle', 'square', 'triangle', 'diamond']); // Forma aleatoria.
  }

  update() {
    // Comprobar si el mouse está cerca
    let distance = dist(this.pos.x, this.pos.y, mouseX, mouseY);
    if (distance < 100) {
      // Calcular dirección opuesta al mouse para repeler
      let angleToMouse = atan2(this.pos.y - mouseY, this.pos.x - mouseX);
      let repelForce = createVector(cos(angleToMouse), sin(angleToMouse)).mult(3); // Fuerza de repulsión
      this.pos.add(repelForce); // Aplico la repulsión
    }

    this.pos.add(this.vel); // Actualizo la posición suavemente.
    this.alpha -= 0.5; // Disminuyo la opacidad lentamente para que las partículas se mantengan más tiempo.
  }

  finished() {
    return this.alpha < 0; // Retorno verdadero si la opacidad es menor a 0.
  }

  display() {
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.alpha); // Aplico la opacidad.
    noStroke();

    // Dibujo la forma según el tipo
    if (this.shape === 'circle') {
      ellipse(this.pos.x, this.pos.y, this.size); // Dibujo un círculo
    } else if (this.shape === 'square') {
      rect(this.pos.x, this.pos.y, this.size, this.size); // Dibujo un cuadrado
    } else if (this.shape === 'triangle') {
      triangle(this.pos.x, this.pos.y - this.size / 2, 
               this.pos.x - this.size / 2, this.pos.y + this.size / 2, 
               this.pos.x + this.size / 2, this.pos.y + this.size / 2); // Dibujo un triángulo
    } else if (this.shape === 'diamond') {
      this.drawDiamond(); // Dibujo un rombo
    }
  }

  drawDiamond() {
    beginShape();
    vertex(this.pos.x, this.pos.y - this.size / 2);
    vertex(this.pos.x + this.size / 2, this.pos.y);
    vertex(this.pos.x, this.pos.y + this.size / 2);
    vertex(this.pos.x - this.size / 2, this.pos.y);
    endShape(CLOSE);
  }
}
