import React from 'react'
import {Outlet, Link} from 'react-router-dom';
import { search } from '../client_api/product'
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate()
    const onSearch = () => {
        const search_value = (document.querySelector('#search_content') as HTMLInputElement).value
        if (search_value != "") {
            navigate(`/search/${search_value}`)
        }
    }

  return (
    <div>
        <header id="header">
                    <div className="header__top">
                        <div className="container">
                            <section className="row flex">
                                <div className="col-lg-5 col-md-0 col-sm-0 heade__top-left">
                                    <span>Lê Anh Thái - PH15128</span>
                                </div>

                                <nav className="col-lg-7 col-md-0 col-sm-0 header__top-right">
                                    <ul className="header__top-list">
                                        <li className="header__top-item">
                                            <a href="#" className="header__top-link">

                                                Hỏi đáp</a>
                                        </li>
                                        <li className="header__top-item">
                                            <a href="#" className="header__top-link">Hướng dẫn</a>
                                        </li>
                                        <li className="header__top-item">
                                            <a href="#" className="header__top-link">Đăng ký</a>
                                        </li>
                                        <li className="header__top-item">
                                            <a href="#" className="header__top-link">Đăng nhập</a>
                                        </li>
                                    </ul>
                                </nav>
                            </section>
                        </div>
                    </div>

            <div className="header__bottom">
                <div className="container">
                    <section className="row">
                        <div className="col-lg-3 col-md-4 col-sm-12 header__logo">
                            <h1 className="header__heading">
                                <a href="#" className="header__logo-link">
                                    <img src="./client/img/logo.png" alt="Logo" className="header__logo-img"/>
                                </a>
                            </h1>
                        </div>

                        <div className="col-lg-6 col-md-7 col-sm-0 header__search">
                            <select name="" id="" className="header__search-select">
                                <option value="0">All</option>
                                <option value="1">Iphone</option>
                                <option value="2">Samsung</option>
                                <option value="3">Oppo</option>
                                <option value="4">Nokia</option>
                                <option value="5">Sony</option>
                                <option value="6">Xaomi</option>
                            </select>
                            <input type="text" id="search_content" className="header__search-input" placeholder="Tìm kiếm tại đây..."/>
                            <button onClick={onSearch} aria-label="Search"  className="header__search-btn">
                                <div className="header__search-icon-wrap">
                                    <i className="fas fa-search header__search-icon"></i>
                                </div>
                            </button>
                        </div>

                        <div className="col-lg-2 col-md-0 col-sm-0 header__call">
                            <div className="header__call-icon-wrap">
                                <i className="fas fa-phone-alt header__call-icon"></i>
                            </div>
                            <div className="header__call-info">
                                <div className="header__call-text">
                                    Gọi điện tư vấn
                                </div>
                                <div className="header__call-number">
                                    0986.977.365
                                </div>
                            </div>
                        </div>

                        <Link to={'/cart'} className="col-lg-1 col-md-1 col-sm-0 header__cart">
                            <div className="header__cart-icon-wrap">
                                <span className="header__notice">4</span>
                                <i className="fas fa-shopping-cart header__nav-cart-icon"></i>
                            </div>
                        </Link>
                    </section>
                </div>
            </div>

            <div className="header__nav">
                <div className="container">
                    <section className="row">
                        <div className="header__nav-menu-wrap col-lg-3 col-md-0 col-sm-0">
                            <i className="fas fa-bars header__nav-menu-icon"></i>
                            <div className="header__nav-menu-title">Danh mục sản phẩm</div>
                        </div>

                        <div className="header__nav col-lg-9 col-md-0 col-sm-0">
                            <div className="toggle" id="toggle">
                                <i className="fas fa-bars"></i>
                            </div>
                           <nav>
                            <ul id="header__nav-list" className="header__nav-list">
                                <li className="header__nav-item">
                                    <Link to={'/'} className="header__nav-link">Trang chủ</Link>
                                </li>
                                <li className="header__nav-item">
                                    <a href="#" className="header__nav-link">Giới thiệu</a>
                                </li>
                                <li className="header__nav-item">
                                    <a href="#" className="header__nav-link">Sản phẩm</a>
                                </li>
                                <li className="header__nav-item">
                                    <Link to={'./post'} className="header__nav-link">Bài viết</Link>
                                </li>
                                <li className="header__nav-item">
                                    <a href="#" className="header__nav-link">Tuyển cộng tác viên</a>
                                </li>
                                <li className="header__nav-item">
                                    <Link to={'./contact'} className="header__nav-link">Liên hệ</Link>
                                </li>
                            </ul>
                           </nav>
                        </div>
                    </section>
                </div>
            </div>
            </header>
            <section className="menu-slide">
            <div className="container">
                <div className="row">
                    <nav className="menu__nav col-lg-3 col-md-12 col-sm-0">
                        <ul className="menu__list">
                            <li className="menu__item menu__item--active">
                                <a href="#" className="menu__link">

                                    Iphone</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">


                                    Samsung </a>
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
                    <div className="slider col-lg-9 col-md-12 col-sm-0">
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="1000">
                                    <img src="./client/img/slide-1.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="./client/img/slide-2.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item" data-bs-interval="3000">
                                    <img src="./client/img/slide-3.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item" data-bs-interval="4000">
                                    <img src="./client/img/slide-4.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item" data-bs-interval="5000">
                                    <img src="./client/img/slide-5.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item" data-bs-interval="5000">
                                    <img src="./client/img/slide-6.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}