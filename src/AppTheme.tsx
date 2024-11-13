import { createContext, ReactNode, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const AppTheme: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    console.log("called")
    theme == "light" ? setTheme("dark") : setTheme("light");
    console.log(theme)
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (theme === "dark") {
        body.setAttribute("data-bs-theme", "dark");
      } else {
        body.setAttribute("data-bs-theme", "light")
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div data-bs-theme={theme === "dark" ? "dark" : ""}>{children}</div>
    </ThemeContext.Provider>
  );
};

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}
