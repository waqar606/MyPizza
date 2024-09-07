// import React, { useState } from "react";
// import { IoMdClose } from "react-icons/io";
// import { FaShoppingCart } from "react-icons/fa";
// import ItemCart from "./ItemCart";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const navigate = useNavigate();
//   const cartItems = useSelector((state) => state.cart.cart);
//   const [activeCart, setactiveCart] = useState(true);
//   const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);
//   const totalPrice = cartItems.reduce(
//     (acc, item) => acc + item.qty * item.price,
//     0
//   );
//   return (
//     <>
//       <div
//         className={`fixed right-0 top-0 bg-white w-full lg:w-[20vw] h-full overflow-y overflow-x-hidden ${
//           activeCart ? "translate-x-0" : "translate-x-full"
//         } transition-all duration-500 z-50`}
//         style={{
//           scrollbarWidth: "none", // for Firefox
//           msOverflowStyle: "none", // for IE
//           "&::-webkit-scrollbar": {
//             display: "none", // for Chrome
//           },
//         }}
//       >
//        <div className="flex  justify-center gap-9 items-center my-4 ">
//           <span className="font-bold text-xl text-gray-800 mt-[50px]">
//             My Order
//           </span>
//           <IoMdClose
//             className="border-2 border-gray-600 font-bold p-2 text-[25px] rounded-md cursor-pointer hover:text-red-300 hover:border-red-300 mt-[50px]"
//             size={40}
//             onClick={() => setactiveCart(!activeCart)}
//           />
//         </div>
//         {cartItems.length > 0 ? (
//           cartItems.map((food) => {
//             return (
//               <ItemCart
//                 key={food.id}
//                 id={food.id}
//                 name={food.name}
//                 price={food.price}
//                 img={food.img}
//                 qty={food.qty}
//               />
//             );
//           })
//         ) : (
//           <p className="text-gray-600 text-lg text-center">You Cart is Empty</p>
//         )}

//         <div className="absolute ml-9 bottom-0">
//           <h3 className="text-gray-800 font-bold">Items: {totalQty} </h3>
//           <h3 className="text-gray-800 font-bold">
//             Total Amount: {totalPrice} $
//           </h3>
//           <hr className="w-[90vw] lg-[18vw] my-2" />
//           <button
//             onClick={() => navigate("/success")}
//             className="font-bold px-3 text-white py-2 bg-green-500 rounded-lg w-[90vw] lg:w-[16vw] mb-5"
//           >
//             Check Out{" "}
//           </button>
//         </div>
//       </div>
//       <FaShoppingCart
//         className="rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4"
//         onClick={() => setactiveCart(!activeCart)}
//       />
//     </>
//   );
// };

// export default Cart;

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cart);
  const [activeCart, setactiveCart] = useState(true);
  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );
  return (
    <>
      <div
        className={`fixed right-0 top-0 bg-white w-full lg:w-[20vw] h-full overflow-y overflow-x-hidden ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
        style={{
          scrollbarWidth: "none", // for Firefox
          msOverflowStyle: "none", // for IE
          "&::-webkit-scrollbar": {
            display: "none", // for Chrome and Safari
          },
        }}
      >
        <div className="flex  justify-center gap-9 items-center my-4 ">
          <span className="font-bold text-xl text-gray-800 mt-[50px]">
            My Orders
          </span>
          <IoMdClose
            className="border-2 border-gray-600 font-bold p-2 text-[25px] rounded-md cursor-pointer hover:text-red-300 hover:border-red-300 mt-[50px]"
            size={40}
            onClick={() => setactiveCart(!activeCart)}
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCart
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <p className="text-gray-600 text-lg text-center">You Cart is Empty</p>
        )}

        <div className="relative py-6 ml-9 bottom-0">
          <h3 className="text-gray-800 font-bold">Items: {totalQty} </h3>
          <h3 className="text-gray-800 font-bold">
            Total Amount: {totalPrice} $
          </h3>
          <hr className="w-[90vw] lg-[18vw] my-2" />
          <button
            onClick={() => navigate("/success")}
            className="font-bold px-3 text-white py-2 bg-green-500 rounded-lg w-[90vw] lg:w-[16vw] mb-5"
          >
            Check Out{" "}
          </button>
        </div>
      </div>
      <FaShoppingCart
        className="rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4"
        onClick={() => setactiveCart(!activeCart)}
      />
    </>
  );
};

export default Cart;

