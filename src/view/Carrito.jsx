import { useContext } from 'react';
import { UserContext } from "../context/UserContext";
import Button from 'react-bootstrap/Button';
import { formatoMoneda } from "../helpers/formatoMoneda";
import { AumentarCarrito, DisminuirCarrito } from "../hook/HandleCarrito"
import { mayuscula } from "../helpers/mayuscula";

export const Carrito = () => {
const { carro, total, setTotal, setCarro } = useContext(UserContext);
const carrito = carro && carro.filter((item) => item.quantity)

const handleRestar = ( pizza ) => {
  DisminuirCarrito(pizza, carro, total, setTotal, setCarro);
}

const handleSumar = ( pizza ) => {
    AumentarCarrito(pizza, carro, total, setTotal, setCarro);
}

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
                        <h6>{mayuscula(item["name"])}</h6>
                    </div>
                    <div className="der">
                        <h6 className="price">{formatoMoneda.format(item["quantity"] * item["price"])}</h6>
                        <Button onClick={() => handleRestar(item)} id={item["id"]} variant="danger" className='mx-2'>-</Button>
                        <span>{item["quantity"]}</span>
                        <Button onClick={() => handleSumar(item)} id={item["id"]} variant="primary" className='mx-2'>+</Button>
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
