// rafce crea una plantilla por default

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Main from './components/Main'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'

const App = () => {

    let valor_de_a = 1

    return(
        <>
            <NavBar/>
            <Main nombre={["Novedades"]}/>
            <ItemListContainer/>
            <ItemCount a={valor_de_a}>
                <h2>Hola Mundo</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ex repudiandae officiis iure placeat debitis excepturi vitae, cumque, omnis, repellendus minus quasi nisi illum facere eaque modi consequatur accusantium similique!</p>
            </ItemCount>
            <Footer/>
        </>
    )
    }

// CommomsJS: module.exports = App
export default App
