import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


function HobbyList({ hobbies }) {

    const { darkMode, setDarkMode } = useContext(ThemeContext)
    
    return (

        <div className="ml-60 p-10 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">My Hobbies</h1>
            <p className="text-gray-500 mb-6">Here are some of my favorite hobbies I enjoy doing regularly.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
                {hobbies.map((hobby, index) => (
                    
                    <div key={index}
                        className="flex flex-col justify-center w-full bg-white shadow-lg border border-gray-200 rounded-2xl p-8 cursor-pointer transform transition-transform hover:-translate-y-1 hover:shadow-xl">
                        {/* Icon + Name */}
                        <div className="flex items-center justify-center mb-2">
                            {hobby.icon}
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{hobby.name}</h2>
                        </div>

                        {/* Description */}
                        <p className="text-center text-gray-500 text-sm">
                            {hobby.description}
                        </p>
                    </div>

                ))}

                <div className="flex flex-col justify-center w-full bg-white shadow-lg border border-gray-200 rounded-2xl p-8 cursor-pointer transform transition-transform hover:-translate-y-1 hover:shadow-xl">
                    
                    {/* Icon + Name */}
                    <div className="flex items-center justify-center mb-2 space-x-2">
                        <i className="fa-solid fa-plus text-2xl text-indigo-500"></i>
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                        Add Hobby
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-center text-gray-500 text-sm">
                        Add your new hobby here
                    </p>

                </div>

            </div>

        </div>

    );

}


export default HobbyList;