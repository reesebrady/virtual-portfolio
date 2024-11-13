import { useContext } from "react";
import { ThemeContext } from "./AppTheme";

const AppThemeButton = () => {
  const themeContext = useContext(ThemeContext);

  const changeTheme = () => {
    themeContext.toggleTheme();
  };

  const oppositeOfTheme = themeContext.theme === "light" ? "dark" : "light";

  return (
    <div style={{textAlign: 'right'}}>
      <button className="btn btn-secondary" onClick={changeTheme}>
        Make theme {oppositeOfTheme} mode
      </button>
    </div>
  );
};

export default AppThemeButton;
