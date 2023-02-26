import Alpine from 'alpinejs'

window.Alpine = Alpine


document.addEventListener('alpine:init', ()=>{
    //store variable globally
    Alpine.store('sidebar' , {
        full:true,
        active: 'home',
        navOpen: false
    });
});

Alpine.start()