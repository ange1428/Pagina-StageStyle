(function(){
    "use strict";
    /**Menu hamburguesa mostrar icono y ocultar */
    document.addEventListener('click', function(e) {
        if(e.target.classList.contains('mobile-nav-toggle')){
            document.querySelector('#navbar').classList.toggle('navbar-mobile');   
            e.target.classList.toggle('bx-menu');
            e.target.classList.toggle('bx-x');
        }
    });
    /**Mostrar menu responsivo */
    window.addEventListener('load',function(){
        let todoContainer = document.querySelector('.todo-container');
        if(todoContainer){
            let todoIsotope = new Isotope(todoContainer,{
                itemSelector: '.todo-item',
                layoutMode: 'fitRows'
            });
            let todoFilters = document.querySelectorAll('#todo-filters li');
            todoFilters.forEach(function(menuFilter){
                menuFilter.addEventListener('click',function(e){
                    e.preventDefault();
                    todoFilters.forEach(function(filter){
                        filter.classList.remove('filter-active');
                    });
                    this.classList.add('filter-active');
                    todoIsotope.arrange({
                        filter: this.getAttribute('data-filter')
                    });
                })
            })
        }
    });
    /**Swiper eventos */
    const swiper = new Swiper('.swiper', {
        loop: true,
        speed:600,
        autoplay:{
            delay:5000,
            disableOnInteraction:false
        },
        pagination: {
          el: '.swiper-pagination',
          type:'bullets',
          clickable: true
        },     
      });
      /**Swiper testimonios */
      const swiperTestimonials = new Swiper('.testimonials-slider', {
        loop: true,
        speed:600,
        autoplay:{
            delay:5000,
            disableOnInteraction:false
        },
        slidesPerView:'auto',
        pagination: {
          el: '.swiper-pagination',
          type:'bullets',
          clickable: true
        },     
      });
      /**Iniciar galeria */
      const galleryLightbox = GLightbox ({
        selector: '.gallery-lightbox'
      });
      /**Regresar al inicio */
      

})();