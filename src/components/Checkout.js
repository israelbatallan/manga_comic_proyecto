import { useContext, useState } from "react";
import { context } from "../context/CartContext";
import { submitOrder } from "../resources/Firebase";
import { Link } from "react-router-dom";

const Checkout = () => {

    const { cart, totalCartValueCalc, clear } = useContext(context);

    const [ orderId, setOrderId ] = useState()

    const [ name, setName ] = useState()
    const [ surname, setSurname ] = useState()
    const [ email, setEmail ] = useState()
    const [ phone, setPhone ] = useState()
    const [ adress, setAdress ] = useState()

    const handleSubmit = () => {

        const currentOrder = {
            buyer: {
                name: name,
                surname: surname,
                phone: phone,
                email: email,
                adress: adress
            },
            items: [...cart],
            total: totalCartValueCalc()
        }

        submitOrder(currentOrder).then(res => setOrderId(res))

        clear()
    }

    return (
        <div className="mainContainer">{
            orderId
            ? <>
                <h2 className="greeting">¡Gracias por su compra!</h2>
                <div className="checkoutContainer">
                    <p className="checkoutInfo">Su orden ha sido registrada con el ID: <strong>{ orderId }</strong>
                    </p>
                    <button className=" btnToast" onClick={() => navigator.clipboard.writeText(orderId)}>Copiar</button>
                    <p className="checkoutInfo">Conserva éste ID para poder realizar su seguimiento.</p>
                    <Link to='/'>
                        <button className="checkoutButton">Volver a la tienda</button>
                    </Link>
                </div>
            </>
            : <>
                <h2 className="greeting">Completa tus datos para finalizar la compra</h2>
                <form className="formContainer">
                    <div className="formGroup">
                        <label className="formLabel" htmlFor="name">Nombre</label>
                        <input className="formInput" type="text" id="name" onChange={ (e) => setName(e.target.value) }/>

                        <label className="formLabel" htmlFor="name">Apellido</label>
                        <input className="formInput" type="text" id="surname" onChange={ (e) => setSurname(e.target.value) }/>

                        <label className="formLabel" htmlFor="email">Correo</label>
                        <input className="formInput" type="email" id="email" onChange={ (e) => setEmail(e.target.value) }/>

                        <label className="formLabel" htmlFor="phone">Celular</label>
                        <input className="formInput" type="tel" id="phone" onChange={ (e) => setPhone(e.target.value) }/>

                        <label className="formLabel" htmlFor="name">Dirección</label>
                        <input className="formInput" type="text" id="adress" onChange={ (e) => setAdress(e.target.value) }/>

                        <button className="orderSubmit" type="submit" onClick={(e) => { e.preventDefault(); handleSubmit() }}>Finalizar Compra</button>
                    </div>
                </form>
                </>
        }
        </div>
    )
}

export default Checkout;