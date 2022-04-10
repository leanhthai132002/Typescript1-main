import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom';
import { getProducts } from '../client_api/product'

export type PRODUCT = {
    _id: number,
    name: string,
    desc: string,
    price: number,
    category: string,
    image: string,
    status: number
};

const Dashboard = () => {
    const [products, setProducts] = useState<PRODUCT[]>([]);
    const handleGetProducts = async () => {
        const response = await getProducts();
        setProducts(response.data);

    }

    useEffect(() => {
        handleGetProducts();
    }, [])
    return (
        <div>
            <section className="bestselling">
                <div className="container">
                    <div className="row">
                        <div className="bestselling__heading-wrap">
                            <div className="bestselling__heading">Danh mục sản phẩm</div>
                        </div>
                    </div>
                    <section className="row">
                        {products.map((product, index) => (
                        <div className="bestselling__product col-lg-4 col-md-6 col-sm-12">
                            <div className="bestselling__product-img-box">
                                
                                <div className="bestselling__product-img">
                                                <a href="single-page.html">{product.image
                                                    ? <img src={product.image} width={100} alt="" />
                                                    : null}</a>
                                </div>
                            </div>
                            <div className="bestselling__product-text">
                                <h3 className="bestselling__product-title">
                                    <a href='' className="bestselling__product-link">{product.name}</a>
                                </h3>

                                <div className="bestselling__product-rate-wrap">
                                    <i className="fas fa-star bestselling__product-rate"></i>
                                    <i className="fas fa-star bestselling__product-rate"></i>
                                    <i className="fas fa-star bestselling__product-rate"></i>
                                    <i className="fas fa-star bestselling__product-rate"></i>
                                    <i className="fas fa-star bestselling__product-rate"></i>
                                </div>

                                <span className="bestselling__product-price">
                                    {product.price} vnd
                                </span>

                                <div className="bestselling__product-btn-wrap">
                                    <Link to={`/product/${product._id}`}><button className="bestselling__product-btn">Xem hàng</button></Link>
                                </div>
                            </div>
                        </div> 
                        ))}
                    
                    </section>

                    <div className="row bestselling__banner">
                        <div className="bestselling__banner-left col-lg-6">
                            <img src="./client/img/banner-1.png" alt="Banner quảng cáo" className="bestselling__banner-left-img" width="100%" />
                        </div>
                        <div className="bestselling__banner-right col-lg-6">
                            <img src="./client/img/banner-4.png" alt="Banner quảng cáo" className="bestselling__banner-right-img" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="posts">
                <div className="container">
                    <header className="row posts__title">
                        <div className="posts__title-wrap col-lg-12 col-md-12 col-sm-12">
                            <h2 className="posts__heading">
                                Tin tức - Bài viết
                            </h2>
                        </div>
                    </header>
                    <article className="row posts__list">
                        <div className="posts__item col-lg-3 col-md-6 col-sm-6">
                            <div className="posts__item-img">
                                <img src="./client/img/FlipBuds-Pro-3-300x300.jpg" />
                            </div>
                            <h3 className="posts__item-heading">
                                <a href="" className="posts__item-title">
                                    Xiaomi ra mắt tai nghe
                                    FlipBuds Pro: Chống ồn chủ
                                    động ANC giá 2.9 triệu...
                                </a>
                            </h3>
                            <div className="posts__item-date">
                                28/05/2020
                            </div>
                            <div className="posts__item-cate-wrap">
                                <div className="posts__item-cate">
                                    <i className="fa fa-folder posts__item-cate-icon"></i>
                                    <div className="posts__item-cate-name">
                                        Tin tức
                                    </div>
                                </div>
                                <div className="posts__item-cate-ad">
                                    <i className="fa fa-user posts__item-cate-ad-icon"></i>
                                    <div className="posts__item-cate-ad-name">
                                        Lê Anh Thái
                                    </div>
                                </div>
                            </div>
                            <div className="posts__item-description">
                                Nhìn từ bên ngoài, khó có thể phủ nhận rằng Xiaomi FlipBuds Pro phần lớn được lấy cảm hứng
                                từ AirPods Pro, với thân ngắn và phần housing bo cong giống như tai nghe của Apple. Tuy
                                nhiên, nó chỉ có một tuỳ chọn màu sắc duy nhất là màu đen, đồng thời tráng gương nhờ lớp phủ
                                nano NCVM để mang lại vẻ ngoài cao cấp hơn.
                            </div>
                        </div>

                        <div className="posts__item col-lg-3 col-md-6 col-sm-6">
                            <div className="posts__item-img">
                                <img src="./client/img/Untitled-2-1-300x300.jpg" />
                            </div>
                            <h3 className="posts__item-heading">
                                <a href="" className="posts__item-title">
                                    Chương trình khuyến mãi Mua 1 Tặng 1
                                </a>
                            </h3>
                            <div className="posts__item-date">
                                05/06/2020
                            </div>
                            <div className="posts__item-cate-wrap">
                                <div className="posts__item-cate">
                                    <i className="fa fa-folder posts__item-cate-icon"></i>
                                    <div className="posts__item-cate-name">
                                        Tin tức
                                    </div>
                                </div>
                                <div className="posts__item-cate-ad">
                                    <i className="fa fa-user posts__item-cate-ad-icon"></i>
                                    <div className="posts__item-cate-ad-name">
                                        Lê Anh Thái
                                    </div>
                                </div>
                            </div>
                            <div className="posts__item-description">
                                Qúy khách hàng khi mua điện thoại thuộc dòng Redmi 10X 4G và Redmi 10X 5G được tặng ngay 1
                                sạc dự phòng Redmi:
                                Đối với sản phẩm trị giá trên 5.000.000 đồng được tặng ngay Sạc sự phòng Redmi 10000mAh
                                Đối với sản phẩm trị giá dưới 5.000.000 đồng được tặng ngay Sạc sự phòng Redmi 20000mAh </div>
                        </div>

                        <div className="posts__item col-lg-3 col-md-6 col-sm-6">
                            <div className="posts__item-img">
                                <img
                                    src="./client/img/xiaomi-gay-quy-quat-deo-co-qualitell-ngoai-hinh-nhu-tai-nghe-3-toc-do-gio-dung-5-gio-gia-chi-khoang-350-000-dong-5-300x300.jpg" />
                            </div>
                            <h3 className="posts__item-heading">
                                <a href="#" className="posts__item-title">
                                    Xiaomi gây quỹ quạt đeo cổ Qualitell ngoại hình như tai nghe: 3 tốc độ gió...
                                </a>
                            </h3>
                            <div className="posts__item-date">
                                26/05/2020
                            </div>
                            <div className="posts__item-cate-wrap">
                                <div className="posts__item-cate">
                                    <i className="fa fa-folder posts__item-cate-icon"></i>
                                    <div className="posts__item-cate-name">
                                        Tin tức
                                    </div>
                                </div>
                                <div className="posts__item-cate-ad">
                                    <i className="fa fa-user posts__item-cate-ad-icon"></i>
                                    <div className="posts__item-cate-ad-name">
                                        Lê Anh Thái
                                    </div>
                                </div>
                            </div>
                            <div className="posts__item-description">
                                Về hình thức bên ngoài chắc hẳn nhiều người sẽ nhầm lẫn sản phẩm này là một chiếc tai
                                nghe headphone bởi thiết kế đeo cổ độc đáo. Sản phẩm sở hữu kích thước 210 x 180 x
                                65.5mm cùng trọng lượng siêu nhẹ chỉ 295g. Thiết kế nẹp cổ hình chữ U cùng vật liệu ABS
                                và silicone cho cảm giác đeo thoải mái, thân thiện với làn da.
                            </div>
                        </div>

                        <div className="posts__item col-lg-3 col-md-6 col-sm-6">
                            <div className="posts__item-img">
                                <img src="./client/img/Xiaomi-Mi-11-Lite-5g-13-1536x1024.jpg" />
                            </div>
                            <h3 className="posts__item-heading">
                                <a href="" className="posts__item-title">
                                    So sánh Xiaomi Mi 11 Lite 5G và Mi 11 Lite 4G: Khác biệt không chỉ đến từ cái...
                                </a>
                            </h3>
                            <div className="posts__item-date">
                                22/05/2020
                            </div>
                            <div className="posts__item-cate-wrap">
                                <div className="posts__item-cate">
                                    <i className="fa fa-folder posts__item-cate-icon"></i>
                                    <div className="posts__item-cate-name">
                                        Tin tức
                                    </div>
                                </div>
                                <div className="posts__item-cate-ad">
                                    <i className="fa fa-user posts__item-cate-ad-icon"></i>
                                    <div className="posts__item-cate-ad-name">
                                        Lê Anh Thái
                                    </div>
                                </div>
                            </div>
                            <div className="posts__item-description">
                                Xiaomi Mi 11 Lite mới được ra mắt tại thị trường Việt Nam, chiếc máy này vẫn sở hữu đặc
                                điểm nổi bật đó chính là hiệu năng trên giá thành tốt, thêm vào đó, chiếc máy này trở
                                nên toàn diện hơn khi trung hòa nhiều yếu tố từ thiết kế đến camera và màn hình. Tuy
                                nhiên, sự xuất hiện của phiên bản 5G khiến nhiều người dùng băn khoăn, nếu bạn đang phân
                                vân...
                            </div>
                        </div>
                    </article>
                    <article className="row posts__view">
                        <a href="" className="posts__view-btn">Xem thêm</a>
                    </article>
                </div>
            </section>
        </div>
    )
}
export default Dashboard;