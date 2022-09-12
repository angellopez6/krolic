const fontFamilyList = [
  "Roboto",
  "Raleway",
  "DancingScript",
  "NotoSansBalinese",
];

const defaultFont = "Roboto";

const THEMES = {
  highContrast: {
    key: "highContrast",
    background: "#ffff",
    color: "#000",
    borderColor: "#000",
    fontFactor: 0,
    voice: "0",
    defaultFont,
  },
  darkAndWhite: {
    key: "darkAndWhite",
    background: "#000",
    color: "#ffff",
    borderColor: "#ffff",
    fontFactor: 0,
    voice: "0",
    defaultFont,
  },
  natural: {
    key: "natural",
    background: "#222",
    color: "#fff",
    borderColor: "#e2e2e2",
    fontFactor: 0,
    voice: "0",
    defaultFont,
  },
  krolic: {
    key: "krolic",
    background: "#ff6c0f",
    color: "#fff",
    borderColor: "#252525",
    fontFactor: 0,
    voice: "0",
    defaultFont,
  },
  MaterialUI: {
    key: "MaterialUI",
    background: "rgba(0, 30, 60, 1)",
    color: "rgb(189, 189, 189)",
    borderColor: "#e2e2e2",
    fontFactor: 0,
    voice: "0",
    defaultFont,
  },
};

const KEYS = Object.keys(THEMES);

export { THEMES, KEYS, fontFamilyList };
