import { NavLink } from "react-router"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";




const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="w-7xl m-auto grid grid-cols-3 justify-items-center">

                <section className="flex justify-center flex-col">
                    <h2 className="text-2xl font-semibold mb-5">Quick Links</h2>
                    <ul className="flex flex-col items-center gap-3 text-xl">
                        <li>
                            <NavLink>Home</NavLink>
                        </li>
                        <li>
                            <NavLink>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink>About</NavLink>
                        </li>
                        <li>
                            <NavLink>Contact</NavLink>
                        </li>
                    </ul>
                </section>
                <section>
                    <h1 className="text-2xl font-semibold mb-5">Contact</h1>
                    <div className="flex flex-col text-xl">
                        <span>+1(123) 456-7890</span>
                        <span>info@example.com</span>
                    </div>

                </section>

                <section>
                    <h1 className="text-2xl font-semibold mb-5">Social Media</h1>
                    <div className="grid grid-cols-2 gap-5 text-3xl">
                        <span><FaFacebookSquare/></span>
                        <span><BsTwitterX/></span>
                        <span><FaInstagram/></span>
                        <span><FaYoutube/></span>
                    </div>
                </section>
                <p className="col-span-3">&copy;2025 supercart.com. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer