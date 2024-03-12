const { createApp } = Vue;

createApp({
  data() {
    return {
      images: [
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
      ],
      counter: 0,
      isAutoplay: true,
      isNext: true,
    };
  },

  methods: {
    //Logica cambio img al click con incremento/decremento del counter e controlli per slider infinito
    goNext(direction) {
      direction ? this.counter++ : this.counter--;

      if (this.counter < 0) {
        this.counter = this.images.length - 1;
      } else if (this.counter === this.images.length) {
        this.counter = 0;
      }
    },

    //Logica autoplay che di default va all'immagine successiva (ie. goNext(true)), controllo su variabile isAutoplay che cambia a seconda che il mouse sia o meno sullo slider e controllo su valore isNext per stabilire il verso dell'autoplay
    startAutoplay() {
      setInterval(() => {
        if (this.isAutoplay && this.isNext) {
          this.goNext(true);
        } else if (this.isAutoplay && !this.isNext) {
          this.goNext(false);
        }
      }, 3000);
    },
  },

  mounted() {
    this.startAutoplay();
  },
}).mount("#app");
