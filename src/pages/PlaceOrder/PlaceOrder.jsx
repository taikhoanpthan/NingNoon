// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Thông tin giao hàng</p>
        <div className="multi-fields">
          <input type="text" placeholder="Họ đệm" />
          <input type="text" placeholder="Tên" />
        </div>
        <input type="email" placeholder="Địa chỉ Email" />
        <input type="text" placeholder="Đường" />
        <div className="multi-fields">
          <input type="text" placeholder="Thành phố" />
          <input type="text" placeholder="Quận" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Tỉnh" />
        </div>
        <input type="text" placeholder="Số điện thoại" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Tổng hàng</h2>
          <div className="">
            <div className="cart-total-details">
              <p>Tổng tiền</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Phí vận chuyển</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Tổng</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button>THANH TOÁN</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
