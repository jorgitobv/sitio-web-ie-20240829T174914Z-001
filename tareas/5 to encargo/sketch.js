let hearts = [];
let diamonds = [];

function setup() {
  createCanvas(500, 500);
  noStroke();
  
  // Crear múltiples corazones y diamantes
  for (let i = 0; i < 5; i++) {
    hearts.push(new Heart(random(width), random(height)));
    diamonds.push(new Diamond(random(width), random(height)));
  }
}

function draw() {
  background(127, 23, 52); // Color de fondo rojo
  
  // Mostrar y actualizar corazones
  for (let heart of hearts) {
    heart.update();
    heart.display();
  }

  // Mostrar y actualizar diamantes
  for (let diamond of diamonds) {
    diamond.update();
    diamond.display();
  }
}

// Clase para corazones
class Heart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(15, 30);
    this.angle = random(TWO_PI);
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(-1, 1);
  }
  
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // Rebotar en los bordes
    if (this.x > width || this.x < 0) {
      this.xSpeed *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed *= -1;
    }
  }
  
  display() {
    fill(255); // Color blanco
    beginShape();
    vertex(this.x, this.y);
    bezierVertex(this.x - this.size / 2, this.y - this.size / 2, this.x - this.size / 2, this.y + this.size / 2, this.x, this.y + this.size);
    bezierVertex(this.x + this.size / 2, this.y + this.size / 2, this.x + this.size / 2, this.y - this.size / 2, this.x, this.y);
    endShape(CLOSE);
  }
}

// Clase para diamantes
class Diamond {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(20, 40);
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(-1, 1);
  }
  
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // Rebotar en los bordes
    if (this.x > width || this.x < 0) {
      this.xSpeed *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed *= -1;
    }
  }
  
  display() {
    fill(0); // Color negro
    beginShape();
    vertex(this.x, this.y - this.size / 2);
    vertex(this.x + this.size / 2, this.y);
    vertex(this.x, this.y + this.size / 2);
    vertex(this.x - this.size / 2, this.y);
    endShape(CLOSE);
  }
}
