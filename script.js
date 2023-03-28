const listText = ['Neural network evolution', 'The cybersecurity gold rush', 'Sensitive data with blockchain', 'Metaverse steps into healthcare'];

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    autoHeight: true,
    cssMode:true,
    keyboard:true,
    hashNavigation: {
      watchState: true,
    },
    navigation: {
      nextEl: ".swiper__btn--next",
      prevEl: ".swiper__btn--prev",
      disabledClass: "disabled",
    },
    breakpoints: {
        1199 :{
            direction : "vertical",
            mousewheel:true,
            autoHeight: true,
            freeMode: true,
            scrollbar: {
              el: ".swiper-scrollbar",
              enabled:true
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<div class="'+className+' nav__list"><p class="nav__list--num">0'+ (index+1) +'</p><p class="nav__list--text">'+ listText[index]+'</p></div>';
                  },
            },
        },
    },
  });


