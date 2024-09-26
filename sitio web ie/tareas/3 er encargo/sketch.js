let numLines = 200;  // Número de líneas en cada espiral
let maxRadius;

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  maxRadius = min(width, height) * 0.4;  // Radio máximo del espiral
  noFill();
  strokeWeight(1);  // Grosor de las líneas
}

function draw() {
  background(0);  // Fondo negro
  translate(width / 2, height / 2);  // Mover origen al centro del canvas
  
  let angleStep = 360 / numLines;  // Paso del ángulo entre cada línea
  let radiusStep = maxRadius / numLines;  // Incremento del radio entre cada línea
  
  for (let i = 0; i < numLines; i++) {
    let radius = i * radiusStep;  // Radio en aumento para el efecto
    
    // Espiral 1: Rotación normal
    let angle1 = i * angleStep + frameCount * 2;
    let x1_1 = cos(angle1) * radius;
    let y1_1 = sin(angle1) * radius;
    let x2_1 = cos(angle1 + 30) * (radius + 10);
    let y2_1 = sin(angle1 + 30) * (radius + 10);
    
    // Espiral 2: Rotación inversa
    let angle2 = -i * angleStep - frameCount * 2;
    let x1_2 = cos(angle2) * radius;
    let y1_2 = sin(angle2) * radius;
    let x2_2 = cos(angle2 - 30) * (radius + 10);
    let y2_2 = sin(angle2 - 30) * (radius + 10);
    
    // Espiral 3: Rotación con desplazamiento de 90 grados
    let angle3 = i * angleStep + frameCount * 1.5 + 90;
    let x1_3 = cos(angle3) * radius;
    let y1_3 = sin(angle3) * radius;
    let x2_3 = cos(angle3 + 30) * (radius + 10);
    let y2_3 = sin(angle3 + 30) * (radius + 10);
    
    // Espiral 4: Rotación con desplazamiento de 90 grados y dirección inversa
    let angle4 = -i * angleStep - frameCount * 1.5 - 90;
    let x1_4 = cos(angle4) * radius;
    let y1_4 = sin(angle4) * radius;
    let x2_4 = cos(angle4 - 30) * (radius + 10);
    let y2_4 = sin(angle4 - 30) * (radius + 10);
    
    // Cambiar el color gradualmente para cada espiral (tonalidades lilas y cian)
    let t = map(i, 0, numLines, 0, 1);  // Interpolación para el color
    let color1 = lerpColor(color(150, 100, 255), color(0, 255, 255), t);  // Lila a cian
    let color2 = lerpColor(color(180, 130, 255), color(50, 255, 255), t);  // Lila a cian
    let color3 = lerpColor(color(200, 150, 255), color(100, 255, 255), t);  // Lila a cian
    let color4 = lerpColor(color(220, 170, 255), color(150, 255, 255), t);  // Lila a cian
    
    // Dibujar la primera espiral
    stroke(color1);
    line(x1_1, y1_1, x2_1, y2_1);
    
    // Dibujar la segunda espiral
    stroke(color2);
    line(x1_2, y1_2, x2_2, y2_2);
    
    // Dibujar la tercera espiral
    stroke(color3);
    line(x1_3, y1_3, x2_3, y2_3);
    
    // Dibujar la cuarta espiral
    stroke(color4);
    line(x1_4, y1_4, x2_4, y2_4);
  }
}
