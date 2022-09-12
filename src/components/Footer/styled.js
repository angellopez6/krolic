import styled from "styled-components";

export const FooterContainer = styled.footer`
  min-height: 10vh;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  padding: 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background: ${(props) => props.theme.background};

  @media screen and (min-width: 1024px) {
    flex-flow: row nowrap;
  }
`;

export const FooterKrolicLogo = styled.img`
  display: block;
  width: 80px;
  height: auto;
  border-radius: 8px;
`;
