import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
    <Header />
    <div className="sideMargin">
      <Outlet />
    </div>
    <Footer />
    </>
  )
};

export default Layout;