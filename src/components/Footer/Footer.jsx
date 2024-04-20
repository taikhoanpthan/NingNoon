import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Địa chỉ: 274, Lê Quang Định, Phường 11, Bình Thạnh, TP.HCM</p>
          <p>Giao hàng: Giao hàng miễn phí dưới 2km</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+84706796875</li>
            <li>myphan.cv2003@gmail.com</li>
          </ul>
        </div>
        <p className="footer-copy">
          Copyright 2024 © tiemtraningnoon.vn - ALL right Reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
