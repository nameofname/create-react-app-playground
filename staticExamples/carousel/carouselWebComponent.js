class Carousel extends HTMLElement {
  pointer = 0;
  imageArr = [];

  constructor() {
    super();
    this.img = this.querySelector(".viewer-img");
    this.titleTag = this.querySelector(".title");
    this.loading = this.querySelector(".loading");
    this.left = this.querySelector(".left");
    this.right = this.querySelector(".right");
  }

  populateImgs(arr) {
    this.imageArr = arr;
    this.movePointer(0);
    this.loading.classList.add("hidden");
    this.img.classList.remove("hidden");
    this.left.addEventListener("click", () => this.movePointer(-1));
    this.right.addEventListener("click", () => this.movePointer(1));
  }

  movePointer(inc) {
    this.pointer = Math.max(
      Math.min(this.pointer + inc, this.imageArr.length - 1),
      0
    );
    this.img.setAttribute("src", this.imageArr[this.pointer].url);
    this.titleTag.innerText = this.imageArr[this.pointer].title;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  customElements.define("arrow-carousel", Carousel);

  const carousel = document.querySelector("arrow-carousel");
  dogapi().then((d) => {
    carousel.populateImgs(d);
  });
});
