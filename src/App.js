import "./App.css";
import { Login } from "./Components/Login/Login";
import Home from "./Components/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbarr/Navbar";
import Shop from "./Components/Page/Shop";
import ShopCategory from "./Components/Page/ShopCategory";
import Product from "./Components/Page/Product";
import Cart from "./Components/Page/Cart";
import Popular from "./Components/Popularr/Popular";
import Footer from "./Components/Footer/Footer";
import Dashboardd from "./Components/Admin/Dashboadd";
import LoginSignUp from "./Components/Page/LoginSignUp";
import ConfirmSignUp from "./Components/Page/ConfirmSignUp";
function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children} {/* Nội dung trang sẽ được hiển thị ở đây */}
      <Footer />
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout children={<Shop />} />} />
        <Route
          path="/mens"
          element={
            <MainLayout
              children={
                <ShopCategory
                  banners={[
                    "bannermen1.png",
                    "bannermen2.jpg",
                    "bannermen3.jpg",
                  ]}
                  category="1"
                  type={[1, 2]}
                />
              }
            />
          }
        >
          <Route path=":type" />
        </Route>
        <Route
          path="/womens"
          element={
            <MainLayout
              children={
                <ShopCategory
                  banners={[
                    "bannerwomen1.png",
                    "bannerwomen2.png",
                    "bannerwomen3.png",
                  ]}
                  category="2"
                  type={[1, 2]}
                />
              }
            />
          }
        >
          <Route path=":type" />
        </Route>
        <Route
          path="/kids"
          element={
            <MainLayout
              children={
                <ShopCategory
                  banners={[
                    "bannerkid1.png",
                    "bannerkid2.jpg",
                    "bannerkid3.jpg",
                  ]}
                  category="3"
                  type={[1, 2]}
                />
              }
            />
          }
        >
          <Route path=":type" />
        </Route>

        <Route path="/products" element={<MainLayout children={<Product />} />}>
          <Route path=":productID" />
        </Route>

        <Route path="/carts" element={<MainLayout children={<Cart />} />} />
        <Route
          path="/login"
          element={<MainLayout children={<LoginSignUp />} />}
        />
        <Route
          path="/confirmUser"
          element={<MainLayout children={<ConfirmSignUp />} />}
        />
        <Route path="/home" element={<MainLayout children={<Home />} />} />
        <Route path="/api" element={<MainLayout children={<Popular />} />} />

        {/* Dashboardd không sử dụng MainLayout để tránh hiển thị Navbar và Footer */}
        <Route path="/dashboard/*" element={<Dashboardd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
