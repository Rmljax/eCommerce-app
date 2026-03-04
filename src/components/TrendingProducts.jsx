import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Product from "./ui/Product";
import ProductSkeleton from "./ui/ProductSkeleton";

export default function TrendingProducts() {
  const { products } = useContext(AppContext);
  return (
    <section id="trending-products">
      <div className="container">
        <div className="row products__row">
          <h2 className="products__title">Trending Now</h2>
          <div className="products__list">
            {products.length > 0
              ? products
                  .slice(8, 12)
                  .map((product) => (
                    <Product key={product.id} product={product} />
                  ))
              : new Array(4)
                  .fill()
                  .map((_, index) => <ProductSkeleton key={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
