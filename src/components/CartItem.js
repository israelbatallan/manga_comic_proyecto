export const CartItem = ({ item, removeItem }) => {
    return (
        <article className="cartItem">
            <img className="cartImage" src={item.img} alt={item.nombre} />
            <p>{item.nombre} x {item.count} unidad{item.count > 1 ? 'es' : ''}</p>
            <p>${ item.count * item.precio}</p>
            <button onClick={() => removeItem(item.id)}>X</button>
        </article>
    )
}