import { ContextProvider } from './context/UserContext';
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./view/Home";
import { Carrito } from "./view/Carrito";
import { Footer } from "./components/Footer";
import { Pizza } from "./view/Pizza";
// import { useState } from 'react'
import './App.css'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <ContextProvider>
    <Navbar />
    
    
      {/* <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}

      <Routes>
        <Route
            path ='/'
            element ={<Home/>}
        /> 
        <Route
            path ='/carrito'
            element ={<Carrito/>}
        /> 
        <Route
            path ='/pizza/:id'
            element ={<Pizza/>}
        /> 
    </Routes>
    <Footer />
    </ContextProvider>
    </>
  )
}

export default App
