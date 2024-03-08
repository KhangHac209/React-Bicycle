import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import Backtop from "./component/Backtop";
import AboutUs from "./component/About/AboutUs";
function App() {
    return (
        <div>
            <Header></Header>
            <Backtop></Backtop>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<AboutUs></AboutUs>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
