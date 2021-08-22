$(document).ready(() =>{

    const slickOptions = {
        autoplay:true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow:`<button type="button" class="slick-prev slider-prev">Previous</button>;`,
        nextArrow:`<button type="button" class="slick-next slider-next">Previous</button>;`,
        
    };

  $(".sliderBase").slick(slickOptions);


});