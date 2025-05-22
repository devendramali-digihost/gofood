import React, { createContext, useContext, useReducer } from 'react';

const cartStateContext = createContext();
const cartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, {
        id: action.id,
        name: action.name,
        qty: action.qty,
        size: action.size,
        price: action.price,
        img: action.img
      }];
    case "REMOVE":
      let newArr = [...state]
      newArr.splice(action.index,1)
      return newArr;

    case "UPDATE":
      return state.map((food) => {
        if (food.id === action.id && food.size === action.size) {
          const updatedQty = parseInt(action.qty) + parseInt(food.qty);
          const updatedPrice = action.price + food.price;
          return { ...food, qty: updatedQty, price: updatedPrice };
        }
        return food;
      });
    case "DROP":
      let empArray = []
      return empArray
    default:
      console.log("Error in reducer");
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <cartDispatchContext.Provider value={dispatch}>
      <cartStateContext.Provider value={state}>
        {children}
      </cartStateContext.Provider>
    </cartDispatchContext.Provider>
  );
};

export const usecart = () => useContext(cartStateContext);
export const usedispatchcart = () => useContext(cartDispatchContext);
