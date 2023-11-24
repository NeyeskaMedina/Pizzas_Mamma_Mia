import axios from "axios";
import { useState, useEffect } from "react";

export const GetData = () => {
    const [ dataPizzas, setDataPizzas ] = useState();

    const getPizzas = () =>{
        //Funcion autoejecutable para obtener datos de la data
        (async () => {
            try {
                const axiosData = await axios.get("./pizzas.json")
                const dataPizza = axiosData.data;
                setDataPizzas(dataPizza)
            } catch (err) {
                console.log(err);
            }
        })()
    }
    useEffect(()=> {
        getPizzas();
    },[])
    return { dataPizzas, setDataPizzas }
}
