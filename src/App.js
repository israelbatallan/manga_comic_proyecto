// rafce crea una plantilla por default

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Main from './components/Main'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
    return(
        <>
            <NavBar/>
            <Main nombre={["Novedades"]} />
            <ItemListContainer/>
            <Footer/>
        </>
    )
    }

// CommomsJS: module.exports = App
export default App
