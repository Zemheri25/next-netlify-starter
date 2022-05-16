import { createContext, useContext } from "react";
import { useState } from "react";

export const ProductContext = createContext();

const MyProducstContext = ({ children }) => {
  const [list, setList] = useState([]);

  const handleDelete = (id) => {
      const newProducts = list.filter((item) => id !== item.id);
      setList(newProducts)
  };

  const [total, setTotal] = useState(0)



  return (
    <ProductContext.Provider value={{ list, setList ,handleDelete, total, setTotal}}>
      {children}
    </ProductContext.Provider>
  );
};

export default MyProducstContext;

export function useAppContext() {
  return useContext(ProductContext);
}
