import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { TableApp } from "./table/TableApp.tsx";
// import { CalculatorApp } from "./calculator/CalculatorApp.tsx";
// import { CarouselApp } from "./carousel/CarouselApp.tsx";
// import { DDCarouselApp } from './DDCarousel/DDCarouselApp';
// import { TicTacToeApp } from "./ticTacToe/TicTacToeApp";
// import { ThumbCarouselApp } from "./thumbCarousl/ThumbCarouselApp";
// import { PayWallApp } from "./paywall/PayWallApp";
// import { ContextExampleApp } from "./contextExample/ContextExampleApp";
// import { ContextExampleApp } from "./contextExample/ContextExampleJ";
// import { DotCarouselApp } from "./dotCarousel/DotCarouselApp";
// import { PaginationApp } from "./pagination/PaginationApp";
import { TabApp } from "./tabs/TabApp";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TabApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
