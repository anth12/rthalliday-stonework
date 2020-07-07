
WOW = require('wow.js')

// COUNTDOWN
$('#countdown').countdown('2018/10/10', function(event) {
  var $this = $(this).html(event.strftime(''
//+ '<li><span>%w</span> weeks</li> '
    + '<li><span>%D</span> days</li> '
    + '<li><span>%H</span> hr</li> '
    + '<li><span>%M</span> min</li> '
    + '<li><span>%S</span> sec</li>'));
});


// initialize and configuration for wow js - animations
wow = new WOW({
    animateClass: 'animated',
    offset: 150,
    mobile: false,
    callback: function(box) {
        //console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();

// initialize tooltips and popovers
$(function () {
$('[data-toggle="tooltip"]').tooltip();
$('[data-toggle=popover]').popover();
})

// js counters
$('#about-counter').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
    if (visible) {
        $(this).find('.timer').each(function() {
            var $this = $(this);
            $({
                Counter: 0
            }).animate({
                Counter: $this.text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
        $(this).unbind('inview');
    }
});
 
// cart widget toggle
$(function() {
    $("#items-counter").click(function() {
        $("body").toggleClass("cart-widget-open");
    });
    $("#cart-widget-close").click(function() {
        $("body").toggleClass("cart-widget-open");
    });

        $(".cart-widget-close-overlay").click(function() {
        $("body").toggleClass("cart-widget-open");
    });

});

//initialize swipers
//home slider
var swiper = new Swiper('.home-slider', {
    pagination: '.home-pagination',
    paginationClickable: true,
    nextButton: '.home-slider-next',
    prevButton: '.home-slider-prev'
});

//further slider
var swiper = new Swiper('.further-slider', {
    pagination: '.further-pagination',
    paginationClickable: true,
    nextButton: '.further-slider-next',
    prevButton: '.further-slider-prev'
});

//testimonials slider
var swiper = new Swiper('.testimonials-slider', {
    pagination: '.testimonials-pagination',
    paginationClickable: true,
    slidesPerView: 1,
    spaceBetween: 30,
    nextButton: '.testimonials-slider-next',
    prevButton: '.testimonials-slider-prev'
});

// recent work list
var swiper = new Swiper('.work-list-slider', {
    slidesPerView: 3,
    pagination: '.work-list-pagination',
    paginationClickable: true,
    nextButton: '.work-list-slider-next',
    prevButton: '.work-list-slider-prev',
    spaceBetween: 30,
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        420: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});

//post slider
var swiper = new Swiper('.post-slider', {
    pagination: '.post-pagination',
    paginationClickable: true,
    nextButton: '.post-slider-next',
    prevButton: '.post-slider-prev',
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});

// smoth scroll
$(".navbar-nav li a[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

mapboxgl.accessToken = 'pk.eyJ1IjoiYW50aDEyIiwiYSI6ImNrY2FvdXE3ZjF4NDIyem8wcWhsNTM0eG0ifQ.RzZvSEyKhL4QDtdQknZeDA';
var map = new mapboxgl.Map({
    container: 'map-canvas',
    //style: 'mapbox://styles/mapbox/streets-v11',
    style: 'mapbox://styles/anth12/ckcaq0e9q5e931imt36gdee2n',
    center: [-2.5,54.43],
    zoom: 8.5
  });

  map.addControl(new mapboxgl.NavigationControl());
  map.scrollZoom.disable();

  var marker = new mapboxgl.Marker();
  marker.setLngLat([-2.3398478,54.4332042]);
  marker.addTo(map);