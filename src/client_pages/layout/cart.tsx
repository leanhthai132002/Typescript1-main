import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
function cart () {
    return (
<div className="container">
  <article className="row cart__head pc">

    <div className="col-6 cart__head-name">
      Thông tin sản phẩm
    </div>
    <div className="col-3 cart__head-quantity">
      Số lượng
    </div>
    <div className="col-3 cart__head-price">
      Đơn giá
    </div>
  </article>
  <article className="row cart__body">
    <div className="col-6 cart__body-name">
      <div className="cart__body-name-img">
        <img src="./client/img/product-1.png" />
      </div>
      <a href = "" className="cart__body-name-title">
        Oiện Thoại OPPO F7 (64GB/4GB)
      </a>
    </div>
    <div className="col-3 cart__body-quantity">
      <input type="button" defaultValue="-" className="cart__body-quantity-minus" />
      <input type="number" step={1} min={1} max={999} defaultValue={1} className="cart__body-quantity-total" />
      <input type="button" defaultValue="+" className="cart__body-quantity-plus" />
    </div>
    <div className="col-3 cart__body-price">
      <span>4.290.000 ₫</span>
      <a href="#">Xóa</a>
    </div>
  </article>

</div>

    )
};

export default cart;