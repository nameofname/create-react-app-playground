/**
 * Get cute dog pictures
 * @param {number} length
 * @returns {Promise<Array<{ title: string, url:string }>}
 */
export const getDogs = async (length = 10) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          url: "http://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg",
          title: "hey bro",
        },
        {
          url: "https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__340.jpg",
          title: "im yo dog brooooo",
        },
        {
          url: "https://cdn3.photostockeditor.com/t/1501/dog-chocolate-labrador-retriever-puppy-on-green-grass-puppy-puppy-image.jpg",
          title: "bitch ass bitches.",
        },
        {
          url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "got dem puppies.",
        },
      ]);
    }, 500);
  });
  // return fetch(`https://img.cdn4dd.com/s/managed/interview/tps-dogs/api.json`)
  //   .then((response) => response.json())
  //   .then((response) => {
  //     const dogs = [];
  //     response.data.children.forEach((c) => {
  //       const title = c.data.title;
  //       const url = c.data.preview?.images[0]?.resolutions[2]?.url;
  //       if (url) {
  //         dogs.push({ title: title, url: url.replaceAll("&amp;", "&") });
  //       }
  //     });
  //     return dogs.slice(0, length); // remove the extra dogs
  //   });
};
