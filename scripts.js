
//Ejecutando funciones
document.getElementById("Lupa").addEventListener("click",mostrar_buscador);
document.getElementById("recuadroBars").addEventListener("click",ocultar_buscador);

// ------------------ Buscador de contenido

//Declarando variables
barraBuscar= document.getElementById("ctn-bars-search");
recuadroBuscar= document.getElementById("recuadroBars");
inputBuscar= document.getElementById("inputBuscar");
cajaBuscar= document.getElementById("listaBars");

//Función para mostrar el buscador

function mostrar_buscador(){
    barraBuscar.style.top = "80px";
    recuadroBuscar.style.display ="block";
    inputBuscar.focus();
}

// Función para ocultar buscador
function ocultar_buscador(){
    barraBuscar.style.top = "-10px";
     recuadroBuscar.style.display ="none";
     inputBuscar.value = "";
}
//----------------------------------------------------------------------------
//formulario : validacion de correo
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('emailForm');
  const nombre = document.getElementById('nombre');
  const correo = document.getElementById('correo');
  const comentario = document.getElementById('comentario');

  const nombreError = document.getElementById('nombreError');
  const emailError = document.getElementById('emailError');
  const comentarioError = document.getElementById('comentarioError');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validación en tiempo real
  nombre.addEventListener('input', () => {
    nombre.value = nombre.value.trim();
    if (nombre.value === '') {
      nombreError.textContent = 'El nombre es obligatorio';
      nombre.classList.add('invalid');
    } else {
      nombreError.textContent = '';
      nombre.classList.remove('invalid');
    }
  });

  correo.addEventListener('input', () => {
    const v = correo.value.trim();
    if (v === '') {
      emailError.textContent = 'El correo es obligatorio';
      correo.classList.add('invalid');
    } else if (!emailRegex.test(v)) {
      emailError.textContent = 'Formato de correo no válido';
      correo.classList.add('invalid');
    } else {
      emailError.textContent = '';
      correo.classList.remove('invalid');
    }
  });

  comentario.addEventListener('input', () => {
    comentario.value = comentario.value.trim();
    if (comentario.value === '') {
      comentarioError.textContent = 'La consulta es obligatoria';
      comentario.classList.add('invalid');
    } else {
      comentarioError.textContent = '';
      comentario.classList.remove('invalid');
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Disparas input para actualizar errores
    nombre.dispatchEvent(new Event('input'));
    correo.dispatchEvent(new Event('input'));
    comentario.dispatchEvent(new Event('input'));

    const nombreOk = nombre.value !== '';
    const emailOk = correo.value !== '' && emailRegex.test(correo.value);
    const comentarioOk = comentario.value !== '';

    if (nombreOk && emailOk && comentarioOk) {
      alert('Formulario enviado ');
      form.submit();
    } else {
      if (!emailOk) correo.value = '';       // Limpia sólo correo si está mal
      if (!nombreOk || !comentarioOk) form.reset(); // si falta nombre o comentario, se borran todos
    }
  });
});
