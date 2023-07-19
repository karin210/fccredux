import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section>
        <header>
          <h2>Your bag</h2>
          <h4>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section>
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div>
          <h4>
            Total
            <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button onClick={() => dispatch(openModal())}>Clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
