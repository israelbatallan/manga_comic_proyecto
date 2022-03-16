import React, {useState} from 'react'

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial)

    function increment(){
        if (count < stock) setCount(count + 1);
    }

    function decrement(){
        if (count > 1) setCount(count - 1);
    }

    function onAdd(){
        alert(`Agregaste ${count} productos a tu carrito`);
        setCount(initial);
    }

    return (
        <div className="itemCount">
            <div>
                <button onClick={decrement}>-</button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={onAdd} className="addToCart">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount