/* eslint-disable react/jsx-key */
import "./App.css";
import "./scss/app.scss";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    fetch("https://63e9ba4eb120461c6bf3deb0.mockapi.io/items")
      .then((response) => response.json())
      .then((json) => {
        setPizzas(json);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((pizza) => (
              <PizzaBlock
                key={pizza.id}
                title={pizza.title}
                price={pizza.price}
                image={pizza.imageUrl}
                sizes={pizza.sizes}
                types={pizza.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
