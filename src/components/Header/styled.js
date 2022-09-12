import styled from "styled-components";

export const HeaderContainer = styled.header`
  min-height: 11vh;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  background: ${(props) => props.theme.background};
`;

export const EmojiMagic = styled.div`
  font-size: ${(props) => 50 + Number(props.theme.fontFactor)}px;
  color: ${(props) => props.theme.color};
`;