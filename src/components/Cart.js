import { useContext } from "react"
import { context } from "../context/CartContext"
import { CartItem } from "./CartItem"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, removeItem, clear, totalQuantityCalc, totalCartValueCalc } = useContext(context)
    
    const currecyFormat = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" })

    return (
        <div className="cart">
            {
                totalQuantityCalc() > 0
                ? <>
                    <span>Carrito</span>

                    <table className="cartTable">
                        <tr className="cartHeaders">
                            <td>Producto</td>
                            <td></td>
                            <td>Cantidad</td>
                            <td></td>
                            <td>Precio</td>
                            <td></td>
                            <td>Subtotal</td>
                            <td></td>
                        </tr>
                        {cart.map(item => <CartItem key={item.id} item={item} removeItem={removeItem}/>)}
                    </table>

                    <span className="total">Total a pagar: {currecyFormat.format(totalCartValueCalc())}</span>

                    <div className="cartButtons">
                        <button className="cartButton" onClick={() => clear()}>Vaciar Carrito</button>

                        <Link to="/checkout">
                            <button className="cartButton" onClick={() => clear()}>Verificar</button>
                        </Link>
                    </div>
                  </>
                : <>
                    <span>Tu carrito está vacío</span>
                    <Link to="/" className="linkToStore">
                        <button className="cartButton">Ir a la tienda</button>
                    </Link>
                  </>
            }
        </div>
    )
}

export default Cart