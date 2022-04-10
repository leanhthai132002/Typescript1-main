import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
function contact () {
    return (
<div className="row mt-4 mb-4">
  <div className="col-lg-6 col-md-6 col-sm-12 contact__self">
    <h3 className="mb-4">
      Liên hệ với chúng tôi
    </h3>
    <p>
      Để không ngừng nâng cao chất lượng dịch vụ và đáp ứng tốt hơn nữa các yêu cầu của Quý khách,
      chúng tôi mong muốn nhận được các thông tin phản hồi. Nếu Quý khách có bất kỳ thắc mắc hoặc đóng
      góp nào, xin vui lòng liên hệ với chúng tôi theo thông tin dưới đây. Chúng tôi sẽ phản hồi lại
      Quý khách trong thời gian sớm nhất.
    </p>
    <h3 className="mt-4 mb-4">
      Thông tin liên hệ
    </h3>
    <ul className="contact__self-list">
      <li className="contact__self-item">
        <a className="contact__self-link" href="#">SĐT: (+84) 0986 977 365</a>
      </li>
      <li className="contact__self-item">
        <a className="contact__self-link" href="#">Email: pdvuongtb@gmail.com
        </a>
      </li>
      <li className="contact__self-item">
        <a className="contact__self-link" href="#">Địa chỉ 1: BBA Hoàn Cầu Đống Đa - Hà Nội</a>
        <a className="contact__self-link" href="#">Địa chỉ 2: Số 25 Ngõ 178/71 - Tây Sơn - Đống Đa - Hà Nội</a>
      </li>
    </ul>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-12 contact__regist">
    <h3 className="mb-4">
      Đăng ký tư vấn miễn phí
    </h3>
    <p>Quý khách vui lòng để lại thông tin để nhân viên tư vấn điện lại cho bạn sớm nhất!</p>
    <form>
      <input type="text" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Họ tên của bạn..." />
      <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email của bạn..." />
      <input type="number" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Số điện thoại..." />
      <textarea name = "id" cols={200} rows={15} placeholder="Nội dung cần tư vấn..." defaultValue={""} />
      <button type="submit">Gửi liên hệ</button>
    </form>
  </div>
</div>

    )
};

export default contact;