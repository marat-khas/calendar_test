import { FC } from "react";
import { Calendar } from "../calendar/calendar";
import { createGlobalStyle } from "styled-components";

import appStyles from "./styles.module.scss";

const AppStyles = createGlobalStyle`${appStyles};`;

export const App: FC = () => {
  return (
    <div className="App">
      <AppStyles />
      <Calendar />
    </div>
  );
};
