import { useState } from "react";
import "./App.css";
import GroceryItem from "./Components/GroceryItem";
import { v4 as uuidv4 } from "uuid";

const GroceryList = () => {
  const [groceryName, setGroceryName] = useState("");
  const [groceryPrice, setGroceryPrice] = useState();
  const [groceryItems, setGroceryItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGroceryItems = [
      ...groceryItems,
      {
        name: groceryName,
        price: parseFloat(groceryPrice).toFixed(2),
        itemId: uuidv4(),
      },
    ];
    setGroceryItems(newGroceryItems);
  };

  const handleChange = (e) => {
    if (e.target.name === "itemName") {
      setGroceryName(e.target.value);
    }
    if (e.target.name === "itemPrice") {
      setGroceryPrice(e.target.value);
    }
  };

  const handleDelete = (itemId) => {
    const newGroceryItems = [...groceryItems].filter(
      (item) => item.itemId !== itemId
    );

    setGroceryItems(newGroceryItems);
  };

  const handleClear = () => {
    setGroceryItems([]);
  };

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3" onSubmit={handleSubmit}>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              name="itemName"
              required
              value={groceryName}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="number"
              min="0"
              step=".01"
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
              name="itemPrice"
              value={groceryPrice}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-auto">
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              /**
               * Complete me. (You can use something else instead of a table if you like)
               * @example
               * <tr>
               *   <td>Toilet Paper</td>
               *   <td>$1.99</td>
               *   <td>
               *     <button aria-label="Delete" title="Delete" ... >
               *       &times;
               *     </button>
               *   </td>
               * </tr>
               */
              groceryItems.map((item, index) => {
                return (
                  <GroceryItem
                    key={`item-${index}`}
                    itemId={item.itemId}
                    name={item.name}
                    price={item.price}
                    clickHandler={(e) => handleDelete(item.itemId)}
                  />
                );
              })
            }
          </tbody>
        </table>
        <p className="lead">
          <strong>
            Total Cost:{" "}
            {groceryItems
              .reduce((total, curr) => {
                return total + parseFloat(curr.price);
              }, 0)
              .toFixed(2)}
          </strong>
        </p>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
