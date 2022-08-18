import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import { getDogs } from "./dogapi";
import "./styles.css";

let fetched;

// TODO replace with your slideshow App
export const DDCarouselApp = () => {
  const [dogs, setDogs] = useState([]);
  const [pointer, setPointer] = useState(0);

  console.log("render");
  useEffect(() => {
    console.log("i am usnig this effect!");
    if (!fetched) {
      fetched = true;
      getDogs().then((d) => setDogs(d));
    }
    // document.title = `lookin at ${pointer} dog`;
  });

  if (!dogs.length) return "loading ...";

  function movePointer(inc) {
    setPointer(Math.min(Math.max(0, pointer + inc), dogs.length - 1));
  }

  const url = dogs[pointer].url;
  const title = dogs[pointer].title;

  return (
    <div className="carousel">
      <img alt={title} className="img" src={url} />
      <div className="title">
        {pointer} : {title}
      </div>
      <div onClick={() => movePointer(-1)} className="left">
        {"<"}
      </div>
      <div onClick={() => movePointer(1)} className="right">
        {">"}
      </div>
    </div>
  );
};
