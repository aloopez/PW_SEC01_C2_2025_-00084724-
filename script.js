// Alternar columnas/filas en Contenido del libro
document.getElementById('btnAlternarColumnas').onclick = function() {
	const cols = document.getElementById('detalleCols');
	cols.classList.toggle('filas');
};

// Cambiar título de la página
document.getElementById('btnCambiarTitulo').onclick = function() {
	document.querySelector('h1').textContent = 'HTML & CSS: Curso práctico avanzado';
};

// Cambiar color de subtítulo y párrafo de descripción
document.getElementById('btnCambiarColor').onclick = function() {
	const subtitulo = document.getElementById('subtitulo-descripcion');
	const parrafo = document.getElementById('parrafo-descripcion');
	subtitulo.style.color = '#e67e22';
	parrafo.style.color = '#16a085';
};

// Agregar imagen debajo de los datos del libro
document.getElementById('btnAgregarImagen').onclick = function() {
	const contenedor = document.getElementById('contenedorImagen');
	if (!contenedor.querySelector('img')) {
		const img = document.createElement('img');
		img.src = 'https://image.cdn1.buscalibre.com/5b57fc1690f0b5295a8b4567.__RS360x360__.jpg';
		img.alt = 'Portada El Principito';
		img.style.width = '100%';
		img.style.maxWidth = '180px';
		img.style.margin = '15px auto 0 auto';
		img.style.display = 'block';
		img.style.borderRadius = '8px';
		img.style.boxShadow = '0 2px 8px rgba(0,0,0,0.12)';
		contenedor.appendChild(img);
	}
};
