document.addEventListener('DOMContentLoaded', function() {
  cambiarImagen(0);
});

const imagenes = document.querySelectorAll('.imagenes img');
let imagenActual = 0;

function cambiarImagen(direccion) {
  imagenActual += direccion;

  if (imagenActual < 0) {
    imagenActual = imagenes.length - 1;
  } else if (imagenActual >= imagenes.length) {
    imagenActual = 0;
  }

  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = 'none';
  }

  imagenes[imagenActual].style.display = 'block';
}
