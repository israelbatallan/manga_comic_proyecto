import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({stock, initial = 1, onAdd}) => {

    const [count, setCount] = useState(initial)

    function increment(){
        count < stock && setCount(count + 1);
    }

    function decrement(){
        count > 1 && setCount(count - 1);
    }

    return (
        <div className="itemCount">
            <div>
                <button onClick={decrement}>-</button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={() => onAdd(count)} className="addToCart">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount