document.addEventListener("DOMContentLoaded", () => {
  let dogs;
  const viewer = document.querySelector(".viewer");
  const thumbs = document.querySelector(".thumbs");

  function populateCarousel(d) {
    dogs = d;
    const img = document.createElement("img");
    img.setAttribute("src", dogs[0].url);
    viewer.firstChild.replaceWith(img);

    dogs.forEach((dog) => {
      const thumb = document.createElement("div");
      const img = document.createElement("img");
      thumb.setAttribute("class", "thumb");
      img.setAttribute("src", dog.url);
      thumb.appendChild(img);
      thumbs.appendChild(thumb);
      thumb.addEventListener("click", function () {
        updateViewer(dog);
      });
    });
  }

  function updateViewer(dog) {
    const img = document.querySelector(".viewer").firstChild;
    img.src = dog.url;
  }

  dogapi().then(populateCarousel);
});
