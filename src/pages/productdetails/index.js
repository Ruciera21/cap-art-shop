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
import { useDispatch } from "react-redux";
import swal from "sweetalert";

const Index = () => {
  const { productId } = useParams();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [changeProduct, setChangeProduct] = useState(false);
  const [isLoading, dataDetail, getDetailProduct] = useDetailProducts();
  const [isLoadingProduct, data, getProduct] = useProducts();
  const [detailOrder, setDetailOrder] = useState({
    size: "",
    quantity: 0,
  });

  const getDetail = () => {
    getDetailProduct(productId);
  };
  console.log(dataDetail);
  // null == false
  // 0 == false
  // undefined == false

  // array([]) = ini masih dianggap true
  // .length itu untuk ngitung jumlah array

  useEffect(() => {
    getDetail();
  }, [productId]);

  const handleAddToCart = () => {
    if (!user) {
      alert("Please login to add to cart");
      navigate("/login");
    } else {
      const { id, productname, price, image } = dataDetail;
      const { quantity } = detailOrder;
      const data = { id, productname, price, image, quantity };
      if (quantity === 0) {
        swal({
          icon: "error",
          title: "Oops...",
          text: "Please fill all field",
        });
      } else {
        dispatch({
          type: "ADD_TO_CART",
          value: data,
        });
        swal({
          icon: "success",
          title: "Mantul",
          text: "Added to cart",
        });
      }
    }
  };
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
            {/* <PQuote>Geki Geki</PQuote> */}
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

            <H1>${dataDetail?.price}</H1>
            <P>{dataDetail?.description}</P>
            <A onClick={handleAddToCart} className="btn">
              Add to Cart
            </A>
          </Col2>
        </ColDetailProduct>
      </StyledDetailProduct>
    </Container>
  );
};

export default Index;
