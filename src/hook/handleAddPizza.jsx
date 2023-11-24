import { GetData } from "./GetData";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export const handleAddPizza = ( {target} ) => {
    const { dataPizzas } = GetData();
    const { total, setTotal, carro, setCarro } = useContext(UserContext)
    setCarro(dataPizzas)
    console.log(target);
      toast('🍕 Excelente! su pizza fue añadida al carrito', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
      });
      
    
        const addQuantity = carro.map(item => {
          if (item.id === target.id){
              setTotal(item.price + total);
              return { ...item, 
                          quantity: item.id === target.id ? ((item.quantity || 0)) + 1 : item.quantity || 0
                    }
          }
          return item
        });
     
      
      setCarro(addQuantity)
      
  
}
