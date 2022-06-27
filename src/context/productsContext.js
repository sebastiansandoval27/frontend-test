// ProductsProvider.js

import { createContext, useState } from "react";

//create a context, with createContext api
export const ProductsContext = createContext({
  products: [],
  query: "",
});

const ProductsProvider = (props) => {
  // this state will be shared with all components
  const [products, setProducts] = useState({
    products: [],
    query: "",
  });

  return (
    // this is the provider providing state
    <ProductsContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
