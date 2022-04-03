import { useState } from "react"

const useCart = products =>{
    const [cart, setCart] = useState([])
    
     


    return [cart, setCart];
}

export default useCart;