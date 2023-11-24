import { useContext } from 'react';
import { UserContext } from "../context/UserContext";
import Button from 'react-bootstrap/Button';
import { formatoMoneda } from "../helpers/formatoMoneda";


export const Carrito = () => {
const { carro, total, setTotal, setCarro } = useContext(UserContext);
const carrito = carro && carro.filter((item) => item.quantity)

const handleRestar = ( {target} ) => {
  const addQuantity = carro.map(item => {
    if (item.id === target.id){
        setTotal(total - item.price);
        return { ...item, 
                    quantity: ((item.quantity || 0)) - 1 
              }
    }
    return item
  });


setCarro(addQuantity)
}

const handleSumar = ( {target} ) => {
  const addQuantity = carro.map(item => {
    if (item.id === target.id){
        setTotal(item.price + total);
        return { ...item, 
                    quantity: ((item.quantity || 0)) + 1
              }
    }
    return item
  });


setCarro(addQuantity)
}
// console.log(carro);
// console.log(carrito);
  return (
    <>
    <section className="carrito">
      <div className="cars">
          <h5>Detalles del pedido:</h5>
          {carrito && carrito.map((item) => (
                  <ul>
                  <li>
                    <div className="izq">
                        <img src={item["img"]} alt="" />
                        <h6>{item["name"]}</h6>
                    </div>
                    <div className="der">
                        <h6 className="price">{formatoMoneda.format(item["quantity"] * item["price"])}</h6>
                        <Button onClick={handleRestar} id={item["id"]} variant="danger" className='mx-2'>-</Button>
                        <span>{item["quantity"]}</span>
                        <Button onClick={handleSumar} id={item["id"]} variant="primary" className='mx-2'>+</Button>
                    </div>
                  </li>
                  </ul>
          ))}
          <h5 className='total'>Total: <span>{formatoMoneda.format(total)}</span></h5>
      </div>
    </section>
    </>
  )
}
