import React from "react";
import CardProduct from "../../components/card";
import { images } from "../../assets";
import "./product.css";

const Products = () => {
  return (
    <>
      <div className="products">
        <h1>Shop</h1>
        <div className="product-items">
          <CardProduct
            image={images["1.jpg"]}
            title="Brazil Dark Ground"
            price="$19.99"
          />

          <CardProduct
            image={images["2.jpg"]}
            title="Breakfast Medium Roast"
            price="$19.99"
          />

          <CardProduct
            image={images["3.webp"]}
            title="Costarica Light Roast"
            price="$19.99"
          />

          <CardProduct
            image={images["4.jpg"]}
            title="Decaf Espresso"
            price="$19.99"
          />

          <CardProduct
            image={images["5.jpg"]}
            title="Espresso Roast Blend"
            price="$19.99"
          />

          <CardProduct
            image={images["6.jpg"]}
            title="French Roast"
            price="$19.99"
          />

          <CardProduct
            image={images["7.jpg"]}
            title="Hazelnut Coffe"
            price="$19.99"
          />

          <CardProduct
            image={images["8.jpg"]}
            title="Jamaica Blue"
            price="$19.99"
          />

          <CardProduct
            image={images["9.jpg"]}
            title="Organic Mexico"
            price="$29.99"
          />
        </div>
      </div>
    </>
  );
};

export default Products;
