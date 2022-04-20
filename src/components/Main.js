import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'
import Cart from './Cart'
import Checkout from "./Checkout";
import TrackOrders from './TrackOrders'

const Main = () => {
    return (
        <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path="/category/:category_id" element={<ItemListContainer />} />
            <Route path="/item/:item_id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/track" element={<TrackOrders/>} />
        </Routes>
    )
}

export default Main