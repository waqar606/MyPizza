import React from "react";
import FoodCart from "./FoodCart";
import FoodData from "./Data";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const handleToast = (name) => {
    toast.success(`${name} added to cart`);
  };
  const search = useSelector((state) => state.search.search);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => {
          return (
            <FoodCart
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              handleToast={handleToast}
            />
          );
        })}

        {/* {FoodData.map((food) => {
          return (
            <FoodCart
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              handleToast={handleToast}
            />
          );
        })} */}
      </div>
    </>
  );
};

export default FoodItems;
