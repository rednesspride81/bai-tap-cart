import React, { Component } from "react";

export default class CartBtn extends Component {
  renderNumberProductInCart = () => {
    const { productInCart } = this.props;
    return productInCart.reduce((numberProduct, product) => {
      return (numberProduct += product.number);
    }, 0);
  };
  render() {
    return (
      <button
        className="btn btn-danger"
        data-toggle="modal"
        data-target="#modelId"
      >
        Giỏ hàng ({this.renderNumberProductInCart()})
      </button>
    );
  }
}
