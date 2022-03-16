// rafce crea una plantilla por default

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'

const App = () => {

    const saludo = "¡Bienvenido a nuestra tienda!"

    return(
        <>
            <NavBar/>
            <ItemListContainer greeting={saludo}/>
            <ItemCount/>
            <Footer/>
        </>
    )
    }

// CommomsJS: module.exports = App
export default App
