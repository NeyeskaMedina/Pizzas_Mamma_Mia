import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { GetData } from '../hook/GetData';
import { formatoMoneda } from "../helpers/formatoMoneda";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';




export const Cards = () => {
  const { dataPizzas } = GetData();
  const { total, setTotal, carro, setCarro } = useContext(UserContext)
  const navigate = useNavigate();
  
  

  const goPizza = (e) => {
    console.log(e);
    navigate(`/pizza/${e.target.id}`)
  }

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
      

    
    // console.log(carro);
    
  }
  return (
    <>
    <ToastContainer/>
    <main className='cards'>
    {dataPizzas && dataPizzas.map(item => (
        <Card style={{ width: '18rem' }} key={item["id"]} >
        <Card.Img variant="top" src={item["img"]} />
        <Card.Body>
          <Card.Title className='title py-2'>{item["name"]}</Card.Title>
              <ul>
                {item["ingredients"].map(ing => (
                    <li>🍕 {ing}</li>
                ))}
              </ul>
          <h2>{formatoMoneda.format(item["price"])}</h2>
          
            
            <Button onClick={goPizza} id={item["id"]} name={item['name']} image={item["img"]} price={item['price']} variant="primary" className='mx-2'>Ver detalle</Button>
            <Button onClick={handleAddPizza} id={item["id"]} variant="danger">Añadir 🛒 </Button>
        </Card.Body>
      </Card>
    ))}   
    </main>
    </>
  )
}
