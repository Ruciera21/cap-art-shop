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
            image={images["geki.jpg"]}
            title="Geki-dan"
            price="$19.99"
          />

          <CardProduct
            image={images["pokazo.jpeg"]}
            title="Mika Pikazo"
            price="$19.99"
          />

          <CardProduct
            image={images["makima.jfif"]}
            title="Makima"
            price="$19.99"
          />

          <CardProduct
            image={images["gbf.png"]}
            title="Granblue"
            price="$19.99"
          />

          <CardProduct
            image={images["yoneya.jpeg"]}
            title="Yoneyama Mai"
            price="$19.99"
          />

          <CardProduct
            image={images["soo3.jpg"]}
            title="Scenery-I"
            price="$19.99"
          />

          <CardProduct
            image={images["soo4.jpeg"]}
            title="Scenery-II"
            price="$19.99"
          />

          <CardProduct
            image={images["soo2.jpg"]}
            title="Scenery-III"
            price="$19.99"
          />

          <CardProduct
            image={images["soo1.png"]}
            title="Scenery-IV"
            price="$19.99"
          />
        </div>
      </div>
    </>
  );
};

export default Products;
