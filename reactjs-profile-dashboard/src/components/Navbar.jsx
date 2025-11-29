import { useNavigate } from "react-router-dom"

function Navbar() {

    const navigation = useNavigate()
    
    return (
        <div className="px-6 py-4 z-50 bg-white shadow-sm border-b border-gray-200 flex items-center justify-between">

            {/* Left Side */}
            <div className="flex flex-row justify-around space-x-10">

                {/* Left - Hamburger */}
                <button className="border border-gray-200 px-2 py-1 rounded-md text-gray-600 text-xl cursor-pointer hover:text-gray-900">
                    <i className="fa-solid fa-bars"></i>
                </button>

                {/* Center - Search Box */}
                <div className="flex items-center border border-gray-300 rounded-full px-4 py-2.5 w-full">
                    <i className="fa-solid fa-magnifying-glass text-gray-500 mr-3"></i>
                    <input
                        type="text"
                        placeholder="Search or type command..."
                        className="placeholder:tracking-tight font-medium bg-transparent outline-none text-sm w-100"
                    />
                </div>

            </div>

            {/* Right Icons Side */}
            <div className="flex items-center gap-5">

                {/* Dark mode toggle */}
                <button className="text-gray-600 text-xl cursor-pointer hover:text-gray-900">
                    <i className="fa-regular fa-moon"></i>
                </button>

                {/* Notifications */}
                <button className="text-gray-600 text-xl hover:text-gray-900 relative">
                    <i className="fa-regular fa-bell"></i>
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Profile Image */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <i class="fa-regular fa-circle-user"></i>
                    <p className="font-medium text-gray-800">User</p>
                </div>

            </div>

        </div>
    )

}


export default Navbar