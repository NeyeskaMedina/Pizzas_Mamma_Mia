export const AumentarCarrito = (pizza, carro, total, setTotal, setCarro) => {

    const addQuantity = carro.map(item => {
        if (item.id === pizza.id){
            setTotal(item.price + total);
            return { ...item, 
                        quantity: ((item.quantity || 0)) + 1
            }
        }
        return item
    });
    setCarro(addQuantity)
}

export const DisminuirCarrito = (pizza, carro, total, setTotal, setCarro) => {

    const addQuantity = carro.map(item => {
        if (item.id === pizza.id){
            setTotal(total - item.price);
            return { ...item, 
                        quantity: ((item.quantity || 0)) - 1 
            }
        }
        return item
    });
    
    
    setCarro(addQuantity)
}