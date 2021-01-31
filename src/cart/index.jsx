import React, { Component } from "react";
import CartBtn from "./cart-btn";
import CartModal from "./cart-modal";
import ProductSpec from "./product-spec";
import Products from "./products";

export default class Cart extends Component {
  products = [
    {
      id: 1,
      name: "VinSmart Live",
      imgSrc: "./img/vsphone.jpg",
      screen: 'AMOLED, 6.2", Full HD+',
      os: "Android 9.0 (Pie)",
      frontCamera: "20 MP",
      backCamera: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "6 GB",
      price: 5700000,
    },
    {
      id: 2,
      name: "Meizu 16Xs",
      imgSrc: "./img/meizuphone.jpg",
      screen: "AMOLED, FHD+ 2232 x 1080 pixels",
      os: "Android 9.0 (Pie)",
      frontCamera: "20 MP",
      backCamera: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "6 GB",
      price: 7600000,
    },
    {
      id: 3,
      name: "Iphone XS Max",
      imgSrc: "./img/applephone.jpg",
      screen: 'OLED, 6.5", 1242 x 2688 Pixels',
      os: "Android 9.0 (Pie)",
      frontCamera: "20 MP",
      backCamera: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "6 GB",
      price: 27000000,
    },
  ];

  state = {
    productSpec: {
      id: 1,
      name: "VinSmart Live",
      imgSrc: "./img/vsphone.jpg",
      screen: 'AMOLED, 6.2", Full HD+',
      os: "Android 9.0 (Pie)",
      frontCamera: "20 MP",
      backCamera: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "6 GB",
    },
    productInCart: [],
  };

  handleChangeProductSpec = (productSpec) => {
    this.setState({
      productSpec,
    });
  };

  handleAddProductToCart = (product) => {
    let productInCart = this.state.productInCart;
    const productInd = productInCart.findIndex((productCart) => {
      return productCart.id === product.id;
    });

    if (productInd !== -1) {
      productInCart[productInd].number += 1;
    } else {
      productInCart.push({ ...product, number: 1 });
    }

    this.setState({
      productInCart,
    });
  };

  handleAddProductInCart = (productIndex) => {
    let productInCart = this.state.productInCart;
    productInCart[productIndex].number += 1;
    this.setState({
      productInCart,
    });
  };

  handleSubtractProductInCart = (productIndex) => {
    let productInCart = this.state.productInCart;
    if (productInCart[productIndex].number === 1) {
      return;
    }
    productInCart[productIndex].number -= 1;
    this.setState({
      productInCart,
    });
  };

  handleDeleteProductInCart = (productIndex) => {
    let productInCart = this.state.productInCart;
    productInCart.splice(productIndex, 1);
    this.setState({
      productInCart,
    });
  };

  render() {
    return (
      <div>
        <section className="container">
          <h3 className="title text-center">Bài tập giỏ hàng</h3>
          <div className="container text-center my-2">
            <CartBtn productInCart={this.state.productInCart} />
          </div>
          <CartModal
            productInCart={this.state.productInCart}
            handleAddProductInCart={this.handleAddProductInCart}
            handleSubtractProductInCart={this.handleSubtractProductInCart}
            handleDeleteProductInCart={this.handleDeleteProductInCart}
          />
          <Products
            products={this.products}
            handleChangeProductSpec={this.handleChangeProductSpec}
            handleAddProductToCart={this.handleAddProductToCart}
          />
          <ProductSpec productSpec={this.state.productSpec} />
        </section>
      </div>
    );
  }
}
