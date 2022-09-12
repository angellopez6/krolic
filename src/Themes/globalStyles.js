import { createGlobalStyle } from "styled-components";
import Roboto from "../assets/fonts/Roboto-Thin.ttf";
import Raleway from "../assets/fonts/Raleway-Thin.ttf";
import DancingScript from "../assets/fonts/DancingScript-Medium.ttf";
import NotoSansBalinese from "../assets/fonts/NotoSansBalinese-Regular.ttf";

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    font-family: ${(props) => props.theme.defaultFont} !important;
    font-weight: bold;
  }
  body {
    margin: 0;
    overflow-x: hidden;
    background: ${(props) => props.theme.background};
  }
  @font-face {
    font-family: Roboto;
    font-style: normal;
    src: url(${Roboto});
  }
  @font-face {
    font-family: Raleway;
    font-style: normal;
    src: url(${Raleway});
  }
  @font-face {
    font-family: DancingScript;
    font-style: normal;
    src: url(${DancingScript});
  }
  @font-face {
    font-family: NotoSansBalinese;
    font-style: normal;
    src: url(${NotoSansBalinese});
  }
`;
