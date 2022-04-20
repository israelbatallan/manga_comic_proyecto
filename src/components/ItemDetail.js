import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from '../context/CartContext';
import { Slide, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  
    const { addItem, isInCart } = useContext(context)

    const currecyFormat = new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'})

    let navigate = useNavigate();

    const onAdd = (count) => {
        addItem(item, count);

        toast.success(`Agregaste ${count} tomo${(count > 1) ? 's' : ''} de ${item.title} a tu carrito`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Slide
            }
        )
    }

    return (
        <div className="itemDetail">
            <img src={item?.img} alt={`imagen_producto`}/>
            <div className="detail">
                  <h2 className="detail__title">{item?.title}</h2>
                  <p className="detail__description">{item?.description}</p>
                  <p className="detail__price">Precio: {currecyFormat.format(item?.price)}</p>
                  <div className="detail__counter">
                      {
                          isInCart(item.id)
                          ? <>
                                <Link to="/">
                                <button className='addToCart'>Ver Más Productos</button>
                                </Link>
                                <Link to="/Cart">
                                <button className='addToCart'>Ver Carrito</button>
                                </Link>
                            </>
                          : <ItemCount stock={item?.stock} initial={1} onAdd={onAdd}/>
                      }
                  </div>
                  <p className="detail__stock">Cantidad disponible: {item?.stock}</p>
            </div>
        </div>
    )
}

export default ItemDetail