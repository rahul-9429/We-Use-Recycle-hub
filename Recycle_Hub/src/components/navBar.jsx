import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoadingScreen from "./loading_screen";
import { User } from "lucide-react";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        
        <header className="bg-transparent shadow-md px-6 py-4 flex justify-between items-center  Z-50 ">
            <div className="text-xl font-bold ">
                <Link to="/home">WeUse</Link>
            </div>
            
            <nav className="hidden md:flex gap-6 font-bold text-xl">
                <Link to="/home" className="text-green-400 hover:bg-emerald-400/90 hover:text-white px-4 py-2 transition-all duration-100 rounded-full">Home</Link>
                <Link to="/bys" className="text-green-400 hover:bg-emerald-400/90 hover:text-white px-4 py-2 transition-all duration-100 rounded-full">Book a Slot</Link>
                <Link to="/How_we_work" className="text-green-400 hover:bg-emerald-400/90 hover:text-white px-4 transition-all duration-100 py-2 rounded-full">About Us</Link>
                <Link to="/user-acc" className="text-green-400 hover:bg-emerald-400/90 hover:text-white px-3 py-2 transition-all duration-100 rounded-full"><User/></Link>
            </nav>
            
            <button onClick={toggleMenu} className="md:hidden text-green-400 text-3xl">
                {menuOpen ? <i className="bx bx-x"></i> : <i className="bx bx-menu"></i>}
            </button>

            {menuOpen && (
                <nav className="fixed top-20 left-0 w-full bg-black bg-opacity-80 flex flex-col items-center gap-6 py-8 text-center z-50">
                    <Link to="/home" onClick={toggleMenu} className="text-green-400 text-lg transition-all duration-100 hover:bg-emerald-400/90 hover:text-white px-6 py-3 rounded-full w-3/4">Home</Link>
                    <Link to="/bys" onClick={toggleMenu} className="text-green-400 text-lg transition-all duration-100 hover:bg-emerald-400/90 hover:text-white px-6 py-3 rounded-full w-3/4">Book Your Slot</Link>
                    <Link to="/How_we_work" onClick={toggleMenu} className="text-green-400 transition-all duration-100 text-lg hover:bg-emerald-400/90 hover:text-white px-6 py-3 rounded-full w-3/4">How We Work</Link>
                    <Link to="/user-acc" onClick={toggleMenu} className="text-green-400 text-lg transition-all duration-100 hover:bg-emerald-400/90 hover:text-white px-6 py-3 rounded-full w-3/4">Account</Link>
                </nav>
            )}
        </header>
    );
}