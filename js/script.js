
"use script"

const revievsSwiper = document.querySelector('.swipe-revievs');

if (revievsSwiper) {
    const swiper = new Swiper('.swiper-revievs', 
{
    autoHeight: true,
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
  });
}