const catogories = [
  "https://rukminim1.flixcart.com/flap/198/186/image/570ea9.jpg?q=90",
  "https://rukminim1.flixcart.com/flap/198/186/image/54abb23755dc69db.jpg?q=90",
  "https://rukminim1.flixcart.com/flap/198/186/image/275b727f22d60bab.jpg?q=90",
  "https://rukminim1.flixcart.com/flap/198/186/image/e651df.jpg?q=90",
  "https://rukminim1.flixcart.com/flap/198/186/image/0574df.jpg?q=90",
  "https://rukminim1.flixcart.com/flap/198/186/image/52d4da926dbea236.jpg?q=90",
  "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk-default-image-75ff34.png",
  "https://rukminim1.flixcart.com/flap/198/186/image/b3af3e.jpg?q=90",
];

const slideImg = [
  "https://rukminim1.flixcart.com/flap/3376/560/image/1e4f99069a344063.jpg?q=50 2x, https://rukminim1.flixcart.com/flap/1688/280/image/1e4f99069a344063.jpg?q=50 1x",
  "https://rukminim1.flixcart.com/flap/3376/560/image/43ff4418c513daf5.jpg?q=50 2x, https://rukminim1.flixcart.com/flap/1688/280/image/43ff4418c513daf5.jpg?q=50 1x",
  "https://rukminim1.flixcart.com/flap/3376/560/image/8cb56487bbda4c57.png?q=50 2x, https://rukminim1.flixcart.com/flap/1688/280/image/8cb56487bbda4c57.png?q=50 1x",
  "https://rukminim1.flixcart.com/flap/3376/560/image/0a6c51a2b24d62ec.jpg?q=50 2x, https://rukminim1.flixcart.com/flap/1688/280/image/0a6c51a2b24d62ec.jpg?q=50 1x",
  "https://rukminim1.flixcart.com/flap/3376/560/image/ff938f15fd1feb73.jpg?q=50 2x, https://rukminim1.flixcart.com/flap/1688/280/image/ff938f15fd1feb73.jpg?q=50 1x",
  "https://rukminim1.flixcart.com/flap/3376/560/image/2d1e642934186f79.jpg?q=50 2x, https://rukminim1.flixcart.com/flap/1688/280/image/2d1e642934186f79.jpg?q=50 1x",
];

const burger = document.querySelector(".burger-container");
const fix = document.querySelector("#fix");
const mainPosition = document.querySelector(".main");
const scrollNav = document.querySelector(".burger-nav ul");
const nav = document.querySelector(".burger-nav");
const slides = document.querySelector(".img-desktop");
const mobileNav = document.querySelector(".mobile-nav");
burger.addEventListener("click", () => {
  nav.classList.add("show");
  fix.classList.add("main");
  //   scrollNav.style.overflowY = "scroll";
});

fix.addEventListener("click", () => {
  nav.classList.remove("show");
  fix.classList.remove("main");
});

window.addEventListener("DOMContentLoaded", () => {
  let displayNav = catogories.map((catogory) => {
    return (mobileNav.innerHTML = `<img src=${catogory} alt="offer-zone">`);
  });
  displayNav = displayNav.join("");
  mobileNav.innerHTML = displayNav;
});

window.addEventListener("DOMContentLoaded", () => {
  let displaySlide = slideImg.map((slide) => {
    return (slides.innerHTML = `
        <img srcset=${slide} class="pics">`);
  });

  displaySlide = displaySlide.join("");
  slides.innerHTML = displaySlide;
  const img = document.querySelectorAll(".pics");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  img.forEach((item, index) => {
    item.style.left = `${index * 100}%`;
  });
  let counter = 0;
  nextBtn.addEventListener("click", () => {
    counter++;
    console.log(carousel());
  });

  prevBtn.addEventListener("click", () => {
    counter--;
    carousel();
  });

  function carousel() {
    if (counter === img.length) {
      counter = 0;
    }
    if (counter < 0) {
      counter = img.length - 1;
    }
    img.forEach((item) => {
      item.style.transform = `translateX(-${counter * 100}%)`;
    });
  }
});
