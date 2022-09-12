import React from "react";
import { EmojiMagic, HeaderContainer } from "./styled";
import { H1} from "../Text";

function Header() {
  return (
    <HeaderContainer>
      <EmojiMagic>💅🏾 Styled-Components</EmojiMagic>
      <H1>Krolic - Propuesta de accesibilidad</H1>
    </HeaderContainer>
  );
}

export default Header;
