import React from "react";
import {
  Container,
  CartProduct,
  H1,
  ColHeadCart,
  Col,
  H4,
  Pccp,
  StyledImg,
  Input,
  PaymentInformation,
  DataPayment,
  CardDpm,
  H2,
  Pdpm,
  Ptotal,
  A,
} from "./cart-style";

import { images } from "../../assets";

const Cart = () => {
  return (
    <Container>
      <CartProduct>
        <H1>Cart</H1>

        <ColHeadCart>
          <Col>
            <H4>Image</H4>
          </Col>

          <Col>
            <H4>Name</H4>
          </Col>

          <Col>
            <H4>Price</H4>
          </Col>

          <Col>
            <H4>Quantity</H4>
          </Col>
        </ColHeadCart>

        <ColHeadCart>
          <Col>
            <StyledImg src={images["geki.jpg"]} alt="" />
          </Col>

          <Col>
            <Pccp>Geki Geki</Pccp>
          </Col>

          <Col>
            <Pccp>$19.99</Pccp>
          </Col>

          <Col>
            <Input type="number" defaultValue="1" min="1" />
          </Col>
        </ColHeadCart>

        <ColHeadCart>
          <Col>
            <StyledImg src={images["yoneya.jpeg"]} alt="" />
          </Col>

          <Col>
            <Pccp>Yoneyma Mai</Pccp>
          </Col>

          <Col>
            <Pccp>$19.99</Pccp>
          </Col>

          <Col>
            <Input type="number" defaultValue="1" min="1" />
          </Col>
        </ColHeadCart>
      </CartProduct>

      <PaymentInformation>
        <H1>Payment Informations</H1>

        <DataPayment>
          <CardDpm>
            <Pdpm>$80</Pdpm>
            <H2>Tax 10%</H2>
          </CardDpm>

          <CardDpm>
            <Pdpm>$0</Pdpm>
            <H2>Discount</H2>
          </CardDpm>

          <CardDpm>
            <Ptotal>$880</Ptotal>
            <H2>Total</H2>
          </CardDpm>

          <A href="/">Checkout</A>
        </DataPayment>
      </PaymentInformation>
    </Container>
  );
};

export default Cart;
