import s from "./layout.module.scss";
import cns from "classnames";
import { useState } from "react";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  if (typeof window === "undefined") {
    logger.log("ENV", process.env.ENV);
    logger.log("LOG_ENABLED_IN", process.env.LOG_ENABLED_IN);
  } else {
    logger.log("ENV", process.env.NEXT_PUBLIC_ENV);
    logger.log("LOG_ENABLED_IN", process.env.NEXT_PUBLIC_LOG_ENABLED_IN);
  }

  return (
    <div className={cns(s.parent, s[theme])}>
      <header>
        <h1>Header</h1>
      </header>

      <main>{children}</main>

      <footer>
        <label htmlFor="darkMode">Toggle DarkMode:</label>
        <input
          type="checkbox"
          id="darkMode"
          value={theme}
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
      </footer>
    </div>
  );
};

export default Layout;
