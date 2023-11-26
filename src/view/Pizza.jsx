import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import  { formatoMoneda }  from "../helpers/formatoMoneda";
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCarsPizza } from "../helpers/addCarsPizza";
import { mayuscula } from "../helpers/mayuscula"

export const Pizza = () => {
  const { id } = useParams();
  const { dataPizzas } = useContext(UserContext); 
  const { carro, total, setTotal, setCarro } = useContext(UserContext);
  
  const pizza = dataPizzas && dataPizzas.filter((item) => id === item["id"]);
  
  const handleAddPizza = ( pizza ) => { 
      setTotal(pizza.price + total)
      const response = addCarsPizza(pizza, carro)
      setCarro(response);
    
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
  }
  
  return (
    <>
    <main className='pizza'>
      <ToastContainer/>
      {pizza && pizza.map(item => (
        <>
        <img src={item["img"]} alt="" />
        <div className="rigth">
            <h1>{mayuscula(item["name"])}</h1>
            <p>{item["desc"]}</p>
            <h5>Ingredientes:</h5>
            <ul>
                {item["ingredients"].map(ing => (
                    <li>🍕 {ing}</li>
                ))}
            </ul>
            <div className="foo">
                <h2>Precio: {formatoMoneda.format(item["price"])}</h2>
                <Button onClick={() => handleAddPizza(item)} className="btnPizza" variant="danger">Añadir 🛒 </Button>
            </div>
        </div>
        </>
      ))}   
    </main>
    </>
  )
}
