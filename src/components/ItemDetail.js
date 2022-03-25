import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from '../context/CartContext';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  
  const { addItem } = useContext(context)

  let navigate = useNavigate();

  const onAdd = (count) => {
    addItem(item, count);

    toast.success(`Agregaste ${count} tomo${(count > 1) ? 's' : ''} de ${item.nombre} a tu carrito`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      }
    )

    navigate('/cart')
  }

  return (
    <div className="itemDetail">
      <img src={item?.img} alt={`imagen_producto`}/>
      <div className="detail">
          <h2 className="detail__title">{item?.nombre}</h2>
          <p className="detail__description">{item?.detail}</p>
          <p className="detail__price">Precio: ${item?.precio}</p>
          <div className="detail__counter">
            <ItemCount stock={item?.cantidad} initial={1} onAdd={onAdd}/>
          </div>
          <p className="detail__stock">Cantidad disponible: {item?.cantidad}</p>
      </div>
    </div>
  )
}

export default ItemDetail