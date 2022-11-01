window.addEventListener('load',function(){
    /**
     * @obs Acá podés utilizar un array de ids en vez de crearte tantas clases distintas.
     * Esto simplifica tu html, tu css y tu javascript.
     * Luego hacés un bucle en los ids y creas los carouseles adentro de cada iteración del bucle "forEach"
    */
    const carruseles = ['#carrusel1', '#carrusel2', '#carrusel3', '#carrusel4'];
    carruseles.forEach(carruselId => {
        new Glider(document.querySelector(carruselId + ' .carrusel__lista'),{
            slidesToScroll: 1,
            slidesToShow: 1,
            draggable: true,
            dots: carruselId + ' .carrusel__indicador',
            arrows: {
                prev: carruselId + ' .carousel__anterior',
                next: carruselId + ' .carousel__siguiente'
            },
            responsive: [
                {

                    breakpoint: 400,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll:2,

                }
                },{
                    breakpoint: 800,
                    settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,

                }
                }
            ]
        });
    })
});
