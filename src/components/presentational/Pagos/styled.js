import styled from "styled-components";

export const PagosMainContainer = styled.article`
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 8px;
`;

export const PagosHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  margin: 10px;
  & > svg > path {
    path: ${(props) => props.theme.color};
    stroke: ${(props) => props.theme.color};
  }
`;

export const PagosContent = styled.section`
  display: grid;
  width: 80%;
  align-self: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px 0;
  > * {
    text-align: center;
  }
`;

export const PagosContentHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PagosContentFooter = styled.div`
  grid-column: span 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PagosContentCheckBox = styled.input``;

export const PagosContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

export const PagosWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const PagosMainContainerWrapper = styled.div`
  display: flex;
  flex-flow: row-reverse nowrap;
  align-items: center;
  padding: 1rem 0.5rem;
`;

export const PagosMainContainerButton = styled.button`
  display: inline-block;
  min-width: 136px;
  min-height: 48px;
  border-radius: 22px;
  outline: none;
  cursor: pointer;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border: 1px solid ${(props) => props.theme.borderColor};
  font-size: ${(props) => 16 + Number(props.theme.fontFactor)}px;

  &:hover {
    background: ${(props) => props.theme.color};
    color: ${(props) => props.theme.background};
    border: 1px solid ${(props) => props.theme.borderColor};
  }
`;

export const Separator = styled.div`
  grid-column: span 3;
  border-top: thin solid ${(props) => props.theme.borderColor};
`;
