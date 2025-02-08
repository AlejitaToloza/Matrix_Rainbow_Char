// Obtener el canvas y el contexto de dibujo
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Tamaño de la fuente y número de columnas
const fontSize = 20; // Tamaño de la fuente
const columns = (canvas.width / fontSize); // Número de columnas basado en el ancho del canvas
const drops = Array(columns).fill(1); // Inicializar las posiciones de las gotas

// Función para dibujar el efecto Matrix
function drawMatrix() {
    // Fondo negro con transparencia para crear el efecto de desvanecimiento
    ctx.fillStyle = 'rgba(139, 226, 223, 0.9)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Establecer el color de los caracteres desde el color picker
    ctx.fillStyle = document.getElementById('colorPicker').value; // Obtener el color del selector
    ctx.font = `${fontSize}px monospace`; // Establecer la fuente

    // Dibujar los caracteres en cada columna
    for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(Math.random() * 128); // Generar un carácter aleatorio
        const x = i * fontSize; // Posición horizontal de la columna
        const y = drops[i] * fontSize; // Posición vertical de la gota

        ctx.fillText(text, x, y); // Dibujar el carácter en el canvas

        // Reiniciar la posición de la gota aleatoriamente
        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0; // Reiniciar la gota al inicio
        }

        // Incrementar la posición de la gota
        drops[i]++; // Mover la gota hacia abajo
    }
}

// Función para cambiar el color de la fuente
function setFontColor(color) {
    // Cambiar el color de la fuente
    ctx.fillStyle = color; 
}

// Ejecutar la función drawMatrix a intervalos regulares
setInterval(drawMatrix, 80); // Llamar a la función cada 100 ms


export {setFontColor}; // Exportar la función setFontColor
export default drawMatrix; // Exportar la función drawMatrix