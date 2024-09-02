import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/signup";
import LoginForm from "./pages/Login";
import Header from "./components/header";
import Home from "./pages/home";
import Products from "./pages/products";
import ProductDetails from "./pages/Productsdetail";
import Footer from "./components/footer";





function RoutingApp() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/Products" element={<Products />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<LoginForm />} />
                <Route path="/products/:title/id/:id" element={<ProductDetails/>} />

            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
export default RoutingApp;