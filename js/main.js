// Espera a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los enlaces dentro de la lista de la barra lateral
    var sidebarLinks = document.querySelectorAll('.sidebar .nav-link');

    // Función para remover la clase 'active' de todos los elementos
    function removeActiveClasses() {
      sidebarLinks.forEach(function (link) {
        link.classList.remove('active');
      });
    }

    // Añade un evento de clic a cada enlace
    sidebarLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        // Remueve la clase 'active' de todos los enlaces
        removeActiveClasses();
        // Añade la clase 'active' al enlace clickeado
        this.classList.add('active');
      });
    });
  });