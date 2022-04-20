import { Trash } from "react-bootstrap-icons"

export const CartItem = ({ item, removeItem }) => {

    const currencyFormat = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" })

    return (

        <tr className="cartItem">
            <td>
                <img className="cartImage" src={item.img} alt={item.title} />
            </td>
            <td></td>
            <td>
                <p>{item.title}</p>
            </td>
            <td></td>
            <td>
                {item.count}
            </td>
            <td></td>
            <td>
                <p>{currencyFormat.format(item.price)}</p>
            </td>
            <td></td>
            <td>
                <p>{currencyFormat.format(item.count * item.price)}</p>
            </td>
            <td></td>
            <td>
                <Trash className="trash" onClick={() => removeItem(item.id)} />
            </td>
        </tr>
    )
}