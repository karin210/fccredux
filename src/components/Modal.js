import React from "react";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import "./styles/Modal.css";

export default function Modal() {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div>
        <h4 className="text">Remove all items from the shopping cart?</h4>
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
