import React from "react";
import { Navigate,useNavigate } from "react-router-dom";
import bg from "../assets/background.jpg";
export default function Person_or_Agent() {
        const navigate = useNavigate();
        function loginAsUser() {
            navigate("/login");
        }
        function loginAsAgent() {
            navigate("/Agent_login");
        }

    return (
        <div className="flex flex-col md:flex-row items-center text-center  text-balance justify-around border z-100  border-black h-screen bg-gray-100 "style={{backgroundImage: `url(${bg})`}}>
            <div className="flex flex-col justify-center items-center border border-black  rounded-lg p-8 bg-white z-1 shadow-lg w-2/3 md:w-1/3">
                <p className="text-lg text-fuchsia-600 mb-4">Come and join us to make the world sustainable</p>
                <button className="hover:shadow-lg text-white bg-green-400 border border-green-400 text-wrap w-2/3 rounded-md py-2" onClick={loginAsUser}>Login as User</button>
            </div>
            <div className="flex flex-col justify-center items-center border border-black w-2/3 md:w-1/3 rounded-lg p-8 bg-white shadow-lg">
                <p className="text-lg text-fuchsia-600 mb-4">Come and join us to make the world sustainable</p>
                <button className="hover:shadow-lg text-white bg-green-400 border border-green-400 w-2/3 rounded-md py-2" >Login as Agent</button>
            </div>
        </div>
    );
}
