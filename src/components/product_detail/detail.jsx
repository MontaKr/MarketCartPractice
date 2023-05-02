import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../service/fetcher";

export const Detail = ({ convertPrice }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);

  const handleQuantity = (type) => {
    if (type === "plus") {
      setCount(count + 1);
    } else {
      if (count === 1) {
        return;
      }
      setCount(count - 1);
    }
  };

  useEffect(() => {
    getProducts().then((data) => {
      setProduct(
        data.data.products.find((product) => product.id === parseInt(id))
      );
    });
  }, []);
  return (
    product && (
      <Wrap>
        <main className="main">
          <section className="product">
            <div className="product_img">
              <img src={product.image} alt="product" />
            </div>
          </section>
          <section className="product">
            <div className="product_info">
              <p className="seller_store">{product.provider}</p>
              <p className="product_name">{product.name}</p>
              <span className="price">
                {convertPrice(product.price + "")}
                <span className="unit">원</span>
              </span>
            </div>
            <div className="delivery">
              <p>택배배송 / 무료배송</p>
            </div>
            <div className="line"></div>
            <div className="amount">
              <img
                className="minus"
                src="/images/icon-minus-line.svg"
                alt="minus"
                onClick={() => {
                  handleQuantity("minus");
                }}
              />
              <div className="count">
                <span>{count}</span>
              </div>
              <img
                className="plus"
                src="/images/icon-plus-line.svg"
                alt="plus"
                onClick={() => {
                  handleQuantity("plus");
                }}
              />
            </div>
            <div className="line"></div>
            <div className="sum">
              <div>
                <span className="sum_price">총 상품 금액</span>
              </div>
              <div className="total_info">
                <span className="total">
                  총 수량 <span className="total_count">{count}개</span>
                </span>
                <span className="total_price">
                  {convertPrice(product.price * count)}
                  <span className="total_unit">원</span>
                </span>
              </div>
            </div>
            <div className="btn">
              <button className="btn_buy">바로 구매</button>
              <button className="btn_cart">장바구니</button>
            </div>
          </section>
        </main>
      </Wrap>
    )
  );
};

const Wrap = styled.div`
  .main {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
  }

  .product {
    width: 600px;
    height: 600px;
    display: flex;
    flex-direction: column;
    margin-right: 50px;
  }

  .product_img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .product_img img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .product_info {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .product_info .seller_store {
    font-size: 18px;
    line-height: 23px;
    color: #767676;
    margin-bottom: 16px;
  }

  .product_info .product_name {
    font-size: 36px;
    line-height: 45px;
    color: #000000;
    margin-bottom: 20px;
  }

  .product_info .price {
    font-size: 36px;
    line-height: 45px;
    color: #000000;
    margin-bottom: 138px;
  }

  .product_info .unit {
    font-size: 18px;
    line-height: 23px;
    color: #000000;
  }

  .delivery {
    width: 150px;
    height: 20px;
    margin-bottom: 20px;
  }

  .delivery p {
    font-size: 16px;
    line-height: 20px;
    color: #767676;
  }

  .line {
    width: 600px;
    height: 2px;
    background: #c4c4c4;
    margin-bottom: 30px;
  }

  .amount {
    position: relative;
    width: 150px;
    height: 50px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    margin-bottom: 30px;
  }

  .amount .minus {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .amount .count {
    position: absolute;
    width: 56px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #c4c4c4;
    border-top: none;
    border-bottom: none;
  }

  .amount .count span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .amount .plus {
    position: absolute;
    width: 20px;
    height: 40px;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .sum {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .sum .sum_price {
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    color: #000000;
  }

  .sum .total {
    font-size: 18px;
    line-height: 23px;
    color: #767676;
  }

  .sum .total_count {
    font-size: 18px;
    line-height: 23px;
    color: #19ce60;
  }

  .sum .total_count::after {
    content: "|";
    width: 5px;
    height: 23px;
    color: #c4c4c4;
    padding: 0px 11px;
  }

  .sum .total_price {
    font-size: 36px;
    line-height: 45px;
    color: #19ce60;
  }

  .sum .total_unit {
    font-size: 18px;
    line-height: 23px;
    color: #19ce60;
  }

  .btn .btn_buy {
    width: 416px;
    height: 60px;
    border-radius: 5px;
    background: #19ce60;
    border: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
    color: #ffffff;
    margin-right: 44px;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .btn .btn_cart {
    width: 200px;
    height: 60px;
    border-radius: 5px;
    background: #767676;
    border: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
    color: #ffffff;
  }

  .desc {
    margin-top: 140px;
  }

  @media (max-width: 1440px) {
    .main {
      flex-direction: column;
    }

    .product {
      width: 100%;
      margin: 0;
      padding: 20px;
      padding-bottom: 0;
    }

    .sum .total_price {
      font-size: 24px;
    }

    .sum .sum_price {
      margin-right: 24px;
    }

    .btn {
      justify-content: center;
    }
    .btn .btn_buy {
      width: 70%;
    }

    .btn .btn_cart {
      width: 30%;
    }

    .line {
      width: 80%;
    }

    .product_info .price {
      margin-bottom: 50px;
    }
  }

  @media (max-width: 380px) {
    .product_info .seller_store,
    .btn .btn_cart,
    .btn .btn_buy {
      font-size: 14px;
    }

    .product_info .product_name,
    .product_info .price,
    .sum .total_price {
      font-size: 20px;
    }

    .sum {
      display: block;
    }
  }
`;
