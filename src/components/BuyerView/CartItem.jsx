import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="flex items-center justify-between border p-4 rounded mb-2">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.title}
          className="h-16 w-16 object-cover rounded mr-4"
        />
        <div>
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p>{item.price} USD</p>
        </div>
      </div>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
