import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
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
import { useProducts, useDetailProducts } from "../../hooks/useProduct";

const Index = () => {
  const { productId } = useParams();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [changeProduct, setChangeProduct] = useState(false);
  const [isLoading, dataDetail, getDetailProduct] = useDetailProducts();
  const [isLoadingProduct, data, getProduct] = useProducts();
  const [detailOrder, setDetailOrder] = useState({
    size: "",
    quantity: 0,
  });

  useEffect(() => {
    if (dataDetail.length < 1 || changeProduct) {
      getDetailProduct(productId);
      getProduct(Math.floor(Math.random() * 2 + 1), 4);
      setChangeProduct(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeProduct]);

  const handleClick = useCallback(
    (id) => {
      setChangeProduct(true);
      navigate(`/product/${id}`);
    },
    [navigate]
  );

  return isLoading && isLoadingProduct ? (
    <div style={{ height: "100vh", textAlign: "center" }}>
      Loading Product...
    </div>
  ) : (
    <Container>
      <StyledDetailProduct>
        <ColDetailProduct>
          <Col1>
            <ImgProdDetail>
              <div className="card product-item">
                <img
                  className="product-img"
                  loading="lazy"
                  src={dataDetail?.image}
                  alt=""
                  width="100%"
                  id="ProductImg"
                />
              </div>
            </ImgProdDetail>
          </Col1>
          <Col2>
            <H1>{dataDetail?.productname}</H1>
            <PQuote>Geki Geki</PQuote>
            <input
              type="number"
              min="0"
              defaultValue={0}
              onChange={(e) =>
                setDetailOrder({ ...detailOrder, quantity: e.target.value })
              }
            />
            <H4>
              <i className="fa fa-indent"></i> Price
            </H4>

            <H1>{dataDetail?.price}</H1>
            <P>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </P>
            <A href={user ? "/cart" : "/login"}>Add to Cart</A>
          </Col2>
        </ColDetailProduct>
      </StyledDetailProduct>
    </Container>
  );
};

export default Index;
