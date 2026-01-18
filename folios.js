// folios.js

const baseDeDatosFolios = {
    // Asegúrate de que el folio (la llave) sea idéntico al que pondrás en el QR
    "8D2EF0B6-EFB2-4461-9971-2DE64EAA5777": { 
        nombre: "BELEN CAROLINA OLIVARES ALVAREZ", 
        carrera: "LICENCIATURA EN PSICOLOGÍA", 
        nivel: "LICENCIATURA", 
        institucion: "UNIVERSIDAD LATINOAMERICANA CAMPUS VALLE" 
    },
    "OTRO-FOLIO-AQUI": {
        nombre: "NOMBRE DEL ALUMNO",
        carrera: "CARRERA EJEMPLO",
        nivel: "LICENCIATURA",
        institucion: "INSTITUCIÓN EJEMPLO"
    }
    // Repite para tus 50 folios
};

function ejecutarBusqueda(event) {
    if (event) event.preventDefault();
    const folioInput = document.getElementById("folioSEP").value.trim();
    const busqueda = document.getElementById("seccion-busqueda");
    const resultado = document.getElementById("seccion-resultado");
    const leyendaDgair = document.getElementById("leyenda-dgair");

    if (baseDeDatosFolios[folioInput]) {
        const data = baseDeDatosFolios[folioInput];
        
        // Inyecta los datos en los IDs correspondientes del HTML
        document.getElementById("res-nombre").innerText = data.nombre;
        document.getElementById("res-carrera").innerText = data.carrera;
        document.getElementById("res-nivel").innerText = data.nivel;
        document.getElementById("res-folio").innerText = folioInput;
        document.getElementById("res-institucion").innerText = data.institucion;

        // Muestra los elementos de la consulta
        leyendaDgair.style.display = "block";
        busqueda.style.display = "none";
        resultado.style.display = "block";
    } else if (folioInput !== "") {
        alert("Folio no encontrado.");
    }
    return false;
}

// Lógica para detectar el folio desde el QR (URL) al cargar
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const folioQR = params.get('folio');

    if (folioQR) {
        document.getElementById("folioSEP").value = folioQR;
        ejecutarBusqueda();
    }
};
