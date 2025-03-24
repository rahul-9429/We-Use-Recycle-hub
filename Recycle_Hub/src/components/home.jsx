import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import recycle_video from "../assets/recycle_hub.mp4";
import LoadingScreen from "./loading_screen";
export default function Home() {
    useEffect(() =>{
        setTimeout(()=>{
            return <LoadingScreen/>
        },3000);
    })

    return (
        <div className="flex h-screen flex-col gap-y-12  items-center  lg:flex-row lg:justify-between px-4 py-2">
            <div className="text lg:justify-center lg:h-1/2 md:h-1/3 md:w-2/3 lg:w-1/3 rounded-md px-4 py-4 space-y-8 md:space-y-4 lg:space-y-8 lg:py-12">
                <h1 className="text-3xl md:text-3xl font-bold text-balance md:text-wrap text-start" style={{ fontFamily: "Anton, sans-serif" }}>Reviving nearly everything</h1>
                <p className="text-lg lg:text-md text-wrap text-start md:py-2 lg:py-4 italic font-medium">We collect from homes, councils, and businesses, connecting items with our reuse and recycling partners.</p>

                <div className="h-1/4 w-full gap-x-2 flex">
                    <Link to="/Login" className="w-1/2">
                        <button className="w-full h-12 border border-black flex-grow hover:cursor-pointer rounded-lg hover:bg-green-400 hover:text-black font-medium">User</button>
                        </Link>
                    <Link to="/Login" className="w-1/2">
                        <button className="w-full h-12 border border-black flex-grow hover:cursor-pointer rounded-lg hover:bg-green-400 hover:text-black font-medium">Agent</button>
                        </Link>
                </div>
            </div>
            <div className="md:w-2/3 lg:w-1/2 lg:h-1/2 lg:mt-0 h-1/3 border border-black rounded-md md:mt-12  flex justify-center items-center bg-gray-300  md:h-1/3">
                <video className="rounded-md w-full h-full object-cover" controls>
                    <source src={recycle_video} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}
