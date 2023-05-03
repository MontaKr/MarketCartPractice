import { useEffect } from "react";
import { Product } from "../products/product";
import { getProducts } from "../../service/fetcher";
import { EventBanner } from "../eventBanner/eventBanner";
import styled from "styled-components";

export const Main = ({ products, setProducts, convertPrice }) => {
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.data.products);
    });
  }, [setProducts]);
  return (
    <Wrap>
      <EventBanner />
      <div className="filter">
        <p>최신순</p>
        <p>낮은 가격</p>
        <p>높은 가격</p>
      </div>
      <main className="flex_wrap">
        {products.map((product) => {
          return (
            <Product
              key={`key-${product.id}`}
              product={product}
              convertPrice={convertPrice}
            />
          );
        })}
      </main>
    </Wrap>
  );
};

const Wrap = styled.div`
  .filter {
    display: flex;
    width: 85%;
    margin: 0 auto;
    justify-content: flex-end;
  }

  .filter > p:not(:last-child)::after {
    content: "|";
    padding: 10px;
  }

  .filter p {
    cursor: pointer;
  }

  .flex_wrap {
    max-width: 1440px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 70px 0px;
    margin: 0 auto;
    margin-top: 35px;
  }

  @media (max-width: 1440px) {
    .flex_wrap {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .flex_wrap {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 360px) {
    .filter p {
      font-size: 12px;
    }
  }
`;
