import { Cart } from "../components/carts/cart";

const Basket = ({ cart, setCart, convertPrice }) => {
  return <Cart cart={cart} setCart={setCart} convertPrice={convertPrice} />;
};

export default Basket;
