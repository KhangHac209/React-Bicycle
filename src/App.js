import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import Backtop from "./component/Backtop";
import AboutUs from "./component/About/AboutUs";
import Products from "./component/Products/Products";
import Contact from "./component/Contact/Contact";
import DetailProduct from "./component/DetailProduct/DetailProduct";
import AutoTop from "./component/AutoTop";
import CartProduct from "./component/CartProduct/CartProduct";
import Order from "./component/Order/Order";
import Blog from "./component/Blog/Blog";
import DetailBlog from "./component/Blog/DetailBlog";
import Search from "./component/Header/Search";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./CartContext";
import Login from "./component/Login/Login";
function App() {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <CartProvider>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/about" element={<AboutUs></AboutUs>}></Route>
                    <Route path="/blog" element={<Blog></Blog>}></Route>
                    <Route path="/detailBlog/:slug" element={<DetailBlog></DetailBlog>}></Route>
                    <Route path="/product" element={<Products></Products>}></Route>
                    <Route path="/contact" element={<Contact></Contact>}></Route>
                    <Route path="/detail/:slug" element={<DetailProduct></DetailProduct>}></Route>
                    <Route path="/cart" element={<CartProduct></CartProduct>}></Route>
                    <Route path="/order" element={<Order></Order>}></Route>
                    <Route path="/search/:slug" element={<Search></Search>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                </Routes>
                <AutoTop></AutoTop>
                <Backtop></Backtop>
                <Footer></Footer>
            </CartProvider>
        </div>
    );
}

export default App;
