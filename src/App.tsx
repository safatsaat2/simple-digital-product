import "./App.css";
import Header from "./components/Header";
import Success from "./components/Success";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import { Routes, Route, Outlet, } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header title="DIGIPRO" />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          path="/"
          element={
            <Product
              title="Web Development"
              description="Web development is the process of creating websites and web applications. It encompasses front-end development for user interface design, back-end development for server-side functionality, and various technologies and tools to ensure a secure, responsive, and optimized online presence. Web developers continuously learn and adapt to industry changes to deliver effective online solutions."
              images={[
                { src: "https://i.ibb.co/m4nyFsS/image.png", alt: "Thumbnail" },
              ]}
              price={12.5}
            />
          }
        />
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="Success" element={<Success/>}/>
      </Route>
    </Routes>
  );
}

export default App;
