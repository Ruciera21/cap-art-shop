import React from "react";
import CardProduct from "../../components/card";
import { images } from "../../assets";
import {
  Container,
  StyledDetailProduct,
  ColDetailProduct,
  Col1,
  ImgProdDetail,
  Col2,
  A,
  H1,
  PQuote,
  H4,
  P,
} from "./productStyled";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const DetailProduct = () => {
  const [user] = useAuthState(auth);

  return (
    <Container>
      <StyledDetailProduct>
        <ColDetailProduct>
          <Col1>
            <ImgProdDetail>
              <CardProduct image={images["geki.jpg"]} />
            </ImgProdDetail>
          </Col1>
          <Col2>
            <H1>Geki-dan</H1>
            <PQuote>Geki Geki</PQuote>
            <H4>$19.99</H4>
            <P>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </P>
            <A href={user ? "/" : "/login"}>Add to Cart</A>
          </Col2>
        </ColDetailProduct>
      </StyledDetailProduct>
    </Container>
  );
};

export default DetailProduct;
