import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { formatoMoneda } from "../helpers/formatoMoneda";

export const Navbar = () => {
  const { total } = useContext(UserContext)

  return (
    <>
    <nav>
      <NavLink to="/" className={( {isActive} ) =>  isActive ? "active" : undefined}>
          <h3>🍕 Pizzería Mamma mia!</h3>
      </NavLink>
      <NavLink to="/carrito" className={( {isActive} ) =>  isActive ? "active" : undefined}>
        <h4>🛒 <span>{formatoMoneda.format(total)}</span></h4>   
      </NavLink>
    </nav>
    </>
  )
}
