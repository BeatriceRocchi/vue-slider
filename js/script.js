const carouselContainer = document.querySelector(".my-carousel-container");
const imagesWrapper = document.querySelector(".my-carousel-images");
const thumbnailsWrapper = document.querySelector(".my-thumbnails-wrapper");
const btnPrev = document.querySelector(".my-previous");
const btnNext = document.querySelector(".my-next");
const btnAutoplay = document.getElementById("my-btn-autoplay");
const btnDirection = document.getElementById("my-btn-direction");

let counterImages = 0;
let isAutoplay = false;
let autoplay;
let directionNext = true;

const images = [
  {
    url: "http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg",
    title: "Svezia",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },

  {
    url: "https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg",
    title: "Perù",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },

  {
    url: "https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c",
    title: "Chile",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },
  {
    url: "https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg",
    title: "Argentina",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },
  {
    url: "https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop",
    title: "Colombia",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },
];

//Eliminazione contenuto statico del carosello (immagine + thumbnails)
imagesWrapper.innerHTML = "";
thumbnailsWrapper.innerHTML = "";

//Popolamento dinamico del carosello (immagine + thumbnails)
images.forEach((image) => {
  imagesWrapper.innerHTML += createTemplateImages(image);
  thumbnailsWrapper.innerHTML += createTemplateThumbnails(image);
});

//Inserimento degli elementi creati in collection
const imagesCollection = document.querySelectorAll(".my-carousel-item");
imagesCollection[counterImages].classList.add("active");

const thumbnailsCollection = document.querySelectorAll(".my-thumbnail");
thumbnailsCollection[counterImages].classList.add("active");

//Inserimento logica cambio immagine e thumbnails al click
btnNext.addEventListener("click", goNext);
btnPrev.addEventListener("click", goPrev);

//Inserimento logica cambio immagine e thumbnails al click su thumbnails
thumbnailsCollection.forEach((thumb, i) => {
  thumb.addEventListener("click", () => changeImg(i));
});

//Inserimento logica cambio immagine e thumbnails con autoplay tramite start/stop
btnAutoplay.innerHTML = "Start" + " " + "autoplay";

btnAutoplay.addEventListener("click", () => {
  console.log("Autoplay prima: ", isAutoplay);
  if (isAutoplay === false) {
    autoplay = setInterval(directionAutoplay, 3000);
    isAutoplay = true;
    btnAutoplay.innerHTML = "Stop" + " " + "autoplay";
  } else if (isAutoplay === true) {
    clearInterval(autoplay);
    isAutoplay = false;
    btnAutoplay.innerHTML = "Start" + " " + "autoplay";
  }
  console.log("Autoplay dopo: ", isAutoplay);
});

//Inserimento logica cambio direzione autoplay
btnDirection.addEventListener("click", () => (directionNext = !directionNext));

// --- FUNCTIONS --- //
function createTemplateImages(imgElement) {
  return `
  <div class="my-carousel-item">
    <img
      class="img-fluid"
      src="${imgElement.url}"
      alt="${imgElement.title} picture"
    />
    <div class="item-description px-3">
      <h2>${imgElement.title}</h2>
      <p>${imgElement.description}</p>
    </div>
  </div>
  `;
}

function createTemplateThumbnails(thumbElement) {
  return `
  <div class="my-thumbnail">
    <img
      class="img-fluid"
      src="${thumbElement.url}"
      alt="Thumbnail of ${thumbElement.title} picture"
    />
  </div>
  `;
}

function goNext() {
  let indexImg = counterImages;
  indexImg === images.length - 1 ? (indexImg = 0) : indexImg++;
  changeImg(indexImg);
}

function goPrev() {
  let indexImg = counterImages;
  indexImg === 0 ? (indexImg = images.length - 1) : indexImg--;
  changeImg(indexImg);
}

function changeActiveStatus(counter) {
  imagesCollection[counter].classList.toggle("active");
  thumbnailsCollection[counter].classList.toggle("active");
}

function directionAutoplay() {
  directionNext ? goNext() : goPrev();
}

function changeImg(index) {
  changeActiveStatus(counterImages);
  counterImages = index;
  changeActiveStatus(counterImages);
}
