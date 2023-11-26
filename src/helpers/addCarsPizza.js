export const addCarsPizza  = ( pizza, carro ) =>{

    const carrito = [...carro]
    const existsPizza = carrito.findIndex(item => item.id === pizza.id)

    if (existsPizza !== -1) {
        carrito[existsPizza].quantity += 1;
    } else {
        carrito.push({ ...pizza, quantity: 1 });
    }
    return carrito;
}