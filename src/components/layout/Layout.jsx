import { Outlet } from "react-router"
import Navbar from "../ui/Navbar"
import Footer from "../ui/Footer"
import ProductProvider from "../../context/ProductProvider"
const Layout = () => {
    return (
        <ProductProvider>
            <Navbar />
            <Outlet />
            <Footer />
        </ProductProvider>
    )
}

export default Layout