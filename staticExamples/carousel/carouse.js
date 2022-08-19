document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".viewer-img");
  const title = document.querySelector(".title");
  const loading = document.querySelector(".loading");
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  let pointer = 0;
  let dogs;

  function movePointer(inc) {
    pointer = Math.max(Math.min(pointer + inc, dogs.length - 1), 0);
    img.setAttribute("src", dogs[pointer].url);
    title.innerText = dogs[pointer].title;
  }

  function buildCarousel() {
    movePointer(0);
    loading.classList.add("hidden");
    img.classList.remove("hidden");
    left.addEventListener("click", () => movePointer(-1));
    right.addEventListener("click", () => movePointer(1));
  }

  dogapi().then((d) => {
    dogs = d;
    buildCarousel();
  });
});
