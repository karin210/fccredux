import React from "react";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

export default function Modal() {
  const dispatch = useDispatch();
  return (
    <aside>
      <div>
        <h4>Remove all items from your shopping cart?</h4>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
        >
          Confirm
        </button>
        <button
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          Cancel
        </button>
      </div>
    </aside>
  );
}
