window.addEventListener('load',function(){
    new Glider(document.querySelector('.carrusel__lista',),{
        slidesToScroll: 1,
        slidesToShow: 1,
        draggable: true,
        dots: '.carrusel__indicador',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
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

});
window.addEventListener('load',function(){
    new Glider(document.querySelector('.carrusel__lista1',),{
        slidesToScroll: 1,
        slidesToShow: 1,
        draggable: true,
        dots: '.carrusel__indicador1',
        arrows: {
            prev: '.carousel__anterior1',
            next: '.carousel__siguiente1'
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

});
window.addEventListener('load',function(){
    new Glider(document.querySelector('.carrusel__lista2'),{
        slidesToScroll: 1,
        slidesToShow: 1,
        draggable: true,
        dots: '.carrusel__indicador2',
        arrows: {
            prev: '.carousel__anterior2',
            next: '.carousel__siguiente2'
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

});
window.addEventListener('load',function(){
    new Glider(document.querySelector('.carrusel__lista3'),{
        slidesToScroll: 1,
        slidesToShow: 1,
        draggable: true,
        dots: '.carrusel__indicador3',
        arrows: {
            prev: '.carousel__anterior3',
            next: '.carousel__siguiente3'
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

});




