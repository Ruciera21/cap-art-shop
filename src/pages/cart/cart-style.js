import styled from "styled-components";

export const Container = styled.div`
  width: 69.69%;
  margin: auto;
  background-color: #ffffff;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const CartProduct = styled.div`
  margin-top: 40px;
`;
export const H1 = styled.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 24x;
  color: #0c0d36;
  font-family: "Poppins", sans-serif;

  @media (max-width: 575px) {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const ColHeadCart = styled.div`
  width: 110%;
  display: inline-flex;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Col = styled.div`
  width: 150%;
  padding: 10px;
  color: #0c0d36;
`;

export const Pccp = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 27x;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: -8px;
    font-family: "Poppins", sans-serif;
  }
`;

export const H4 = styled.h4`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
`;

export const StyledImg = styled.img`
  width: 160px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  padding-left: 10px;
  margin: -7px 0px 0px 0px;
  width: 25%;
  min-height: 36px;
  border: 1px solid #29a867;
  border-radius: 6px;

  @media (max-width: 575px) {
    width: 40%;
    min-height: 24px;
  }
`;

export const PaymentInformation = styled.div`
  margin-top: 20px;
`;

export const DataPayment = styled.div`
  margin-top: 10px;
  display: flex;
`;

export const CardDpm = styled.div`
  width: 20%;
  padding: 5px;
  box-shadow: 1px 1px #cacacaf2;
  margin: 0 20px;
  border: 1px solid #ffffffe7;
  border-radius: 10px;

  @media (max-width: 575px) {
    margin: 0 10px;
    padding: 0;
  }
`;

export const H2 = styled.h2`
  font-size: 14px;
  font-weight: 400;
  line-height: 21x;
  color: #979797;
`;

export const Pdpm = styled.p`
  font-size: 18px;
  font-weight: 4px;
  line-height: 27x;
  color: #0c0d36;
`;

export const Ptotal = styled.p`
  font-size: 18px;
  font-weight: 4px;
  line-height: 27x;
  color: #29a867;
`;

export const A = styled.a`
  margin: 16px auto;
  text-decoration: none;
  width: 35.75%;
  height: 35px;
  background-color: #29a867;
  color: #ffffff;
  text-align: center;
  padding-top: 6px;
  border-radius: 6px;
  display: block;
`;
