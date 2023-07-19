import { useSelector } from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import "./styles/Navbar.css";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <nav className="nav">
      <div className="nav-items-container">
        <h3>Redux toolkit</h3>
        <div className="cart-item-container">
          <CartIcon />
          <div>
            <p>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
