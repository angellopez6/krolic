import React from "react";
import { H5 } from "../Text";
import { FooterContainer, FooterKrolicLogo } from "./styled";
import LogoKrolic from "../../assets/images/logo_krolic.png";

function Footer() {
  return (
    <FooterContainer>
      <H5>Developed by: Ing. Angel Salazar 2022 &copy; </H5>
      <FooterKrolicLogo src={LogoKrolic} alt="Logo Krolic" />
    </FooterContainer>
  );
}

export default Footer;
