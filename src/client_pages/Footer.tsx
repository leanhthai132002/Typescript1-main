import React from 'react'

function Footer() {
  return (
    <div>
            <div>
                    <footer>
            <section className="footer__top">
                <div className="container">
                    <div className="row">
                        <article className="footer__top-intro col-lg-5 col-md-4 col-sm-6">
                            <h4 className="footer__top-intro-heading">
                                Về chúng tôi
                            </h4>
                            <div className="footer__top-intro-content">
                                Vietpro Academy thành lập 2009. Chúng tôi đào tạo chuyên sâu trong 2
                                lĩnh vực Lập trình Website & Mobile nhằm cung cấp cho thị trường CNTT
                                Việt Nam những lập trình viên thực sự chất lượng, có khả năng làm việc
                                đọc lập , cuxnh như Team Work ở mọi môi trường đòi hỏi sự chuyên ngiệp cao.
                            </div>
                        </article>

                        <article className="footer__top-policy col-lg-3 col-md-4 col-sm-6">
                            <h4 className="footer__top-policy-heading">
                                Chính sách mua hàng
                            </h4>

                            <ul className="footer__top-policy-list">
                                <li className="footer__top-policy-item">
                                    <a href="#" className="footer__top-policy-link">Hình thức đặt hàng</a>
                                </li>
                                <li className="footer__top-policy-item">
                                    <a href="#" className="footer__top-policy-link">Hình thức thanh toán</a>
                                </li>
                                <li className="footer__top-policy-item">
                                    <a href="#" className="footer__top-policy-link">Phương thức vận chuyển</a>
                                </li>
                                <li className="footer__top-policy-item">
                                    <a href="#" className="footer__top-policy-link">Chính sách đổi trả</a>
                                </li>
                                <li className="footer__top-policy-item">
                                    <a href="#" className="footer__top-policy-link">Hướng dẫ sử dụng</a>
                                </li>
                            </ul>
                        </article>

                        <article className="footer__top-contact-wrap col-lg-4 col-md-4 col-sm-6">
                            <h4 className="footer__top-contact-heading">
                                Hotline liên hệ
                            </h4>

                            <div className="footer__top-contact">
                                <div className="footer__top-contact-icon">
                                    <img src="./client/img/phone-call.png" className="footer__top-contact-img"/>
                                </div>

                                <div className="footer__top-contact-phone-wrap">
                                    <div className="footer__top-contact-phone">
                                        0986.977.365
                                    </div>
                                    <div className="footer__top-contact-des">
                                        (Tư vấn miễn phí 24/24)
                                    </div>
                                </div>
                            </div>

                            <h4 className="footer__top-contact-heading">
                                Kết nối với chúng tôi
                            </h4>

                            <div className="footer__top-contact-social">
                                <a href="#" className="footer__top-contact-social-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </a>
                                <a href="#" className="footer__top-contact-social-link">
                                    <img src="./client/img/zalo.png" alt="" height="20px"/>
                                </a>
                                <a href="#" className="footer__top-contact-social-link">
                                    <img src="./client/img/twitter.png" alt="" height="20px"/>
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section className="footer__bottom">
                <div className="container">
                    <div className="row">
                        <span className="footer__bottom-content">2018 @ Vietpro Academy. All right reserved. Developed by
                            Vietpro Software</span>
                    </div>
                </div>
            </section>
            </footer>
    </div>
    </div>
  )
}

export default Footer