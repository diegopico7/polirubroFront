/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const initialState = [];

export const CarritoProvider = ({ children }) => {
  const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[CARRITO] Agregar Compra":
        return [...state, action.payload];

      case "[CARRITO] Aumentar Cantidad Compra":
        return state.map((item) => {
          const cant = item.cantidad + 1;
          if (item._id === action.payload) return { ...item, cantidad: cant };
          return item;
        });

      case "[CARRITO] Disminuir Cantidad Compra":
        return state.map((item) => {
          const cant = item.cantidad - 1;
          if (item._id === action.payload && item.cantidad > 1)
            return { ...item, cantidad: cant };
          return item;
        });

      case "[CARRITO] Eliminar Compra":
        return state.filter((compra) => compra._id !== action.payload);
      default:
        return state;
    }
  };

  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);
  console.log("Lista de compras:", listaCompras);

  const agregarCompra = (compra) => {
    compra.cantidad = 1;
    compra.precio = 20;

    const action = {
      type: "[CARRITO] Agregar Compra",
      payload: compra,
    };
    dispatch(action);
  };
  const aumentarCantidad = (_id) => {
    const action = {
      type: "[CARRITO] Aumentar Cantidad Compra",
      payload: _id,
    };
    dispatch(action);
  };
  const disminuirCantidad = (_id) => {
    const action = {
      type: "[CARRITO] Disminuir Cantidad Compra",
      payload: _id,
    };
    dispatch(action);
  };
  const eliminarCompra = (_id) => {
    console.log("eliminando compra con ID", _id);
    const action = {
      type: "[CARRITO] Eliminar Compra",
      payload: _id,
    };

    dispatch(action);
  };

  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        agregarCompra,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
