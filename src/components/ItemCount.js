import { Container, Alert } from "react-bootstrap";
import { useState } from "react"


const ItemCount = (props) => {

    // const resultado = useState()
    // const estado = resultado[0]
    // const setEstado = resultado[1]

    const initial = 1
    const stock = 10
    const onAdd = 0

    let [estado, setEstado] = useState(initial)

    const handleSumar = () => {
        if(estado < stock){
            setEstado(estado + 1)
        }else{
            alert("No contamos con esa cantidad en stock")
        }
    }

    const handleRestar = () => {
        if(estado > 1){
            setEstado(estado - 1)
        }
    }


    const handleCarrito = () => {
        alert("Se agrego " + estado + " productos al carrito")
    }

    return (
        <Container as="div">
            <p>Contador: {estado}</p>
            <button onClick={handleSumar}>Sumar</button>
            <button onClick={handleRestar}>Restar</button>
            <button onClick={handleCarrito}>Agregar al carrito</button>
        </Container>
    );
}

export default ItemCount;