// Navbar Function 

function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-list li");
  
  burger.addEventListener("click", () => {
      //Toggle Nav
      nav.classList.toggle("nav-active");
      
      //Animate Links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = ""
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
      });
      //Burger Animation
      burger.classList.toggle("toggle");
  });
  
}

navSlide();

// modal box starts

const email = document.getElementById('email');
const phone = document.getElementById('phone')
const modal_container_1 = document.getElementById('modal_container-1');
const modal_container_2 = document.getElementById('modal_container-2');
const email_close = document.getElementById('email-close');
const phone_close = document.getElementById('phone-close');

email.addEventListener('click', () =>{
  modal_container_1.classList.add('show');
});

phone.addEventListener('click', () =>{
  modal_container_2.classList.add('show');
});

email_close.addEventListener('click', () =>{
  modal_container_1.classList.remove('show');
});

phone_close.addEventListener('click', () =>{
  modal_container_2.classList.remove('show');
});

// model box ends

// SmoothScroll's

const scroll = new SmoothScroll('.nav-item a[href*="#about-me"]', {
  speed: 800
});

const scroll_1 = new SmoothScroll('.nav-item  a[href*="#projects"]', {
  speed: 800
});


const scroll_2 = new SmoothScroll('.nav-item a[href*="#contact"]', {
  speed: 600
});


const scroll_3 = new SmoothScroll('.nav-item a[href*="#skills"]', {
  speed: 600
});


