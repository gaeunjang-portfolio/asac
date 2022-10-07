 $(function(){
 var swiper = new Swiper('.gallery .gallery_inner ', {
    slidesPerView: 4,//보여지는 갤러리 수
    spaceBetween: 20,//갤러리 사이 간격
    speed: 1500,//버튼을 슬라이드가 넘어가는 시간
	  autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.gallery .swiper-button-next',
        prevEl: '.gallery .swiper-button-prev',
      },
	    pagination: {//블릿 버튼
        el: '.gallery .swiper-pagination',
        clickable: true,
        type: "progressbar",
      },
    });

    var swiper = new Swiper('.gallery2 .gallery2_inner ', {
      slidesPerView: 1,//보여지는 갤러리 수
      spaceBetween: 60,//갤러리 사이 간격
      speed: 1500,//버튼을 슬라이드가 넘어가는 시간
      autoplay: {
          delay: 2500,//자동으로 넘어가기 전 머무르는 시간
          disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
      }); 


    var swiper = new Swiper('.gallery3 .gallery3_inner ', {
      effect: "fade",
      spaceBetween: 60,//갤러리 사이 간격
      speed: 1500,//버튼을 슬라이드가 넘어가는 시간
      autoplay: {
          delay: 2500,//자동으로 넘어가기 전 머무르는 시간
          disableOnInteraction: false,
        },
      loop: true,//슬라이드 무한반복
      pagination: {
          el: ".gallery3 .gallery3_inner .swiper-pagination",
          type: "fraction",
      },
      navigation: {//화살표 버튼
        nextEl: '.gallery3 .swiper-button-next',
        prevEl: '.gallery3 .swiper-button-prev',
      },
      });
       
      var swiper = new Swiper('.gallery4 .gallery4_inner ', {
        slidesPerView: 4,//보여지는 갤러리 수
        spaceBetween: 20,//갤러리 사이 간격
        speed: 1500,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 2500,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
          },
          loop: true,//슬라이드 무한반복
          navigation: {//화살표 버튼
            nextEl: '.gallery4 .swiper-button-next',
            prevEl: '.gallery4 .swiper-button-prev',
          },
          pagination: {//블릿 버튼
            el: '.gallery4 .swiper-pagination',
            clickable: true,
            type: "progressbar",
          },
        });

        var swiper = new Swiper('.gallery5 .gallery5_inner ', {
          slidesPerView: 3,//보여지는 갤러리 수
          spaceBetween: 20,//갤러리 사이 간격
          speed: 1500,//버튼을 슬라이드가 넘어가는 시간
          autoplay: {
              delay: 2500,//자동으로 넘어가기 전 머무르는 시간
              disableOnInteraction: false,
            },
            loop: true,//슬라이드 무한반복
            navigation: {//화살표 버튼
              nextEl: '.gallery5 .swiper-button-next',
              prevEl: '.gallery5 .swiper-button-prev',
            },
            pagination: {//블릿 버튼
              el: '.gallery5 .swiper-pagination',
              clickable: true,
              type: "progressbar",
            },
          });

  
            var swiper = new Swiper('.gallery6 .gallery6_inner ', {
               slidesPerView: 4,//보여지는 갤러리 수
               spaceBetween: 20,//갤러리 사이 간격
               speed: 1500,//버튼을 슬라이드가 넘어가는 시간
               autoplay: {
                   delay: 2500,//자동으로 넘어가기 전 머무르는 시간
                   disableOnInteraction: false,
                 },
                 loop: true,//슬라이드 무한반복
                 navigation: {//화살표 버튼
                   nextEl: '.gallery6 .swiper-button-next',
                   prevEl: '.gallery6 .swiper-button-prev',
                 },
                 pagination: {//블릿 버튼
                   el: '.gallery6 .swiper-pagination',
                   clickable: true,
                   type: "progressbar",
                 },
               });

               var swiper = new Swiper('.gallery7 .gallery7_inner ', {
                slidesPerView: 4,//보여지는 갤러리 수
                spaceBetween: 20,//갤러리 사이 간격
                speed: 1500,//버튼을 슬라이드가 넘어가는 시간
                autoplay: {
                    delay: 2500,//자동으로 넘어가기 전 머무르는 시간
                    disableOnInteraction: false,
                  },
                  loop: true,//슬라이드 무한반복
                  navigation: {//화살표 버튼
                    nextEl: '.gallery7 .swiper-button-next',
                    prevEl: '.gallery7 .swiper-button-prev',
                  },
                  pagination: {//블릿 버튼
                    el: '.gallery7 .swiper-pagination',
                    clickable: true,
                    type: "progressbar",
                  },
                });

});

