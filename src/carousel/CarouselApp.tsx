import { useState, useEffect } from "react";
import { getDogs } from "../DDCarousel/dogapi";
import styles from "./carousel.module.css";
let fetched: Boolean = false;

type Dog = {
  url: string;
  title: string;
};

export const CarouselApp = () => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [pointer, setPointer] = useState<number>(0);

  useEffect(() => {
    async function fetchDogs() {
      if (fetched) return;
      console.log("fetching!!!! ");
      fetched = true;
      const res: Dog[] = await getDogs();
      setDogs(res);
    }
    fetchDogs();
  }, []);

  const dog = dogs[pointer];

  if (!dog) return <p>loading...</p>;

  const handleClick = function (inc: number) {
    return setPointer(Math.max(Math.min(pointer + inc, dogs.length - 1), 0));
  };

  return (
    <div className={styles.root}>
      <div className={styles.carousel}>
        <div className={styles.viewer}>
          <img src={dog.url} alt={dog.title} />
        </div>
        <div className={styles.controls}>
          <button className="button-left" onClick={() => handleClick(-1)}>
            {"<"}
          </button>
          <span className={styles.title}>
            <i>{dog.title}</i>
          </span>
          <button className="button-right" onClick={() => handleClick(1)}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};
