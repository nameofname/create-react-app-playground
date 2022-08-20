import styles from "./thumbCarousel.module.css";
import { useEffect, useState, Fragment } from "react";
import { getDogs } from "../DDCarousel/dogapi";

type Dog = {
  url: string;
  title: string;
};

type ThumbsProps = {
  dogs: Dog[];
  clickHandler: Function;
};

const ViewerImg = (props: Dog) => {
  const { url, title } = props;
  return <img src={url} alt={title} />;
};

const Thumbs = (props: ThumbsProps) => {
  const t = props.dogs.map((doggo, i) => {
    const { url, title } = doggo;
    return (
      <div key={i} className={styles.thumb}>
        <img onClick={() => props.clickHandler(i)} src={url} alt={title} />
      </div>
    );
  });
  return <Fragment>{t}</Fragment>;
};

export const ThumbCarouselApp = () => {
  const [dogs, updateDogs] = useState<Dog[]>([]);
  const [pointer, updatePointer] = useState<number>(0);
  const dog: Dog = dogs[pointer];

  useEffect(() => {
    getDogs().then((d) => updateDogs(d));
  }, []);

  return (
    <div className={styles.thumbCarousel}>
      <div className={styles.viewer}>
        {!dogs.length ? "Loading..." : <ViewerImg {...dog} />}
      </div>
      <div className={styles.thumbs}>
        <Thumbs dogs={dogs} clickHandler={updatePointer} />
      </div>
    </div>
  );
};
