import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
function cart () {
    return (
<div className="container">
  <article className="row cart__head pc">
    <nav className="menu__nav col-lg-3 col-md-12 col-sm-0">
      <ul className="menu__list">
        <li className="menu__item menu__item--active">
          <a href="#" className="menu__link">
            Iphone</a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Samsung</a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Oppo </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Nokia</a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Sony</a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Xaomi</a>
        </li>
      </ul>
    </nav>
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
  <article className="row cart__body">
    <div className="col-6 cart__body-name">
      <div className="cart__body-name-img">
        <img src="./client/img/product-7.png" />
      </div>
      <a href="#" className="cart__body-name-title">
        Điện thoại iPhone Xs Max 256GB
      </a>
    </div>
    <div className="col-3 cart__body-quantity">
      <input type="button" defaultValue="-" className="cart__body-quantity-minus" />
      <input type="number" step={1} min={1} max={999} defaultValue={2} className="cart__body-quantity-total" />
      <input type="button" defaultValue="+" className="cart__body-quantity-plus" />
    </div>
    <div className="col-3 cart__body-price">
      <span>14.630.000 ₫</span>
      <a href="#">Xóa</a>
    </div>
  </article>
  <article className="row cart__body">
    <div className="col-6 cart__body-name">
      <div className="cart__body-name-img">
        <img src="./client/img/product-8.png" />
      </div>
      <a href="#" className="cart__body-name-title">
        Điện thoại Samsung Galaxy S8
      </a>
    </div>
    <div className="col-3 cart__body-quantity">
      <input type="button" defaultValue="-" className="cart__body-quantity-minus" />
      <input type="number" step={1} min={1} max={999} defaultValue={1} className="cart__body-quantity-total" />
      <input type="button" defaultValue="+" className="cart__body-quantity-plus" />
    </div>
    <div className="col-3 cart__body-price">
      <span>11.200.000đ</span>
      <a href="#">Xóa</a>
    </div>
  </article>
  <article className="row cart__body">
    <div className="col-6 cart__body-name">
      <div className="cart__body-name-img">
        <img src="./client/img/Xiaomi-Mi-9-tím-1.png" />
      </div>
      <a href="#" className="cart__body-name-title">
        Điện thoại Xiaomi Mi 9 (6GB/128GB)
      </a>
    </div>
    <div className="col-3 cart__body-quantity">
      <input type="button" defaultValue="-" className="cart__body-quantity-minus" />
      <input type="number" step={1} min={1} max={999} defaultValue={2} className="cart__body-quantity-total" />
      <input type="button" defaultValue="+" className="cart__body-quantity-plus" />
    </div>
    <div className="col-3 cart__body-price">
      <span>11.120.000đ</span>
      <a href="#">Xóa</a>
    </div>
  </article>
  <article className="row cart__foot">
    <div className="col-6 col-lg-6 col-sm-6 cart__foot-update">
      <button className="cart__foot-update-btn">Cập nhật giỏ hàng</button>
    </div>
    <p className="col-3 col-lg-3 col-sm-3 cart__foot-total">
      Tổng cộng:
    </p>
    <span className="col-3 col-lg-3 col-sm-3 cart__foot-price">
      55.870.000đ <br />
      <button className="cart__foot-price-btn">Mua hàng</button>
    </span>
  </article> 
</div>

    )
};

export default cart;