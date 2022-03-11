import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <Header />
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
};

export default Layout;