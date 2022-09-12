import styled from "styled-components";

const TagFontSizes = {
  H1: 32,
  H2: 28,
  H3: 24,
  H4: 20,
  H5: 16,
  H6: 12,
  P: 10,
};

const H1 = styled.h1`
  font-size: ${(props) => TagFontSizes.H1 + Number(props.theme.fontFactor)}px;
  text-align: ${(props) => (props.align ? props.align : "initial")};
  color: ${(props) => props.theme.color};
`;

const H2 = styled.h2`
  font-size: ${(props) => TagFontSizes.H2 + Number(props.theme.fontFactor)}px;
  text-align: ${(props)=> props.align ? props.align : 'initial'};
  color: ${(props)=> props.theme.color};
`;

const H3 = styled.h3`
  font-size: ${(props) => TagFontSizes.H3 + Number(props.theme.fontFactor)}px;
  text-align: ${(props)=> props.align ? props.align : 'initial'};
  color: ${(props)=> props.theme.color};
`;

const H4 = styled.h4`
  font-size: ${(props) => TagFontSizes.H4 + Number(props.theme.fontFactor)}px;
  text-align: ${(props)=> props.align ? props.align : 'initial'};
  color: ${(props)=> props.theme.color};
`;

const H5 = styled.h5`
  font-size: ${(props) => TagFontSizes.H5 + Number(props.theme.fontFactor)}px;
  text-align: ${(props) => (props.align ? props.align : "initial")};
  color: ${(props) => props.theme.color};
  line-height: 25px;
`;

const H6 = styled.h6`
  font-size: ${(props) => TagFontSizes.H6 + Number(props.theme.fontFactor)}px;
  text-align: ${(props)=> props.align ? props.align : 'initial'};
  color: ${(props)=> props.theme.color};
`;

const P = styled.p`
  font-size: ${(props) => TagFontSizes.P + Number(props.theme.fontFactor)}px;
  text-align: ${(props)=> props.align ? props.align : 'initial'};
  color: ${(props)=> props.theme.color};
`;

export { H1, H2, H3, H4, H5, H6, P };
