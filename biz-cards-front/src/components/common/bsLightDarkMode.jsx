import { useEffect, useState } from "react";

export function BsLightDarkMode() {
  const htmlTag = document.getElementsByTagName("html")[0];
  const [themeMode, setThemeMode] = useState(getTheme());

  function getTheme() {
    const localThemeState = localStorage.getItem("themeState");

    if (!localThemeState) {
      return "light";
    } else {
      return localThemeState;
    }
  }

  useEffect(() => {
    htmlTag.setAttribute("data-bs-theme", themeMode);
    localStorage.setItem("themeState", themeMode);
  }, [themeMode]);

  return (
    <button
      className="btn"
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      {themeMode === "light" ? (
        <i className="bi bi-moon"></i>
      ) : (
        <i className="bi bi-brightness-high"></i>
      )}
    </button>
  );
}
