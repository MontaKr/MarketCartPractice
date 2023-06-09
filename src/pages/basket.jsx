import { Cart } from "../components/carts/cart";

const Basket = ({ cart, setCart, convertPrice, checkLists, setCheckLists }) => {
  return (
    <Cart
      cart={cart}
      setCart={setCart}
      convertPrice={convertPrice}
      checkLists={checkLists}
      setCheckLists={setCheckLists}
    />
  );
};

export default Basket;
