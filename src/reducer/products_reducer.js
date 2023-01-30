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

const products_reducer = (state, action) => {
  if (action.type === CATEGORYLIST_OPEN) {
    return { ...state, isCategoryListOpen: true };
  }
  if (action.type === CATEGORYLIST_CLOSE) {
    return { ...state, isCategoryListOpen: false };
  }
  if (action.type === CATEGORY_LOADING) {
    return { ...state, categories_loading: true };
  }
  if (action.type === CATEGORY_ERROR) {
    return { ...state, categories_error: false, categories_loading: false };
  }
  if (action.type === CATEGORY_SUCCESS) {
    const data = action.payload;
    return {
      ...state,
      categories_error: false,
      categories_loading: false,
      categories: [...data],
    };
  }

  if (action.type === PRODUCTS_LOADING) {
    return { ...state, products_loading: true, products_error: false };
  }

  if (action.type === PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }

  if (action.type === PRODUCTS_SUCCESS) {
    const data = action.payload;

    return {
      ...state,
      products_loading: false,
      products_error: false,
      products: [...data],
    };
  }

  if (action.type === ADDTOCART) {
    const newArray = [...state.cart];
    newArray.push(action.payload);
    return { ...state, cart: newArray };
  }

  return state;
};

export default products_reducer;
