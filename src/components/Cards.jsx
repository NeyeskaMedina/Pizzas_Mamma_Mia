import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { formatoMoneda } from "../helpers/formatoMoneda";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { addCarsPizza } from '../helpers/addCarsPizza';
import { mayuscula } from "../helpers/mayuscula";


export const Cards = () => {
  const { dataPizzas, total, setTotal, carro, setCarro } = useContext(UserContext)
  const navigate = useNavigate();

  const goPizza = (pizza) => {
    navigate(`/pizza/${pizza.id}`)
  };

  const handleAddPizza = ( pizza ) => {
    console.log(pizza);    
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
    <ToastContainer/>
    <main className='cards'>
    {dataPizzas && dataPizzas.map(item => (
        <Card style={{ width: '18rem' }} key={item["id"]} >
        <Card.Img variant="top" src={item["img"]} />
        <Card.Body>
          <Card.Title className='title py-2'>{mayuscula(item["name"])}</Card.Title>
              <ul>
                {item["ingredients"].map(ing => (
                    <li>🍕 {ing}</li>
                ))}
              </ul>
          <h2>{formatoMoneda.format(item["price"])}</h2>
          
            
            <Button onClick={() => goPizza(item)} id={item["id"]} variant="primary" className='mx-2'>Ver detalle</Button>
            <Button onClick={() => handleAddPizza(item)} id={item["id"]} variant="danger">Añadir 🛒 </Button>
        </Card.Body>
      </Card>
    ))}   
    </main>
    </>
  )
}
