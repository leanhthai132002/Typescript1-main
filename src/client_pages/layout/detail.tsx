import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom';
import { getProduct } from '../../client_api/product';
import { useParams } from 'react-router-dom';
export type PRODUCT = {
  _id: number,
  name: string,
  desc: string,
  price: number,
  category: string,
  image: string,
  status: number
};
const Detail = () => {
  const { id } = useParams();

    const [product, setProduct] = useState<PRODUCT>();

    const handleGetProductDetail = async () => {
        const response = await getProduct(id);
        setProduct(response.data);
    }

    useEffect(() => {
        handleGetProductDetail();
    }, []);

  return (
    <div>
      <main>
        <section className="product">
          <div className="container">
            <div className="row bg-white pt-4 pb-4 border-bt pc">
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
              <article className="product__main col-lg-9 col-md-12 col-sm-12">
                <div className="row">
                  
                  <div className="product__main-img col-lg-4 col-md-4 col-sm-12">
                    <div className="product__main-img-primary">
                    {product?.image
                ? <img src={product?.image} width={100} alt="" />
                : null}
                    </div>
                  </div>
                  <div className="product__main-info col-lg-8 col-md-8 col-sm-12">
                    <div className="product__main-info-breadcrumb">
                      Trang chủ / Sản phẩm
                    </div>
                    <a href="#" className="product__main-info-title">
                      <h2 className="product__main-info-heading">
                        Điện thoại {product?.name}
                      </h2>
                    </a>
                    <div className="product__main-info-rate-wrap">
                      <i className="fas fa-star product__main-info-rate" />
                      <i className="fas fa-star product__main-info-rate" />
                      <i className="fas fa-star product__main-info-rate" />
                      <i className="fas fa-star product__main-info-rate" />
                      <i className="fas fa-star product__main-info-rate" />
                    </div>
                    <div className="product__main-info-price">
                      <span className="product__main-info-price-current">
                      {product?.price}
                      </span>
                    </div>
                   
                    <div className="product__main-info-cart">
                      <div className="product__main-info-cart-quantity">
                        <input type="button" defaultValue="-" className="product__main-info-cart-quantity-minus" />
                        <input type="number" step={1} min={1} max={999} defaultValue={1} className="product__main-info-cart-quantity-total" />
                        <input type="button" defaultValue="+" className="product__main-info-cart-quantity-plus" />
                      </div>
                      <div className="product__main-info-cart-btn-wrap">
                        <button className="product__main-info-cart-btn">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                    <div className="product__main-info-contact">
                      <a href="#" className="product__main-info-contact-fb">
                        <i className="fab fa-facebook-f" />
                        Chat Facebook
                      </a>
                      <div className="product__main-info-contact-phone-wrap">
                        <div className="product__main-info-contact-phone-icon">
                          <i className="fas fa-phone-alt " />
                        </div>
                        <div className="product__main-info-contact-phone">
                          <div className="product__main-info-contact-phone-title">
                            Gọi điện tư vấn
                          </div>
                          <div className="product__main-info-contact-phone-number">
                            ( 0986.977.365)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                 <div className='row bg-white'>
                 {product?.desc}
                 </div>
              </article>
              <aside className="product__aside col-lg-3 col-md-0 col-sm-0">
                <div className="product__aside-top">
                  <div className="product__aside-top-item">
                    <img src=".././img/shipper.png" />
                    <div className="product__aside-top-item-text">
                      <p>
                        Giao hàng nhanh chóng
                      </p>
                      <span>
                        Chỉ trong vòng 24h
                      </span>
                    </div>
                  </div>
                  <div className="product__aside-top-item">
                    <img src="../img/brand.png"/>
                    <div className="product__aside-top-item-text">
                      <p>
                        Sản phẩm chính hãng
                      </p>
                      <span>
                        Sản phẩm nhập khẩu 100%
                      </span>
                    </div>
                  </div>
                  <div className="product__aside-top-item">
                    <img src="../img/less.png" />
                    <div className="product__aside-top-item-text">
                      <p>
                        Mua hàng tiết kiệm
                      </p>
                      <span>
                        Rẻ hơn từ 10% đến 30%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product__aside-bottom">
                  <h3 className="product__aside-heading">
                    Có thể bạn thích
                  </h3>
                  <div className="product__aside-list">
                    <div className="product__aside-item product__aside-item--border">
                      <div className="product__aside-img-wrap">
                        <img src="../img/product-1.png" className="product__aside-img" />
                      </div>
                      <div className="product__aside-title">
                        <a href="#" className="product__aside-link">
                          <h4 className="product__aside-link-heading">Oiện Thoại OPPO F7 (64GB/4GB)</h4>
                        </a>
                        <div className="product__aside-rate-wrap">
                          <i className="fas fa-star product__aside-rate" />
                          <i className="fas fa-star product__aside-rate" />
                          <i className="fas fa-star product__aside-rate" />
                          <i className="fas fa-star product__aside-rate" />
                          <i className="fas fa-star product__aside-rate" />
                        </div>
                        <div className="product__aside-price">
                          <span className="product__aside-price-current">
                            4.290.000 ₫
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="product__aside-item">
                      <div className="product__aside-img-wrap">
                        <img src="../../.../public/client/img/product-7.png" className="product__aside-img" />
                      </div>
                      <div className="product__aside-title">
                        <a href="#" className="product__aside-link">
                          <h4 className="product__aside-link-heading">Điện thoại iPhone Xs Max 256GB</h4>
                        </a>
                        <div className="product__aside-rate-wrap">
                          <i className="fas fa-star product__aside-rate" />
                          <i className="fas fa-star product__aside-rate" />
                          <i className="fas fa-star product__aside-rate" />
                          <i className="fas fa-star product__aside-rate" />
                          <i className="fas fa-star product__aside-rate" />
                        </div>
                        <div className="product__aside-price">
                          <span className="product__aside-price-current">
                            14.630.000 ₫
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="product__aside-item">
                      <div className="product__aside-img-wrap">
                        <img src="../img/product-8.png" className="product__aside-img" />
                      </div>
                      <div className="product__aside-title">
                        <a href="#" className="product__aside-link">
                          <h4 className="product__aside-link-heading">Điện thoại Samsung Galaxy S8</h4>
                        </a>
                        <div className="product__aside-rate-wrap">
                          <i className="fas fa-star product__aside-rate" />
                          <i className="fas fa-star product__aside-rate" />
                          <i className="fas fa-star product__aside-rate" />
                          <i className="fas fa-star product__aside-rate" />
                          <i className="fas fa-star product__aside-rate" />
                        </div>
                        <div className="product__aside-price">
                          <span className="product__aside-price-current">
                            11.200.000đ
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <Outlet />
      </main>

    </div>
  )
};

export default Detail;