import React, { Component } from "react";

export default class Product extends Component {
  changeProductSpecBtn = () => {
    const { product, handleChangeProductSpec } = this.props;
    handleChangeProductSpec(product);
  };

  addProductToCart = () => {
    const { product, handleAddProductToCart } = this.props;
    handleAddProductToCart(product);
  };

  render() {
    const { imgSrc, name } = this.props.product;
    return (
      <div className="card">
        <img className="card-img-top" src={imgSrc} alt="hinh" />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <button
            className="btn btn-success"
            onClick={this.changeProductSpecBtn}
          >
            Chi tiết
          </button>
          <button onClick={this.addProductToCart} className="btn btn-danger">
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
