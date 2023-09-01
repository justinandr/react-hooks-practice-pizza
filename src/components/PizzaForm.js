import React from "react";

function PizzaForm({ pizza, onChangeForm, onEditPizza }) {

  if (!pizza) return null

  const {topping, size, vegetarian} = pizza

  function handleInputChange(e) {
    onChangeForm(e.target.name, e.target.value)
  }

  function handleRadioChange(e) {
    onChangeForm(e.target.name, e.target.value === 'Vegetarian')
  }

  function handleSubmitForm(e) {
    e.preventDefault()
    fetch(`http://localhost:3001/pizzas/${pizza.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pizza)
    })
    .then(res => res.json())
    .then(onEditPizza)
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            value={topping}
            placeholder="Pizza Topping"
            onChange={handleInputChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={handleInputChange} >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian}
              onChange={handleRadioChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
              onChange={handleRadioChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
