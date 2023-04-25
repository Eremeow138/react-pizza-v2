/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.scroll(0, 0);
    fetch("https://63e9ba4eb120461c6bf3deb0.mockapi.io/items")
      .then((response) => response.json())
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((pizza) => (
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
    </>
  );
}
