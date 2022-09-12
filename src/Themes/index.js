import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { THEMES as ThemeModes, KEYS } from "./themeModes";

const DEFAULT = JSON.parse(window.localStorage.getItem("theme"));

export default function ThemeWrapper() {
  const [theme, setTheme] = useState(DEFAULT || ThemeModes.natural);

  const themeSwitcher = (mode) => {
    try {
      if (!KEYS) throw new Error("No themes were found...");
      const nextMode = KEYS.find((savedMode) => savedMode === mode);
      return nextMode
        ? setTheme({
            ...ThemeModes[nextMode],
            defaultFont: theme.defaultFont,
            fontFactor: theme.fontFactor,
          })
        : setTheme(ThemeModes.natural);
    } catch (error) {
      console.log("Error on theming...");
    }
  };

  const accesibilityFontSizeSetter = (factor) => {
    setTheme({ ...theme, fontFactor: factor });
  };

  const changeFontFamily = (font) => {
    setTheme({ ...theme, defaultFont: font });
  };

  return [
    ThemeProvider,
    theme,
    ThemeModes,
    themeSwitcher,
    changeFontFamily,
    accesibilityFontSizeSetter,
  ];
}
