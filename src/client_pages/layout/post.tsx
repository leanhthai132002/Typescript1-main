import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
function post() {
    return (
        <div>

            <main>
                    <section className="posts">
                        <div className="container">
                            <div className="row pc">
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
                                <div className="breadcrumbs col-lg-12 col-md-12 col-sm-12">
                                    Trang ch??? ?? <span className="breadcrumbs__active">B??i vi???t</span>
                                </div>
                            </div>
                            <div className="row">
                                <article className="post__list col-lg-9 col-md-9 col-sm-12">
                                    <div className="post__item">
                                        <div className="post__item-img-wrap">
                                            <img src="./client/img/FlipBuds-Pro-3-300x300.jpg" className="post__item-img" />
                                        </div>
                                        <div className="post__item-content">
                                            <div className="post__item-title">
                                                <a href="#" className="post__item-link">
                                                    <h2 className="post__item-heading">
                                                        Xiaomi ra m???t tai nghe
                                                        FlipBuds Pro: Ch???ng ???n ch???
                                                        ?????ng ANC gi?? 2.9 tri???u ?????ng
                                                    </h2>
                                                </a>
                                            </div>
                                            <div className="posts__item-cate-wrap">
                                                <div className="posts__item-cate">
                                                    <i className="fa fa-folder posts__item-cate-icon" />
                                                    <div className="posts__item-cate-name">
                                                        Tin t???c
                                                    </div>
                                                </div>
                                                <div className="posts__item-cate-ad">
                                                    <i className="fa fa-user posts__item-cate-ad-icon" />
                                                    <div className="posts__item-cate-ad-name">
                                                        Phan ?????c V?????ng
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="posts__item-description">
                                                Nh??n t??? b??n ngo??i, kh?? c?? th??? ph??? nh???n r???ng Xiaomi FlipBuds Pro ph???n l???n ???????c l???y c???m
                                                h???ng t??? AirPods Pro, v???i th??n ng???n v?? ph???n housing bo cong gi???ng nh?? tai nghe c???a Apple.
                                                Tuy nhi??n, n?? ch??? c?? m???t tu??? ch???n m??u s???c duy nh???t l?? m??u ??en, ?????ng th???i tr??ng g????ng nh???
                                                l???p ph??? nano NCVM ????? mang l???i v??? ngo??i cao c???p h??n. </div>
                                        </div>
                                    </div>
                                    <div className="post__item">
                                        <div className="post__item-img-wrap">
                                            <img src="./client/img/Untitled-2-1-300x300.jpg" className="post__item-img" />
                                        </div>
                                        <div className="post__item-content">
                                            <div className="post__item-title">
                                                <a href="#" className="post__item-link">
                                                    <h2 className="post__item-heading">
                                                        Ch????ng tr??nh khuy???n m??i Mua 1 T???ng 1
                                                    </h2>
                                                </a>
                                            </div>
                                            <div className="posts__item-cate-wrap">
                                                <div className="posts__item-cate">
                                                    <i className="fa fa-folder posts__item-cate-icon" />
                                                    <div className="posts__item-cate-name">
                                                        Tin t???c
                                                    </div>
                                                </div>
                                                <div className="posts__item-cate-ad">
                                                    <i className="fa fa-user posts__item-cate-ad-icon" />
                                                    <div className="posts__item-cate-ad-name">
                                                        Phan ?????c V?????ng
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="posts__item-description">
                                                Q??y kh??ch h??ng khi mua ??i???n tho???i thu???c d??ng Redmi 10X 4G v?? Redmi 10X 5G ???????c t???ng ngay
                                                1 s???c d??? ph??ng Redmi:
                                                ?????i v???i s???n ph???m tr??? gi?? &gt; 5.000.000 ?????ng ???????c t???ng ngay S???c s??? ph??ng Redmi 10000mAh
                                                ?????i v???i s???n ph???m tr??? gi?? &lt; 5.000.000 ?????ng ???????c t???ng ngay S???c s??? ph??ng Redmi 20000mAh
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post__item">
                                        <div className="post__item-img-wrap">
                                            <img src="./client/img/xiaomi-gay-quy-quat-deo-co-qualitell-ngoai-hinh-nhu-tai-nghe-3-toc-do-gio-dung-5-gio-gia-chi-khoang-350-000-dong-5-300x300.jpg" className="post__item-img" />
                                        </div>
                                        <div className="post__item-content">
                                            <div className="post__item-title">
                                                <a href="#" className="post__item-link">
                                                    <h2 className="post__item-heading">
                                                        Xiaomi g??y qu??? qu???t ??eo c??? Qualitell ngo???i h??nh nh?? tai nghe: 3 t???c ????? gi??,
                                                        d??ng 5 gi??? gi?? ch??? kho???ng 350.000 ?????ng
                                                    </h2>
                                                </a>
                                            </div>
                                            <div className="posts__item-cate-wrap">
                                                <div className="posts__item-cate">
                                                    <i className="fa fa-folder posts__item-cate-icon" />
                                                    <div className="posts__item-cate-name">
                                                        Tin t???c
                                                    </div>
                                                </div>
                                                <div className="posts__item-cate-ad">
                                                    <i className="fa fa-user posts__item-cate-ad-icon" />
                                                    <div className="posts__item-cate-ad-name">
                                                        Phan ?????c V?????ng
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="posts__item-description">
                                                V??? h??nh th???c b??n ngo??i ch???c h???n nhi???u ng?????i s??? nh???m l???n s???n ph???m n??y l?? m???t chi???c
                                                tai nghe headphone b???i thi???t k??? ??eo c??? ?????c ????o. S???n ph???m s??? h???u k??ch th?????c 210 x 180
                                                x 65.5mm c??ng tr???ng l?????ng si??u nh??? ch??? 295g. Thi???t k??? n???p c??? h??nh ch??? U c??ng v???t
                                                li???u ABS v?? silicone cho c???m gi??c ??eo tho???i m??i, th??n thi???n v???i l??n da. </div>
                                        </div>
                                    </div>
                                    <div className="post__item">
                                        <div className="post__item-img-wrap">
                                            <img src="./client/img/Xiaomi-Mi-11-Lite-5g-13-1536x1024.jpg" className="post__item-img" />
                                        </div>
                                        <div className="post__item-content">
                                            <div className="post__item-title">
                                                <a href="#" className="post__item-link">
                                                    <h2 className="post__item-heading">
                                                        So s??nh Xiaomi Mi 11 Lite 5G v?? Mi 11 Lite 4G: Kh??c bi???t kh??ng ch??? ?????n t???
                                                        c??i t??n!
                                                    </h2>
                                                </a>
                                            </div>
                                            <div className="posts__item-cate-wrap">
                                                <div className="posts__item-cate">
                                                    <i className="fa fa-folder posts__item-cate-icon" />
                                                    <div className="posts__item-cate-name">
                                                        Tin t???c
                                                    </div>
                                                </div>
                                                <div className="posts__item-cate-ad">
                                                    <i className="fa fa-user posts__item-cate-ad-icon" />
                                                    <div className="posts__item-cate-ad-name">
                                                        Phan ?????c V?????ng
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="posts__item-description">
                                                Xiaomi Mi 11 Lite m???i ???????c ra m???t t???i th??? tr?????ng Vi???t Nam, chi???c m??y n??y v???n s??? h???u
                                                ?????c ??i???m n???i b???t ???? ch??nh l?? hi???u n??ng tr??n gi?? th??nh t???t, th??m v??o ????, chi???c m??y
                                                n??y tr??? n??n to??n di???n h??n khi trung h??a nhi???u y???u t??? t??? thi???t k??? ?????n camera v?? m??n
                                                h??nh. Tuy nhi??n, s??? xu???t hi???n c???a phi??n b???n 5G khi???n nhi???u ng?????i d??ng b??n kho??n, n???u
                                                b???n ??ang ph??n v??n... </div>
                                        </div>
                                    </div>
                                    <nav className="post__pagination">
                                        <ul className="post__pagination-list">
                                            <li className="post__pagination-item">
                                                <a className="post__pagination-link" href="#" aria-label="Previous">
                                                    <span className="post__pagination-link-prev">??</span>
                                                </a>
                                            </li>
                                            <li className="post__pagination-item post__pagination-item--active">
                                                <a className="post__pagination-link" href="#">1</a>
                                            </li>
                                            <li className="post__pagination-item">
                                                <a className="post__pagination-link" href="#">2</a>
                                            </li>
                                            <li className="post__pagination-item">
                                                <a className="post__pagination-link" href="#">3</a>
                                            </li>
                                            <li className="post__pagination-item post__pagination-item--center">...</li>
                                            <li className="post__pagination-item">
                                                <a className="post__pagination-link" href="#">9</a>
                                            </li>
                                            <li className="post__pagination-item">
                                                <a className="post__pagination-link" href="#">10</a>
                                            </li>
                                            <li className="post__pagination-item">
                                                <a className="post__pagination-link" href="#">11</a>
                                            </li>
                                            <li className="post__pagination-item">
                                                <a className="post__pagination-link" href="#" aria-label="Next">
                                                    <span className="post__pagination-link-next">??</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </article>
                                <aside className="post__aside col-lg-3 col-md-3 col-sm-0">
                                    <div className="product__aside-bottom">
                                        <h3 className="product__aside-heading">
                                            C?? th??? b???n th??ch
                                        </h3>
                                        <div className="product__aside-list">
                                            <div className="product__aside-item product__aside-item--border">
                                                <div className="product__aside-img-wrap">
                                                    <img src="./client/img/product-1.png" className="product__aside-img" />
                                                </div>
                                                <div className="product__aside-title">
                                                    <a href="#" className="product__aside-link">
                                                        <h4 className="product__aside-link-heading">Oi???n Tho???i OPPO F7 (64GB/4GB)</h4>
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
                                                            4.290.000 ???
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product__aside-item">
                                                <div className="product__aside-img-wrap">
                                                    <img src="./client/img/product-7.png" className="product__aside-img" />
                                                </div>
                                                <div className="product__aside-title">
                                                    <a href="#" className="product__aside-link">
                                                        <h4 className="product__aside-link-heading">??i???n tho???i iPhone Xs Max 256GB</h4>
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
                                                            14.630.000 ???
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product__aside-item">
                                                <div className="product__aside-img-wrap">
                                                    <img src="./client/img/product-8.png" className="product__aside-img" />
                                                </div>
                                                <div className="product__aside-title">
                                                    <a href="#" className="product__aside-link">
                                                        <h4 className="product__aside-link-heading">??i???n tho???i Samsung Galaxy S8</h4>
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
                                                            11.200.000??
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product__aside-item">
                                                <div className="product__aside-img-wrap">
                                                    <img src="./client/img/product-12.png" className="product__aside-img" />
                                                </div>
                                                <div className="product__aside-title">
                                                    <a href="#" className="product__aside-link">
                                                        <h4 className="product__aside-link-heading">??i???n tho???i iPhone 11 64GB</h4>
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
                                                            15.220.000??
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product__aside-item">
                                                <div className="product__aside-img-wrap">
                                                    <img src="./client/img/product-5.png" className="product__aside-img" />
                                                </div>
                                                <div className="product__aside-title">
                                                    <a href="#" className="product__aside-link">
                                                        <h4 className="product__aside-link-heading">Nokia 5.4 (4GB/128GB)</h4>
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
                                                            5.200.000??
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product__aside-item">
                                                <div className="product__aside-img-wrap">
                                                    <img src="./client/img/Xiaomi-Mi-9-t??m-1.png" className="product__aside-img" />
                                                </div>
                                                <div className="product__aside-title">
                                                    <a href="#" className="product__aside-link">
                                                        <h4 className="product__aside-link-heading">??i???n tho???i Xiaomi Mi 9 (6GB/128GB)</h4>
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
                                                            11.120.000??
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

export default post;