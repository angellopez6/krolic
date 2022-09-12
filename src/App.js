import "./App.css";
import MainLayout from "./components/MainLayout";
import ThemeWrapper from "./Themes";
import { GlobalStyles } from "./Themes/globalStyles";

function App() {
  const [
    ThemeProvider,
    theme,
    themeModes,
    themeSwitcher,
    changeFontFamily,
    accesibilityFontSizeSetter,
  ] = ThemeWrapper();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainLayout
        themeModes={themeModes}
        themeSwitcher={themeSwitcher}
        changeFontFamily={changeFontFamily}
        accesibilityFontSizeSetter={accesibilityFontSizeSetter}
      />
    </ThemeProvider>
  );
}

export default App;
