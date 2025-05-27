import React, { createContext, useContext, useReducer } from 'react';

const cartStateContext = createContext();
const cartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      // Add new item with unitPrice stored separately
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          qty: action.qty,
          size: action.size,
          unitPrice: action.unitPrice,  // store unit price
          img: action.img,
        },
      ];
    }
    case "REMOVE": {
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;
    }
    case "UPDATE": {
      // Find the item and update qty by adding
      return state.map((food) => {
        if (food.id === action.id && food.size === action.size) {
          const updatedQty = parseInt(food.qty) + parseInt(action.qty);
          return { ...food, qty: parseInt(action.qty), size: action.size, };
        }
        return food;
      });
    }
    case "DROP":
      return [];
    default:
      console.error("Error in reducer: unknown action type");
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
