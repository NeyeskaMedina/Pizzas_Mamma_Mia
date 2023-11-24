import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import  { formatoMoneda }  from "../helpers/formatoMoneda";
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Pizza = () => {
  const { id } = useParams();
  const { dataPizzas } = useContext(UserContext); 
  const { carro, total, setTotal, setCarro } = useContext(UserContext);
  const pizza = dataPizzas.filter((item) => id === item["id"])

  const handleAddPizza = ( {target} ) => {
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
  
  return (
    <>
    <main className='pizza'>
      <ToastContainer/>
      {pizza.map(item => (
        <>
        <img src={item["img"]} alt="" />
        <div className="rigth">
            <h1>{item["name"]}</h1>
            <p>{item["desc"]}</p>
            <h5>Ingredientes:</h5>
            <ul>
                {item["ingredients"].map(ing => (
                    <li>🍕 {ing}</li>
                ))}
            </ul>
            <div className="foo">
                <h2>Precio: {formatoMoneda.format(item["price"])}</h2>
                <Button onClick={handleAddPizza} className="btnPizza" variant="danger">Añadir 🛒 </Button>
            </div>
        </div>
        </>
      ))}   
    </main>
    </>
  )
}
