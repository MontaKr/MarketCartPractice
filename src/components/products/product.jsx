import { Link } from "react-router-dom";
import styled from "styled-components";

export const Product = ({ product, convertPrice }) => {
  return (
    <Wrap>
      <Link to={`/product/${product.id}`}>
        <div className="product_image">
          <img src={product.image} alt="product" />
        </div>
      </Link>
      <div className="store">
        <span>{product.provider}</span>
      </div>
      <div className="product_name">
        <span>{product.name}</span>
      </div>
      <div className="product_price">
        <span className="price">{convertPrice(product.price)}</span>
        <span className="unit">원</span>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  .product_image {
    width: 380px;
    height: 380px;
    border-radius: 10px;
    margin-bottom: 16px;
  }

  .product_image img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
  }

  .store {
    margin-bottom: 10px;
  }

  .store span {
    font-size: 16px;
    line-height: 22px;
    color: #767676;
  }

  .product_name {
    margin-bottom: 10px;
  }

  .product_name span {
    font-size: 18px;
    line-height: 22px;
    color: #000000;
  }

  .price {
    font-size: 24px;
    font-weight: bold;
    line-height: 30px;
    color: #000000;
  }

  .unit {
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }

  @media (max-width: 968px) {
    .product_image {
      width: 220px;
      height: 220px;
    }
    .product_name span {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    .product_image {
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: 360px) {
    .product_image {
      width: 200px;
      height: 200px;
    }

    .store span {
      font-size: 12px;
      line-height: 22px;
      color: #767676;
    }

    .product_name span {
      font-size: 12px;
    }
  }
`;
