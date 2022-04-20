export const TrackOrdersItem = ({ item }) => {

    const currencyFormat = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' })

    return (
        <tr className="orderItem">
            <td>
                <img className='orderImage' src={item.img} alt={item.title} />
            </td>
            <td>
                <p>{item.title}</p>
            </td>
            <td></td>
            <td>
                {item.count} unidad{item.count > 1 ? 'es' : ''}
            </td>
        </tr>
    )
}