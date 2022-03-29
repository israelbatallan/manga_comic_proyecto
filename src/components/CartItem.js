import { Trash } from "react-bootstrap-icons"

export const CartItem = ({ item, removeItem }) => {

    const currencyFormat = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" })

    return (

        <tr className="cartItem">
            <td>
                <img className="cartImage" src={item.img} alt={item.nombre} />
            </td>
            <td>
                <p>{item.nombre}</p>
            </td>
            <td></td>
            <td>
                {item.count} unidad{item.count > 1 ? 'es' : ''}
            </td>
            <td></td>
            <td>
                <p>{currencyFormat.format(item.precio)}</p>
            </td>
            <td></td>
            <td>
                <p>{currencyFormat.format(item.count * item.precio)}</p>
            </td>
            <td></td>
            <td>
                <Trash className="trash" onClick={() => removeItem(item.id)} />
            </td>
        </tr>
    )
}