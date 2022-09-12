import React from "react";
import {
  PagosContent,
  PagosContentCheckBox,
  PagosContentFooter,
  PagosContentHeader,
  PagosContentWrapper,
  PagosHeader,
  PagosMainContainer,
  PagosMainContainerButton,
  PagosMainContainerWrapper,
  PagosWrapper,
  Separator,
} from "./styled";
import { ReactComponent as IconWaller } from "../../../assets/images/wallet-title.svg";
import { H4, H5, H6, P } from "../../Text";
import { PagosInfo } from "./constants";

function Pagos() {
  return (
    <PagosMainContainer>
      <PagosHeader>
        <IconWaller />
        <H4 style={{margin: "10px 0px"}}>Pago en linea</H4>
      </PagosHeader>
      <PagosContent>
        <PagosContentHeader />
        <PagosContentHeader>
          <H5 style={{margin: '10px 0'}}>Vencimiento</H5>
        </PagosContentHeader>
        <PagosContentHeader>
          <H5 style={{margin: '10px 0'}}>Valor</H5>
        </PagosContentHeader>
        {PagosInfo.map((el) => (
          <>
            <PagosWrapper>
              <PagosContentCheckBox type="checkbox" />
              <H6 style={{margin: 0}}>{el.title}</H6>
            </PagosWrapper>
            <H6 style={{margin: 0}}>{el.date}</H6>
            <H6 style={{ margin: 0 }}>{el.value}</H6>
            <Separator/>
          </>
        ))}
        <PagosContentFooter>
          <PagosContentWrapper>
            <PagosContentCheckBox type="checkbox" />
            <H4>Total de la deuda</H4>
          </PagosContentWrapper>
          <H5>$0</H5>
        </PagosContentFooter>
      </PagosContent>
      <PagosMainContainerWrapper>
        <PagosMainContainerButton>Ir a pagar</PagosMainContainerButton>
      </PagosMainContainerWrapper>
    </PagosMainContainer>
  );
}

export default Pagos;
