import styles from "./dotCarousel.module.css";
import { useState, useEffect } from "react";
import { getDogs } from "../DDCarousel/dogapi";
// 11:35 - 12:06

type Dog = {
  url: string;
  title: string;
};
type CarouselDotsProps = {
  count: number;
  currIdx: number;
};

const ViewerImg = (props: Dog): JSX.Element => {
  return <img src={props.url} alt={props.title} />;
};

const CarouselDots = ({ count, currIdx }: CarouselDotsProps): JSX.Element => {
  const dots = new Array(count).fill(0).map((z, i) => {
    const cl = currIdx === i ? `${styles.dot} ${styles.on}` : styles.dot;
    return <span key={i} className={cl}></span>;
  });
  return <>{dots}</>;
};

export const DotCarouselApp = () => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [pointer, setPointer] = useState<number>(0);

  function updatePointer(inc: number): void {
    setPointer(Math.min(Math.max(pointer + inc, 0), dogs.length - 1));
  }

  useEffect(() => {
    getDogs().then(setDogs);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.viewer}>
        <div className={styles.left} onClick={() => updatePointer(-1)}>
          {"<"}
        </div>
        {dogs.length ? <ViewerImg {...dogs[pointer]} /> : <p>Loading...</p>}
        <div className={styles.right} onClick={() => updatePointer(1)}>
          {">"}
        </div>
      </div>
      <div className={styles.dots}>
        <CarouselDots count={dogs.length} currIdx={pointer} />
      </div>
    </div>
  );
};
