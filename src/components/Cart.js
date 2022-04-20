import { useContext } from "react"
import { context } from "../context/CartContext"
import { CartItem } from "./CartItem"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, removeItem, clear, totalQuantityCalc, totalCartValueCalc } = useContext(context)
    
    const currencyFormat = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" })

    return (
        <div className="cart">
            {
                totalQuantityCalc() > 0
                ? <>
                    <span>Carrito</span>

                    <table className="cartTable">
                        <thead className="cartHeaders">
                            <tr>
                                <td>Producto</td>
                                <td></td>
                                <td>Cantidad</td>
                                <td></td>
                                <td>Precio</td>
                                <td></td>
                                <td>Subtotal</td>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => <CartItem key={item.id} item={item} removeItem={removeItem}/>)}
                        </tbody>
                    </table>

                    <span className="total">Total a pagar: {currencyFormat.format(totalCartValueCalc())}</span>

                    <div className="cartButtons">
                        <button className="cartButton" onClick={() => clear()}>Vaciar Carrito</button>

                        <Link to="/">
                            <button className="cartButton">Ver Más Productos</button>
                        </Link>

                        <Link to="/checkout">
                            <button className="cartButton">Iniciar Compra</button>
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