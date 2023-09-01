import React from "react";

function Pizza({ pizza, onEditClick }) {

  const {topping, size, vegetarian} = pizza

  function handleEditClick() {
    onEditClick(pizza)
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'Yes' : 'No'}</td>
      <td>
        <button onClick={handleEditClick} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
