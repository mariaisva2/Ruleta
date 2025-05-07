const acciones = ["Baila un minuto", "Canta una canción", "Cuenta un chiste", "Haz una imitación"];
let angulo = 0;

function girarRuleta() {
  const giros = 360 * 5; // varias vueltas
  const anguloExtra = Math.floor(Math.random() * 360); // ángulo final aleatorio
  angulo += giros + anguloExtra;

  document.getElementById("wheel").style.transform = `rotate(${angulo}deg)`;

  // calcular cuál fue la sección ganadora
  setTimeout(() => {
    const finalAngle = angulo % 360;
    const index = Math.floor(finalAngle / (360 / acciones.length));
    const accionElegida = acciones[acciones.length - 1 - index]; // invertir para dirección
    document.getElementById("resultado").innerText = `👉 ${accionElegida}`;
  }, 4000);
}
