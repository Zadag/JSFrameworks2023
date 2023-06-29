import { useState } from "react";

const GroceryItem = ({ itemId, name, price, clickHandler }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>${price}</td>
      <td>
        <button
          aria-label="delete"
          title="delete"
          onClick={(e) => clickHandler(e)}
        >
          &times;
        </button>
      </td>
    </tr>
  );
};

export default GroceryItem;
