//main slider swiper function
    let main1_swiper = new Swiper(".main1_swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true, //all img loop setting
        loopAdditionalSlides : 1, //setting to first img when last img swipe&play
        speed:1500,
        autoplay: {     //autoplay on(deactivation => false)
          delay: 2500, // delay time set 1s = 1000
          disableOnInteraction: false, // false is play when activate swipe
        },
        pagination: { //pagination bar
        el: ".main1_swiper .swiper-pagination",
        clickable: true,
        },
        navigation: { //next&prev button
        nextEl: ".content1_slider .swiper-button-next",
        prevEl: ".content1_slider .swiper-button-prev",
        },
    });
    //play&stop button
    const elPlayStop = document.querySelector('.swiper-button-playStop')
    const elPsImg = document.querySelector('.swiper-button-playStop span')

    elPlayStop.addEventListener('click',function(){
        if(!elPsImg.classList.contains('active')){
            elPsImg.classList.add('active') //change the img to play button
            main1_swiper.autoplay.stop(); // autoplay off
        } else {
            elPsImg.classList.remove('active') //change the img to stop button
            main1_swiper.autoplay.start(); // autoplay on
        }
    })


//main slider swiper function
// Initialize the variable for the main2 swiper.
let main2_swiper;

// Function to create the main2 swiper.
function createMainSwiper() {
  // Get the width of the screen.
  const screenWidth = window.innerWidth;
  // Check if the screen width is less than or equal to the breakpoint (1430px).
  if (screenWidth <= breakpoint) {
    // Initialize the main2 swiper with the specified options.
    main2_swiper = new Swiper(".main2_swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      loopAdditionalSlides: 1,
      initialSlide:0,
      speed: 1500,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    });
  }
}

// Function to destroy the main2 swiper.
function destroyMainSwiper() {
  // Destroy the main2 swiper.
  main2_swiper.destroy();
  // Set the variable to undefined.
  main2_swiper = undefined;
}

// Get the element with the class "main2_swiper".
const elMainswiper2 = document.querySelector(".main2_swiper");

// Set the breakpoint to 650px.
const breakpoint = 800;

// When the window is loaded or resized, check the window size and create/destroy the swiper if necessary.
window.addEventListener("load", checkWindowSize);
window.addEventListener("resize", checkWindowSize);

function checkWindowSize() {
  // Get the width of the screen.
  const screenWidth = window.innerWidth;
  // Check if the screen width is less than or equal to the breakpoint (650px).
  if (screenWidth <= breakpoint) {
    // If the element does not have the class "on", add the class and create the swiper.
    if (!elMainswiper2.classList.contains("on")) {
      elMainswiper2.classList.add("on");
      createMainSwiper();
    }
  } else {
    // If the element has the class "on", remove the class and destroy the swiper if the screen width is greater than 650px.
    if (elMainswiper2.classList.contains("on")) {
      elMainswiper2.classList.remove("on");
      if (screenWidth > 800) {
        destroyMainSwiper();
      }
    }
  }
}

//sub slider swiper function
let sub1_swiper = new Swiper(".sub1_swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true, //all img loop setting
  loopAdditionalSlides : 1, //setting to first img when last img swipe&play
  speed:1500,
  autoplay: {     //autoplay on(deactivation => false)
    delay: 2500, // delay time set 1s = 1000
    disableOnInteraction: false, // false is play when activate swipe
  },
  pagination: { //pagination bar
  el: ".content5_sub_slider .swiper-pagination",
  clickable: true,
  },
  navigation: { //next&prev button
  nextEl: ".sub1_swiper .swiper-button-next",
  prevEl: ".sub1_swiper .swiper-button-prev",
  },
});


//modal popup function
const openModalBtn = document.querySelector('.open-modal-btn');
const modal = document.querySelector('.modal');
const closeBtn = modal.querySelector('.close');
const iframe = document.querySelector('iframe')

openModalBtn.addEventListener('click', function(event) {
  event.preventDefault(); // 기본 동작 취소
  modal.classList.add('modal-show');
});

closeBtn.addEventListener('click', function() {
  modal.classList.remove('modal-show');
  iframe.src = iframe.src;
});

window.addEventListener('click',function(event){
  if(event.target == modal){
    modal.classList.remove('modal-show');
    iframe.src = iframe.src;
  }
})
if(modal.classList.remove('modal-show')){
  iframe.src = iframe.src;
}

//sub slider swiper function
let video_swiper = new Swiper(".video_swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true, //all img loop setting
  loopAdditionalSlides : 3, //setting to first img when last img swipe&play
  speed:1500,
  autoplay: {     //autoplay on(deactivation => false)
    delay: 2500, // delay time set 1s = 1000
    disableOnInteraction: false, // false is play when activate swipe
  },
  pagination: { //pagination bar
  el: ".video_slide .swiper-pagination",
  clickable: true,
  },
  navigation: { //next&prev button
  nextEl: ".video_slide .swiper-button-next",
  prevEl: ".video_slide .swiper-button-prev",
  },
});