import styled from "styled-components";

export const MainLayoutContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  background: ${(props) => props.theme.background};
`;

export const MainContent = styled.article`
  flex: 1 1 auto;
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-flow: row nowrap;
  }
`;

export const MainLeftContent = styled.article`
  @media screen and (min-width: 1024px) {
    width: 70%;
    border-right: 1px solid ${(props) => props.theme.borderColor};
  }
`;

export const MainRightContent = styled.article`
  flex: 1 1 auto;
`;

export const AccesibilityOptions = styled.ul`
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
`;

export const AccesibilityItem = styled.li`
  padding: 0;
  list-style-type: none;
  @media screen and (min-width: 1024px) {
    margin-left: 10px;
  }
`;

export const TextTalkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  margin: ${(props) => (props.margin ? props.margin : "2rem")};
`;

export const IconSpeak = styled.img`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
`;

export const AdventagesList = styled.ul`
  margin: 0;
  padding: 1rem 3rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

export const AdventagesListItem = styled.li`
  padding: 0;
  &::marker {
    content: "✅";
  }
  @media screen and (min-width: 1024px) {
    margin-left: 10px;
  }
`;

export const ImagesContainer = styled.article`
  width: 80%;
  margin: 1rem auto;
  border: 1px solid ${(props) => props.theme.borderColor};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  > img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const ImagesContainerItem = styled.img``;

export const ImagesPDE = styled.img`
  display: block;
  margin: 0 auto;
  width: 70%;
  height: auto;
  border-radius: 8px;
`;

export const ContentWrapper = styled.div`
  padding: 2rem;
`;
