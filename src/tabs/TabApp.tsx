import { useState } from "react";
import styles from "./tabs.module.css";

const data = [
  {
    name: "tab 1",
    mock: "bob lob law",
  },
  {
    name: "tab 2",
    mock: "adsfasdfsdj iaof ioadfj ",
  },
  {
    name: "tab 3",
    mock: "fadsl kflkadsj fklj lsk ",
  },
  {
    name: "tab 4",
    mock: "dskjfasdjf kjflk jlk lkj",
  },
];

type TabData = {
  name: string;
  mock: string;
};

type TabContainerProps = {
  data: TabData[];
  handleClick: Function;
};

type TabProps = {
  data: TabData;
  handleClick: Function;
  index: number;
};

type PageViewProps = {
  mock: string;
};

export const TabApp = (): JSX.Element => {
  const [idx, setIdx] = useState<number>(0);

  function clickCallback(i: number) {
    return setIdx(i);
  }

  return (
    <div className={styles.wrapper}>
      <TabContainer data={data} handleClick={clickCallback} />
      <PageView mock={data[idx].mock} />
    </div>
  );
};

const Tab = (props: TabProps): JSX.Element => {
  return (
    <div onClick={() => props.handleClick(props.index)} className={styles.tab}>
      {props.data.name}
    </div>
  );
};

const TabContainer = (props: TabContainerProps): JSX.Element => {
  return (
    <div className={styles.tabContainer}>
      {props.data.map((d, i) => (
        <Tab key={i} handleClick={props.handleClick} data={d} index={i} />
      ))}
    </div>
  );
};

const PageView = (props: PageViewProps): JSX.Element => {
  return (
    <div className={styles.pageView}>
      <p>{props.mock}</p>
    </div>
  );
};
