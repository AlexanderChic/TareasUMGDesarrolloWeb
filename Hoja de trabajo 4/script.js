
// Arreglo de nombres
const nombres = [
    "Ana López", "Carlos Pérez", "María Gómez", "Luis Hernández", "Sofía Ramírez",
    "José Martínez", "Paula Torres", "Andrés Castillo", "Lucía Fernández", "Miguel Díaz"
];

// Arreglo de comentarios
const comentarios = [
    "La experiencia fue increíble, definitivamente volveré.",
    "El guía fue muy amable y conocedor del lugar.",
    "Las actividades fueron muy divertidas y bien organizadas.",
    "La comida típica estuvo deliciosa.",
    "Un viaje perfecto para relajarse y disfrutar.",
    "Todo estuvo muy limpio y bien cuidado.",
    "La atención del personal fue excelente.",
    "Aprendí mucho sobre la cultura local.",
    "El transporte fue cómodo y puntual.",
    "Las vistas son impresionantes, recomiendo venir."
];

// Imagen de usuario genérica
const imagenUsuario = "https://cdn-icons-png.flaticon.com/512/847/847969.png";


// Función para obtener elementos aleatorios sin repetir
function obtenerAleatorios(arr, cantidad) {
    const copia = [...arr];
    const seleccionados = [];
    for (let i = 0; i < cantidad; i++) {
        const indice = Math.floor(Math.random() * copia.length);
        seleccionados.push(copia.splice(indice, 1)[0]);
    }
    return seleccionados;
}

// Generar y mostrar 3 comentarios con nombres e imagen
function mostrarComentarios() {
    const nombresAleatorios = obtenerAleatorios(nombres, 3);
    const comentariosAleatorios = obtenerAleatorios(comentarios, 3);
    const contenedor = document.getElementById("comentarios-container");

    contenedor.innerHTML = "";

    for (let i = 0; i < 3; i++) {
        contenedor.innerHTML += `
            <div class="col-md-4">
                <div class="card shadow-sm h-100 text-center p-3">
                    <img src="${imagenUsuario}" alt="Usuario" class="rounded-circle mx-auto mb-3" width="80" height="80">
                    <h5 class="card-title">${nombresAleatorios[i]}</h5>
                    <p class="card-text">"${comentariosAleatorios[i]}"</p>
                </div>
            </div>
        `;
    }
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", mostrarComentarios);


function mostrarItinerario(tipo) {
    // Ocultar todas las tablas
    document.getElementById("tabla-playa").style.display = "none";
    document.getElementById("tabla-montana").style.display = "none";
    document.getElementById("tabla-cultural").style.display = "none";

    // Mostrar solo la tabla seleccionada
    document.getElementById(`tabla-${tipo}`).style.display = "table";
}


// ===== 2. MANIPULACIÓN DEL DOM =====
// Botón que agrega actividades dinámicamente
const btnAgregar = document.getElementById("btnAgregarActividad");
const listaActividades = document.getElementById("listaActividades");

if (btnAgregar) {
    btnAgregar.addEventListener("click", () => {
        const nuevaActividad = document.createElement("li");
        nuevaActividad.className = "list-group-item";
        nuevaActividad.textContent = "Nueva actividad agregada en " + new Date().toLocaleTimeString();
        listaActividades.appendChild(nuevaActividad);
    });
}

// ===== 3. INTERACCIÓN CON MODAL =====
const formContacto = document.getElementById("formContacto");
const modalResultado = document.getElementById("modalResultado");
const modalBody = document.getElementById("modalBody");

if (formContacto) {
    formContacto.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Obtener datos del formulario
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;

        // Mostrar en el modal
        modalBody.innerHTML = `
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong> ${mensaje}</p>
        `;

        // Abrir modal (Bootstrap 5)
        const modal = new bootstrap.Modal(modalResultado);
        modal.show();

        // Limpiar formulario
        formContacto.reset();
    });
}
