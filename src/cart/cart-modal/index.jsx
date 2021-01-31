import React, { Component } from "react";

export default class CartModal extends Component {
  addProduct = (productIndex) => {
    const { handleAddProductInCart } = this.props;
    handleAddProductInCart(productIndex);
  };
  subtractProduct = (productIndex) => {
    const { handleSubtractProductInCart } = this.props;
    handleSubtractProductInCart(productIndex);
  };
  deleteProduct = (productIndex) => {
    const { handleDeleteProductInCart } = this.props;
    handleDeleteProductInCart(productIndex);
  };
  renderProductInCart = () => {
    const { productInCart } = this.props;
    return productInCart?.map((product, index) => {
      return (
        <tr className="card-item" key={index}>
          <td>1</td>
          <td>{product.name}</td>
          <td>
            <img src={product.imgSrc} width="50" alt="hinh" />
          </td>
          <td>
            <button onClick={() => this.subtractProduct(index)}>-</button>
            {product.number}
            <button onClick={() => this.addProduct(index)}>+</button>
          </td>
          <td>{product.price}</td>
          <td>{product.price * product.number}</td>
          <td>
            <button
              onClick={() => this.deleteProduct(index)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          role="document"
          style={{ maxWidth: 1000 }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>{this.renderProductInCart()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
