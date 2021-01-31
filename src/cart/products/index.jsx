import React, { Component } from "react";
import Product from "../product";

export default class Products extends Component {
  renderProducts = () => {
    const {
      products,
      handleChangeProductSpec,
      handleAddProductToCart,
    } = this.props;
    return products.map((product, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <Product
            product={product}
            handleChangeProductSpec={handleChangeProductSpec}
            handleAddProductToCart={handleAddProductToCart}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container danh-sach-san-pham">
        <div className="row">{this.renderProducts()}</div>
      </div>
    );
  }
}
