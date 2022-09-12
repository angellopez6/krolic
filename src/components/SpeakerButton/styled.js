import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 8px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  font-size: ${(props) => 16 + Number(props.theme.fontFactor)}px;
  cursor: pointer;
  width: 120px;
`;
