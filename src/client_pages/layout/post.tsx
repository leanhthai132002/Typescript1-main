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
                                    Trang chủ » <span className="breadcrumbs__active">Bài viết</span>
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
                                                        Xiaomi ra mắt tai nghe
                                                        FlipBuds Pro: Chống ồn chủ
                                                        động ANC giá 2.9 triệu đồng
                                                    </h2>
                                                </a>
                                            </div>
                                            <div className="posts__item-cate-wrap">
                                                <div className="posts__item-cate">
                                                    <i className="fa fa-folder posts__item-cate-icon" />
                                                    <div className="posts__item-cate-name">
                                                        Tin tức
                                                    </div>
                                                </div>
                                                <div className="posts__item-cate-ad">
                                                    <i className="fa fa-user posts__item-cate-ad-icon" />
                                                    <div className="posts__item-cate-ad-name">
                                                        Phan Đức Vượng
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="posts__item-description">
                                                Nhìn từ bên ngoài, khó có thể phủ nhận rằng Xiaomi FlipBuds Pro phần lớn được lấy cảm
                                                hứng từ AirPods Pro, với thân ngắn và phần housing bo cong giống như tai nghe của Apple.
                                                Tuy nhiên, nó chỉ có một tuỳ chọn màu sắc duy nhất là màu đen, đồng thời tráng gương nhờ
                                                lớp phủ nano NCVM để mang lại vẻ ngoài cao cấp hơn. </div>
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
                                                        Chương trình khuyến mãi Mua 1 Tặng 1
                                                    </h2>
                                                </a>
                                            </div>
                                            <div className="posts__item-cate-wrap">
                                                <div className="posts__item-cate">
                                                    <i className="fa fa-folder posts__item-cate-icon" />
                                                    <div className="posts__item-cate-name">
                                                        Tin tức
                                                    </div>
                                                </div>
                                                <div className="posts__item-cate-ad">
                                                    <i className="fa fa-user posts__item-cate-ad-icon" />
                                                    <div className="posts__item-cate-ad-name">
                                                        Phan Đức Vượng
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="posts__item-description">
                                                Qúy khách hàng khi mua điện thoại thuộc dòng Redmi 10X 4G và Redmi 10X 5G được tặng ngay
                                                1 sạc dự phòng Redmi:
                                                Đối với sản phẩm trị giá &gt; 5.000.000 đồng được tặng ngay Sạc sự phòng Redmi 10000mAh
                                                Đối với sản phẩm trị giá &lt; 5.000.000 đồng được tặng ngay Sạc sự phòng Redmi 20000mAh
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
                                                        Xiaomi gây quỹ quạt đeo cổ Qualitell ngoại hình như tai nghe: 3 tốc độ gió,
                                                        dùng 5 giờ giá chỉ khoảng 350.000 đồng
                                                    </h2>
                                                </a>
                                            </div>
                                            <div className="posts__item-cate-wrap">
                                                <div className="posts__item-cate">
                                                    <i className="fa fa-folder posts__item-cate-icon" />
                                                    <div className="posts__item-cate-name">
                                                        Tin tức
                                                    </div>
                                                </div>
                                                <div className="posts__item-cate-ad">
                                                    <i className="fa fa-user posts__item-cate-ad-icon" />
                                                    <div className="posts__item-cate-ad-name">
                                                        Phan Đức Vượng
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="posts__item-description">
                                                Về hình thức bên ngoài chắc hẳn nhiều người sẽ nhầm lẫn sản phẩm này là một chiếc
                                                tai nghe headphone bởi thiết kế đeo cổ độc đáo. Sản phẩm sở hữu kích thước 210 x 180
                                                x 65.5mm cùng trọng lượng siêu nhẹ chỉ 295g. Thiết kế nẹp cổ hình chữ U cùng vật
                                                liệu ABS và silicone cho cảm giác đeo thoải mái, thân thiện với làn da. </div>
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
                                                        So sánh Xiaomi Mi 11 Lite 5G và Mi 11 Lite 4G: Khác biệt không chỉ đến từ
                                                        cái tên!
                                                    </h2>
                                                </a>
                                            </div>
                                            <div className="posts__item-cate-wrap">
                                                <div className="posts__item-cate">
                                                    <i className="fa fa-folder posts__item-cate-icon" />
                                                    <div className="posts__item-cate-name">
                                                        Tin tức
                                                    </div>
                                                </div>
                                                <div className="posts__item-cate-ad">
                                                    <i className="fa fa-user posts__item-cate-ad-icon" />
                                                    <div className="posts__item-cate-ad-name">
                                                        Phan Đức Vượng
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="posts__item-description">
                                                Xiaomi Mi 11 Lite mới được ra mắt tại thị trường Việt Nam, chiếc máy này vẫn sở hữu
                                                đặc điểm nổi bật đó chính là hiệu năng trên giá thành tốt, thêm vào đó, chiếc máy
                                                này trở nên toàn diện hơn khi trung hòa nhiều yếu tố từ thiết kế đến camera và màn
                                                hình. Tuy nhiên, sự xuất hiện của phiên bản 5G khiến nhiều người dùng băn khoăn, nếu
                                                bạn đang phân vân... </div>
                                        </div>
                                    </div>
                                    <nav className="post__pagination">
                                        <ul className="post__pagination-list">
                                            <li className="post__pagination-item">
                                                <a className="post__pagination-link" href="#" aria-label="Previous">
                                                    <span className="post__pagination-link-prev">«</span>
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
                                                    <span className="post__pagination-link-next">»</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </article>
                                <aside className="post__aside col-lg-3 col-md-3 col-sm-0">
                                    <div className="product__aside-bottom">
                                        <h3 className="product__aside-heading">
                                            Có thể bạn thích
                                        </h3>
                                        <div className="product__aside-list">
                                            <div className="product__aside-item product__aside-item--border">
                                                <div className="product__aside-img-wrap">
                                                    <img src="./client/img/product-1.png" className="product__aside-img" />
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
                                                    <img src="./client/img/product-7.png" className="product__aside-img" />
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
                                                    <img src="./client/img/product-8.png" className="product__aside-img" />
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
                                            <div className="product__aside-item">
                                                <div className="product__aside-img-wrap">
                                                    <img src="./client/img/product-12.png" className="product__aside-img" />
                                                </div>
                                                <div className="product__aside-title">
                                                    <a href="#" className="product__aside-link">
                                                        <h4 className="product__aside-link-heading">Điện thoại iPhone 11 64GB</h4>
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
                                                            15.220.000đ
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
                                                            5.200.000đ
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product__aside-item">
                                                <div className="product__aside-img-wrap">
                                                    <img src="./client/img/Xiaomi-Mi-9-tím-1.png" className="product__aside-img" />
                                                </div>
                                                <div className="product__aside-title">
                                                    <a href="#" className="product__aside-link">
                                                        <h4 className="product__aside-link-heading">Điện thoại Xiaomi Mi 9 (6GB/128GB)</h4>
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
                                                            11.120.000đ
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