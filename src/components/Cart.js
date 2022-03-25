import { useContext } from "react"
import { context } from "../context/CartContext"
import { CartItem } from "./CartItem"

const Cart = () => {
  const { cart, removeItem, clear, totalQuantityCalc, totalCartValueCalc } = useContext(context)
  
  return (
    <div className="cart">
      {
        totalQuantityCalc() > 0
        ? <>
            <h3>Carrito</h3>
            <section className="cartList">
              {cart.map(item => <CartItem key={item.id} item={item} removeItem={removeItem}/>)}
            </section>
            <h3>Total a pagar: ${ totalCartValueCalc() }</h3>
            <button onClick={() => clear()}>Vaciar Carrito</button>
          </>
        : <h3>El carrito está vacío</h3>
      }
    </div>
  )
}

export default Cart