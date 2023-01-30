import axios from "axios";
import React, { useContext, useReducer } from "react";
import {
  ADDTOCART,
  CATEGORYLIST_CLOSE,
  CATEGORYLIST_OPEN,
  CATEGORY_ERROR,
  CATEGORY_LOADING,
  CATEGORY_SUCCESS,
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  PRODUCTS_SUCCESS,
} from "../action";

import reducer from "../reducer/products_reducer";

const initialState = {
  isCategoryListOpen: false,
  categories_loading: false,
  categories_error: false,
  categories: [],
  products_loading: false,
  products_error: false,
  products: [],
  cart: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const categoryListOpen = () => {
    dispatch({ type: CATEGORYLIST_OPEN });
  };
  const categoryListClose = () => {
    dispatch({ type: CATEGORYLIST_CLOSE });
  };

  const fetchCategories = async (url) => {
    dispatch({ type: CATEGORY_LOADING });

    try {
      const response = await axios.get(url);
      const categories = response.data;
      dispatch({ type: CATEGORY_SUCCESS, payload: categories });
    } catch (error) {
      dispatch({ type: CATEGORY_ERROR });
    }
  };

  const fetchProducts = async (url) => {
    dispatch({ type: PRODUCTS_LOADING });

    try {
      const response = await axios.get(url);
      const products = response.data.products;

      dispatch({ type: PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: PRODUCTS_ERROR });
    }
  };

  const addToCart = async (item) => {
    // const cart = await axios.post(
    //   "https://dummyjson.com/carts/add",
    //   cartBox,
    //   {
    //     headers: { "Content-Type": "application/json" },
    //   }
    // );
    // const data = await fetch("https://dummyjson.com/carts/add", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(item),
    // });

    dispatch({ type: ADDTOCART, payload: item });
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        categoryListOpen,
        categoryListClose,
        fetchCategories,
        fetchProducts,
        addToCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
