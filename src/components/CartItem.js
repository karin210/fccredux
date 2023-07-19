import "./styles/CartItem.css";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="article">
      <img className="img-item" src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4>${price}</h4>
        <button
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <img
            className="chevron"
            src="https://cdn-icons-png.flaticon.com/512/142/142052.png"
            alt="up"
          />
        </button>
        <p>{amount}</p>
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <img
            className="chevron"
            src="https://cdn-icons-png.flaticon.com/512/120/120890.png"
            alt="up"
          />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
