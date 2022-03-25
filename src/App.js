// rafce crea una plantilla por default

import NavBar from './components/NavBar'
import Main from './components/Main';
import Footer from './components/Footer'
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import MyProvider from "./context/CartContext";

const App = () => {

    return(
        <BrowserRouter>
            <MyProvider>
                <NavBar />
                <Main />
            </MyProvider>
            <Footer />
            <ToastContainer />
        </BrowserRouter>
    )
    }

// CommomsJS: module.exports = App
export default App
