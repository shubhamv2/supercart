import { NavLink } from "react-router"
import { IoIosSearch } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";

const Navbar = () => {
    return (
        <header className="h-20 flex items-center">
            <nav className="flex items-center w-7xl m-auto justify-between">
                <NavLink to='/'>
                    <h1 className="flex items-center outline-4 outline-offset-3 text-3xl font-semibold">
                        <span className="bg-black text-white">Super</span>
                        <span>cart</span>
                    </h1>
                </NavLink>


                <ul className="flex items-center gap-8 text-xl">
                    <li className="flex border-2 border-gray-200 items-center rounded overflow-hidden">
                        <input type="text" placeholder="Search"  className="outline-none px-2 py-1 w-xl placeholder:text-xl border-none"/>
                        <span className="text-2xl px-2"><IoIosSearch /></span>
                    </li>

                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/'>Shop</NavLink></li>
                    <li><NavLink to='/'>Contact</NavLink></li>
                    <li className="text-2xl"><NavLink to='/'><RiShoppingCartLine /></NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar