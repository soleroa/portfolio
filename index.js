/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */
 document.addEventListener("DOMContentLoaded", () => {
  const resumeBtn = document.querySelector(".resume-btn");
  const resumeOptions = document.querySelector(".resume-options");

  resumeBtn.addEventListener("click", () => {
    // Alternar la visibilidad de las opciones
    resumeOptions.style.display =
      resumeOptions.style.display === "block" ? "none" : "block";
  });

  // Cierra el menú si haces clic fuera
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".resume-dropdown")) {
      resumeOptions.style.display = "none";
    }
  });
});

 document.addEventListener("DOMContentLoaded", () => {
  const typewriter = document.querySelector(".typewriter");
  const text = "Soledad Roa"; // Texto que será animado
  let index = 0;
  let isDeleting = false;

  function type() {
    if (!isDeleting && index <= text.length) {
      // Escribir texto
      typewriter.textContent = text.substring(0, index + 1);
      index++;
      setTimeout(type, 200); // Velocidad de escritura (ajustar aquí)
    } else if (isDeleting && index >= 0) {
      // Borrar texto
      typewriter.textContent = text.substring(0, index);
      index--;
      setTimeout(type, 100); // Velocidad de borrado (ajustar aquí)
    } else {
      // Pausa al final antes de cambiar de escribir a borrar y viceversa
      isDeleting = !isDeleting;
      setTimeout(type, 1500); // Pausa al terminar de escribir o borrar
    }
  }

  type(); // Iniciar la animación
});

 const handleFirstTab = (e) => {
    if(e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing')
  
      window.removeEventListener('keydown', handleFirstTab)
      window.addEventListener('mousedown', handleMouseDownOnce)
    }
  
  }
  
  const handleMouseDownOnce = () => {
    document.body.classList.remove('user-is-tabbing')
  
    window.removeEventListener('mousedown', handleMouseDownOnce)
    window.addEventListener('keydown', handleFirstTab)
  }
  
  window.addEventListener('keydown', handleFirstTab)
  
  const backToTopButton = document.querySelector(".back-to-top");
  let isBackToTopRendered = false;
  
  let alterStyles = (isBackToTopRendered) => {
    backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
    backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
    backToTopButton.style.transform = isBackToTopRendered
      ? "scale(1)"
      : "scale(0)";
  };
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      isBackToTopRendered = true;
      alterStyles(isBackToTopRendered);
    } else {
      isBackToTopRendered = false;
      alterStyles(isBackToTopRendered);
    }
  });