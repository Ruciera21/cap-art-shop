import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useProducts } from "../../hooks/useProduct";

const Index = () => {
  const [isLoading, data, getAllProduct] = useProducts();

  useEffect(() => {
    if (data.length < 1) {
      getAllProduct(1, 12, "", "");
    }
  }, [data.length, getAllProduct]);

  return isLoading ? (
    <div style={{ height: "100vh", textAlign: "center" }}>
      Loading Product...
    </div>
  ) : (
    <div>
      <div className="products">
        <h1>All product</h1>
        <div className="product-items">
          {data?.map((product) => (
            <div className="card product-item" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img
                  className="product-img"
                  loading="lazy"
                  // src={images[`product-${product.id}.jpg`]}
                  src={product.image}
                  alt={product.productname}
                />
              </Link>
              <h4>{product.productname}</h4>

              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
