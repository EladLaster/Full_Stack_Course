import { createContext, useContext, useState, useEffect } from "react";

export const themeContext = createContext(null);

export function ThemeProvider({ children }) {
  //Read from localStorage
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [fontSize, setFontSize] = useState(() => localStorage.getItem("fontSize") || "medium");

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   const savedFontSize = localStorage.getItem("fontSize");

  //   if (savedTheme) setTheme(savedTheme);
  //   if (savedFontSize) setFontSize(savedFontSize);
  // }, []);

  //Wrtie to localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  return (
    <themeContext.Provider value={{ theme, setTheme, fontSize, setFontSize }}>
      {children}
    </themeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }
  return context;
}
