import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingScreen from "./loading_screen";
import New from "../assets/neww.jpg";
import Nav from "./navBar";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <>
            <Nav />
            <div className="flex flex-col items-center justify-center h-screen bg-[#F5EEDC]">
                <div className="flex w-full h-full">
                    
                    {/* Left Section - Text */}
                    <div className="w-[60%] flex flex-col justify-center px-10">
                        <h1 className="text-5xl md:text-6xl font-semibold max-w-[80%] leading-snug">
                            Turn Plastic into Possibility – Powered by AI! ♻
                        </h1>
                        <p className="mt-6 text-xl md:text-2xl text-gray-700">
                            Join us in revolutionizing waste management through smart recycling solutions.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <Link to="/Login" className="w-1/3">
                                <button className="w-full py-3 text-lg border border-black rounded-lg hover:bg-green-400 hover:text-black font-medium">
                                    User
                                </button>
                            </Link>
                            <Link to="/Login" className="w-1/3">
                                <button className="w-full py-3 text-lg border border-black rounded-lg hover:bg-green-400 hover:text-black font-medium">
                                    Agent
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="w-[40%] flex items-center justify-center overflow-hidden bg-[#e3f0ff]">
                        <img src={New} alt="Recycling" className="w-full h-full object-contain rounded-lg" />
                    </div>

                </div>
            </div>
        </>
    );
}
