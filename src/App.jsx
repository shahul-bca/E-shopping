import { Route, Routes ,BrowserRouter} from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import Nav from "./components/Nav";
import Store from "./pages/Store"
import Jewellery from "./components/Jewellery";
function App() {
  
  return (
    <>
      <BrowserRouter>
      <div className="w-full  absolute bg-white h-full  ">
        {/* <Navbar  /> */}
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="blog" element={<Blog />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="store" element={<Store />}/>
          {/* <Route path="/jewelleries" element={<Jewellery />}/> */}
        </Routes>
        <Footer />
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
