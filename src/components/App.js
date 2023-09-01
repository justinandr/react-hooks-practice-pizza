import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [editPizza, setEditPizza] = useState({})

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(res => res.json())
    .then(data => setPizzas(data))
  }, [])

  function handleEditClick(pizzaToEdit) {
    setEditPizza(pizzaToEdit)
  }

  function handleChangeForm(name, value) {
    setEditPizza({...editPizza, [name]: value})
  }

  function handleEditPizza(updatedPizza) {
    const updatedPizzas = pizzas.map(pizza => 
      pizza.id === updatedPizza.id ? updatedPizza : pizza
    )
    setEditPizza(updatedPizza)
    setPizzas(updatedPizzas)
  }

  return (
    <>
      <Header />
      <PizzaForm pizza={editPizza} onChangeForm={handleChangeForm} onEditPizza={handleEditPizza} />
      <PizzaList pizzas={pizzas} onEditClick={handleEditClick} />
    </>
  );
}

export default App;
