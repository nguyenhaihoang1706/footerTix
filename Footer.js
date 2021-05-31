import React, { Component } from "react";
import "./Footer.css";

import cgv from "../../assets/img/iconParner/cgv.png";
import bhd from "../../assets/img/iconParner/bhd.png";
import galaxy from "../../assets/img/iconParner/galaxycine.png";
import cineStar from "../../assets/img/iconParner/cinestar.png";
import lotte from '../../assets/img/iconParner/404b8c4b80d77732e7426cdb7e24be20.png'
import mega from "../../assets/img/iconParner/megags.png";
import beta from "../../assets/img/iconParner/bt.jpeg";
import ddc from "../../assets/img/iconParner/dcine.png";
import touch from "../../assets/img/iconParner/TOUCH.png";
import cnx from "../../assets/img/iconParner/cnx.jpeg";
import starLight from "../../assets/img/iconParner/STARLIGHT.png";
import dcine from "../../assets/img/iconParner/dcine.png";
import zalo from "../../assets/img/iconParner/zalopay_icon.png";
import payoo from "../../assets/img/iconParner/payoo.jpeg";
import vcb from "../../assets/img/iconParner/VCB.png";
import arb from "../../assets/img/iconParner/AGRIBANK.png";
import vtb from "../../assets/img/iconParner/VIETTINBANK.png";
import ivb from "../../assets/img/iconParner/IVB.png";
import go from "../../assets/img/iconParner/123go.png";
import laBan from "../../assets/img/iconParner/laban.png";
import apple from '../../assets/img/iconParner/mobileApp/apple-logo.png';
import android from '../../assets/img/iconParner/mobileApp/android-logo.png';
import fb from '../../assets/img/iconParner/social/facebook-logo.png';
import Zalo from "../../assets/img/iconParner/social/zalo-logo.png";
import Zion from "../../assets/img/iconParner/social/zion-logo.jpeg";
import boCongThuong from "../../assets/img/iconParner/social/d1e6bd560daa9e20131ea8a0f62e87f8.png";

export default class Footer extends Component {
 


  render() {
    return (
      <div id="footer">
        <div className="col-xs-12 ">
          <div className="mainMaxWidth">
            <div className="row">
              <div className="col-sm-4">
                <p className="title noPadding">TIX</p>
                <div className="row">
                  <div className="col-sm-6 noPaddingLeft fontSizeA">
                    <a>FAQ</a>
                    <a>Brand Guidelines</a>
                  </div>
                  <div className="col-sm-6 noPaddingLeft fontSizeA">
                    <a>Thỏa thuận sử dụng</a>
                    <a>Chính sách bảo mật</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12">
                <p className="title">Đối tác</p>
                <div className="col-sm-12 col-xs-12 linePartner">
                  <a target="_blank" href="http://www.cgv.vn/">
                    <img
                      className="iconConnect"
                      src={cgv}
                      style={{ background: "#fff" }}
                    />
                  </a>
                  <a target="_blank" href="http://bhdstar.vn/">
                    <img
                      className="iconConnect"
                      src={bhd}
                      style={{ background: "#fff" }}
                    />
                  </a>
                  <a target="_blank" href="http://galaxycine.vn/">
                    <img
                      className="iconConnect"
                      src={galaxy}
                      style={{ background: "#fff" }}
                    />
                  </a>
                  <a target="_blank" href="http://cinestar.com.vn/">
                    <img
                      className="iconConnect"
                      src={cineStar}
                      style={{ background: "#fff" }}
                    />
                  </a>
                  <a target="_blank" href="http://lottecinemavn.com/">
                    <img
                      className="iconConnect"
                      src={lotte}
                      style={{ background: "#fff" }}
                    />
                  </a>
                </div>
                <div className="col-sm-12 col-xs-12 linePartner">
                  <a target="_blank" href="https://www.megagscinemas.vn/">
                    <img
                      className="iconConnect"
                      src={mega}
                      style={{ background: "#fff" }}
                    />
                  </a>
                  <a target="_blank" href="https://www.betacineplex.vn/">
                    <img
                      className="iconConnect"
                      src={beta}
                      style={{ background: "#fff" }}
                    />
                  </a>
                  <a target="_blank" href="http://ddcinema.vn/">
                    <img
                      className="iconConnect"
                      src={ddc}
                      style={{ background: "#fff" }}
                    />
                  </a>
                  <a target="_blank" href="https://touchcinema.com/">
                    <img
                      className="iconConnect"
                      src={touch}
                      style={{ background: "#fff" }}
                    />
                  </a>
                  <a target="_blank" href="https://cinemaxvn.com/">
                    <img
                      className="iconConnect"
                      src={cnx}
                      style={{ background: "#fff" }}
                    />
                  </a>
                </div>
                <div className="col-sm-12 col-xs-12 linePartner">
                  <a target="_blank" href="http://starlight.vn/">
                    <img
                      className="iconConnect"
                      src={starLight}
                      style={{ background: "#fff" }}
                    />
                  </a>
                  <a target="_blank" href="https://www.dcine.vn/">
                    <img
                      className="iconConnect"
                      src={dcine}
                      style={{ background: "#fff" }}
                    />
                  </a>
                  <a target="_blank" href="https://zalopay.vn/">
                    <img
                      className="iconConnect"
                      src={zalo}
                      style={{ background: "#fff" }}
                    />
                  </a>
                  <a target="_blank" href="https://www.payoo.vn/">
                    <img
                      className="iconConnect"
                      src={payoo}
                      style={{ background: "#fff" }}
                    />
                  </a>
                  <a target="_blank" href="https://www.vietcombank.com.vn/">
                    <img
                      className="iconConnect"
                      src={vcb}
                      style={{ background: "#fff" }}
                    />
                  </a>
                </div>
                <div className="col-sm-12 col-xs-12 linePartner">
                  <a target="_blank" href="http://www.agribank.com.vn/">
                    <img
                      className="iconConnect"
                      src={arb}
                      style={{ background: "#fff" }}
                    />
                  </a>
                  <a target="_blank" href="https://www.vietinbank.vn/">
                    <img
                      className="iconConnect"
                      src={vtb}
                      style={{ background: "#fff" }}
                    />
                  </a>
                  <a target="_blank" href="https://www.indovinabank.com.vn/">
                    <img
                      className="iconConnect"
                      src={ivb}
                      style={{ background: "#fff" }}
                    />
                  </a>
                  <a target="_blank" href="http://123go.vn/">
                    <img
                      className="iconConnect"
                      src={go}
                      style={{ background: "#fff" }}
                    />
                  </a>
                  <a target="_blank" href="http://laban.vn/">
                    <img
                      className="iconConnect"
                      src={laBan}
                      style={{ background: "#fff" }}
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="row">
                  <div className="col-sm-6 text-center">
                    <p className="title">MOBILE APP</p>
                    <a
                      target="_blank"
                      href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                    >
                      <img className="iconApp" src={apple} />
                    </a>
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                    >
                      <img className="iconApp" src={android} />
                    </a>
                  </div>
                  <div className="col-sm-6 text-center">
                    <p className="title">SOCIAL</p>
                    <a target="_blank" href="https://www.facebook.com/tix.vn/">
                      <img className="iconApp" src={fb} />
                    </a>
                    <a target="_blank" href="https://zalo.me/tixdatve">
                      <img className="iconApp" src={Zalo} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-1 col-xs-12 imgFooter">
                <img
                  style={{ borderRadius: 8 }}
                  className="vngIcon"
                  src={Zion}
                />
              </div>
              <div className="col-sm-9 col-xs-12 infoFooter">
                <span>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
                <span>
                  Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp.
                  Hồ Chí Minh, Việt Nam.
                </span>
                <span>
                  {" "}
                  Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                  <br />
                  đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở
                  kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                </span>
                <span>
                  Số Điện Thoại (Hotline): 1900 545 436
                  <br />
                  Email:
                  <a
                    href="mailto:support@tix.vn"
                    style={{ color: " #FB4226 " }}
                  >
                    support@tix.vn
                  </a>
                </span>
              </div>
              <div className="col-sm-2 col-xs-12 imgFooter">
                <a
                  target="_blank"
                  href="http://online.gov.vn/Home/WebDetails/62782"
                >
                  <img
                    class="imgBoCo"
                    alt="Bộ Công Thương"
                    title=""
                    src={boCongThuong}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
