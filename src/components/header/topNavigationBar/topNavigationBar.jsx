import styled from "styled-components";
import { Link } from "react-router-dom";

export const TopNavigationBar = () => {
  return (
    <Wrap>
      <header className="header">
        <div className="inner">
          <Link to="/">
            <h1 className="logo">
              <img src="/images/logo.png" alt="logo" />
            </h1>
          </Link>
          <div className="input_wrap">
            <input type="text" placeholder="상품을 검색해보세요!" />
            <img src="/images/icon-search.svg" alt="search" />
          </div>
        </div>

        <div className="menu">
          <Link to="/cart">
            <div className="shopping_cart">
              <img src="/images/icon-shopping-cart.svg" alt="cart" />
              <span>장바구니</span>
            </div>
          </Link>
          <Link to="">
            <div className="mypage">
              <img src="/images/icon-user.svg" alt="user" />
              <span>로그인</span>
            </div>
          </Link>
        </div>
      </header>
    </Wrap>
  );
};

const Wrap = styled.div`
  .header {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  }

  .inner {
    display: flex;
    align-items: center;
  }

  .inner .logo {
    width: 124px;
    height: 38px;
    margin-right: 30px;
  }

  .inner .logo img {
    width: 124px;
    height: 38px;
  }

  .input_wrap {
    position: relative;
    width: 400px;
    height: 46px;
  }

  .input_wrap input {
    width: 400px;
    height: 46px;
    border: 2px solid #19ce60;
    border-radius: 50px;
    padding: 13px 22px;
    font-size: 16px;
    line-height: 20px;
    outline: none;
  }

  .input_wrap input::placeholder {
    font-size: 16px;
    line-height: 20px;
    color: #767676;
  }

  .input_wrap img {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 19px;
    height: 19px;
  }

  .menu {
    display: flex;
    align-items: center;
  }

  .shopping_cart,
  .mypage {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .shopping_cart {
    width: 50px;
    height: 50px;
  }

  .shopping_cart .new_shopping_cart {
    position: absolute;
    width: 15px;
    height: 15px;
    top: 0;
    right: 0;
    background-color: #eb5757;
    border-radius: 50%;
  }

  .shopping_cart .new_shopping_cart p {
    position: relative;
    top: 50%;
    left: 45%;
    transform: translate(-10%, -45%);
    background: transparent;
    font-size: 12px;
  }

  .mypage {
    width: 56px;
    height: 50px;
    margin-left: 20px;
  }

  .shopping_cart img {
    width: 32px;
    height: 32px;
  }

  .shopping_cart span,
  .mypage span {
    font-size: 12px;
    line-height: 14px;
    color: #767676;
  }

  .mypage img {
    width: 50px;
    height: 32px;
  }

  @media (max-width: 768px) {
    .input_wrap {
      display: none;
    }
  }
`;
