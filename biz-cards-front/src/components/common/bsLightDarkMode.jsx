import { useEffect, useState } from "react";

export function BsLightDarkMode() {
  const [themeMode, setThemeMode] = useState("light");
  const htmlTag = document.getElementsByTagName("html")[0];
  htmlTag.setAttribute("data-bs-theme", themeMode);
  useEffect(() => {
    htmlTag.setAttribute("data-bs-theme", themeMode);
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
