import { createContext, useEffect, useState } from 'react'
import { getData } from "../helpers/getData";

export const UserContext = createContext({})

export const ContextProvider = ( {children} ) => {
        
        const [ total, setTotal ] = useState(0);
        const [ carro, setCarro ] = useState([])
        const [ dataPizzas, setDataPizzas ] = useState([])
        
        const url = "./pizzas.json"
        const dataSinc = async () => {
            const pizzas = await getData(url);
            setDataPizzas(pizzas);
        };
        useEffect(()=>{
            dataSinc()
        },[]);
        
        const sharedContext = {
            dataPizzas,
            setDataPizzas,
            carro,
            setCarro,
            total,
            setTotal
        }
    return (
        <UserContext.Provider value={sharedContext}>
            {children}
        </UserContext.Provider>
    )
}
