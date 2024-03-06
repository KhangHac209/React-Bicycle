import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import Button from "./component/Button/Button";
import Backtop from "./component/Backtop";
function App() {
    return (
        <div>
            <Header></Header>
            <Backtop></Backtop>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
