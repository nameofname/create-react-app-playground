import {
  Fragment,
  ReactChild,
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
  cloneElement,
} from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeWrapper = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    return setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeContext.Consumer>{children}</ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
};

const ThemeToggler = () => {
  return (
    <ThemeWrapper>
      {({ theme, toggleTheme }) => (
        <>
          <h2>Theme toggler component : {theme}</h2>
          <button onClick={() => toggleTheme()}>toggle theme</button>
        </>
      )}
    </ThemeWrapper>
  );
};

export const ContextExampleApp = () => {
  return (
    <ThemeWrapper>
      {({ theme, toggleTheme }) => (
        <>
          <h1>The theme is {theme}</h1>
          <p>And this is the Theme toggler :</p>
          <ThemeToggler />
        </>
      )}
    </ThemeWrapper>
  );
};
