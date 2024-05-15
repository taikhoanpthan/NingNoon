// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ backgroundColor: "#323232", color: "#d9d9d9" }} id="footer">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 8vw",
          paddingTop: "80px",
          marginTop: "100px",
        }}
      >
        <div>
          <img src={assets.logo} alt="" style={{ width: "100px" }} />
          <p style={{ marginBottom: "20px" }}>
            Địa chỉ: 274, Lê Quang Định, Phường 11, Bình Thạnh, TP.HCM
          </p>
          <p>Giao hàng: Giao hàng miễn phí dưới 2km</p>
          <div style={{ display: "flex", gap: "10px", margin: "10px 0px" }}>
            <img src={assets.facebook_icon} alt="" style={{ width: "40px" }} />
            <img src={assets.twitter_icon} alt="" style={{ width: "40px" }} />
            <img src={assets.linkedin_icon} alt="" style={{ width: "40px" }} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h2>COMPANY</h2>
          <ul style={{ padding: "0", listStyle: "none" }}>
            <li>Trang chủ</li>
            <li>Về chúng tôi</li>
            <li>Giao hàng</li>
            <li>Chính sách bảo mật</li>
          </ul>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h2>GET IN TOUCH</h2>
          <ul style={{ padding: "0", listStyle: "none" }}>
            <li>+84706796875</li>
            <li>myphan.cv2003@gmail.com</li>
          </ul>
        </div>
      </div>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: "999",
            display: "block",
            backgroundColor: "tomato",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Trở lại đầu trang
        </button>
      )}
      <p
        style={{
          textAlign: "center",
          backgroundColor: "#323232",
          color: "#d9d9d9",
          margin: "0",
          padding: "20px 8vw",
        }}
      >
        Copyright 2024 © tiemtraningnoon.vn - ALL right Reserved.
      </p>
    </div>
  );
};

export default Footer;
