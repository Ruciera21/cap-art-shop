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

import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productOrder);
  const subTotalPrice = data
    .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    .toFixed(2);
  // const discount = (10 / 100 / subTotalPrice).toFixed(2);
  // const tax = ((10 * 100) / subTotalPrice).toFixed(2);
  // const totalPrice = (
  //   subTotalPrice +
  //   parseFloat(discount) +
  //   parseFloat(tax)
  // ).toFixed(2);

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
        {data.map((item, idx) => (
          <div key={idx}>
            <ColHeadCart>
              <Col>
                <StyledImg src={item.image} alt="" />
              </Col>

              <Col>
                <Pccp>{item.productname}</Pccp>
              </Col>

              <Col>
                <Pccp>${item.price}</Pccp>
              </Col>

              <Col>
                <Input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_QUANTITY_ITEM",
                      value: e.target.value,
                      id: item.id,
                    })
                  }
                />
              </Col>
            </ColHeadCart>
          </div>
        ))}
        <PaymentInformation>
          <H1>Payment Informations</H1>

          <DataPayment>
            {/* <CardDpm>
                  <Pdpm>Tax 10%</Pdpm>
                  <H2>${tax}</H2>
                </CardDpm>

                <CardDpm>
                  <Pdpm>Discount</Pdpm>
                  <H2>${discount}</H2>
                </CardDpm> */}

            <CardDpm>
              <Ptotal>Total</Ptotal>
              <H2>${subTotalPrice}</H2>
            </CardDpm>

            <A href="/">Checkout</A>
          </DataPayment>
        </PaymentInformation>
      </CartProduct>
    </Container>
  );
};

export default Cart;
