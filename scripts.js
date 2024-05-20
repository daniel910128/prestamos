document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reservaForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los datos del formulario
        const nombre = document.getElementById('nombre').value;
        // const email = document.getElementById('email').value; // Elimina esta línea
        const equipo = document.getElementById('equipo').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;

        // Mostrar mensaje de confirmación
        const mensaje = document.getElementById('mensaje');
        mensaje.textContent = `Reserva confirmada para ${nombre} el ${fecha} a las ${hora} para el equipo ${equipo}.`;

        // Actualizar la disponibilidad (simulación)
        const disponibilidad = document.getElementById('disponibilidad');
        const nuevoRegistro = document.createElement('p');
        nuevoRegistro.textContent = `${equipo} reservado por ${nombre} el ${fecha} a las ${hora}.`;
        disponibilidad.appendChild(nuevoRegistro);

        // Limpiar el formulario
        document.getElementById('reservaForm').reset();
    });
});