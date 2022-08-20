import { FC, ReactNode, createContext, useState } from "react";
import styles from "./contextExample.module.css";

let theme = "light";

type Theme = {
  theme: string;
  toggleTheme: Function;
};

const ThemeContext = createContext({
  theme,
  toggleTheme: () => {},
});

type ThemeWrapperProps = {
  children: ReactNode;
};

const ThemeWrapper: FC<ThemeWrapperProps> = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState<string>("dark");
  const toggleTheme = () => {
    return setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={styles[theme]}>{children}</div>
    </ThemeContext.Provider>
  );
};

const ThemeToggler = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }: Theme) => (
        <>
          <button onClick={() => toggleTheme()}>toggle: {theme}</button>
        </>
      )}
    </ThemeContext.Consumer>
  );
};

export const ContextExampleApp = () => {
  return (
    <ThemeWrapper>
      <ThemeContext.Consumer>
        {({ theme }: Theme) => (
          <>
            <p>The theme is {theme}</p>
          </>
        )}
      </ThemeContext.Consumer>
      <p>trying out theme toggle : </p>
      <ThemeToggler />
    </ThemeWrapper>
  );
};
