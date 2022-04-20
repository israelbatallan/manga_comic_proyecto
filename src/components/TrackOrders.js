import { useEffect, useState } from "react"
import { getOrderById } from "../resources/Firebase"
import { TrackOrdersItem } from "./TrackOrdersItem"

const TrackOrders = () => {

    const currencyFormat = new Intl.NumberFormat("es-Ar", {style: "currency", currency: "ARS"})

    const [order, setOrder] = useState()
    const [orderId, setOrderId] = useState()
    const [orderStatus, setOrderStatus] = useState()
    const [failed, setFailed] = useState(false)
    const [trackingOrder, setTrackingOrder] = useState(false)

    const handleReTrack = () => {
        setOrderId()
        setOrder()
    }

    const handleOrderQuery = () => {
        setFailed(false)
        setTrackingOrder(true)
        getOrderById(orderId)
        .then(res => {
            setOrder(res)
            res === undefined && setFailed(true)
        })
        .finally(() => {
            setTrackingOrder(false)
        })
    }

    useEffect(() => {
        order !== undefined && setOrderStatus(`Hola ${order.buyer?.name} ${order.buyer?.surname} ¡Gracias por tu compra!`)
    }, [order])

    return (
        <div className="mainContainer">
          {
            order === undefined
            ? trackingOrder
              ? <>
                  <div className='loader'>Buscando compra...</div>
                </>
              : <>
                  <h2 className={!failed ? "greeting" : 'greeting error'}>{failed ? 'El ID ingresado no existe.' : 'Por favor introduce tu ID para verificar su estado'}</h2>
                  <form className="formContainer">
                    <div className="formGroup">
                      <label htmlFor="id">ID</label>
                      <input className="orderInput" type="text" onChange={ (e) => setOrderId(e.target.value) }/>
                      <div className="trackButtonsContainer">
                        <button type="submit" onClick={(e) => {
                            e.preventDefault()
                            handleOrderQuery()
                          }
                        }>
                          Buscar orden
                        </button>
                      </div>
                    </div>
                  </form>
                </>
            : <div className="trackedOrder">
                <h2>Seguimiento de compra</h2>
                <h3 className='trackerMessage'>{ orderStatus }</h3>
                <h3><strong>Estado:</strong> Pendiente</h3>
                <h3><strong>Detalle de compra:</strong></h3>
                <table className="orderTable">
                  <thead className='orderHeaders'>
                    <tr>
                      <td></td>
                      <td>Producto</td>
                      <td></td>
                      <td>Cantidad</td>
                    </tr>
                  </thead>
                  <tbody>
                    { order.items?.map(item => <TrackOrdersItem key={item.id} item={item} />) }
                  </tbody>
                </table>
                <h3 className="trackTotal">El total de la compra fué de { currencyFormat.format(order.total) }</h3>
                <button onClick={() => handleReTrack()}>Buscar otra órden</button>
              </div>
          }
        </div>
      )
}

export default TrackOrders