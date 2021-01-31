import React, { Component } from "react";

export default class ProductSpec extends Component {
  render() {
    const { productSpec } = this.props;
    return (
      <div className="row">
        <div className="col-sm-5">
          <img className="img-fluid" src={productSpec.imgSrc} alt="hinh" />
        </div>
        <div className="col-sm-7">
          <h3>Thông số kỹ thuật</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{productSpec.screen}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{productSpec.os}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{productSpec.frontCamera}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{productSpec.backCamera}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{productSpec.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{productSpec.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
