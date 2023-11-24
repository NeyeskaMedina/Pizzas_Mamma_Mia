import { createContext, useState } from 'react'
import { GetData } from '../hook/GetData'

export const UserContext = createContext({})

export const ContextProvider = ( {children} ) => {
        const { dataPizzas, setDataPizzas } = GetData()
        const [ total, setTotal ] = useState(0);
        const [ carro, setCarro ] = useState({})

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
