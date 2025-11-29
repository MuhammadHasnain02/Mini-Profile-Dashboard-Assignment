import { useNavigate } from "react-router-dom";

function Home() {

    const navigation = useNavigate()

    return (
        <div className="ml-60 p-8 bg-gray-100 min-h-screen">

            {/* Top heading */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Dashboard Overview
            </h1>

            {/* Grid 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {/* Followers */}
                <div onClick={() => navigation('/followers')}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-200 cursor-pointer hover:shadow-lg">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <h2 className="text-3xl font-bold text-gray-600">1,245</h2>
                            <p className="text-gray-500 text-sm font-medium">Followers</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                            <i className="fa-solid fa-users text-blue-600 text-xl"></i>
                        </div>
                    </div>
                </div>

                {/* Following */}
                <div onClick={() => navigation('/followers')}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-200 cursor-pointer hover:shadow-lg">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <h2 className="text-3xl font-bold text-gray-600">980</h2>
                            <p className="text-gray-500 text-sm font-medium">Following</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                            <i className="fa-solid fa-user-group text-purple-600 text-xl"></i>
                        </div>
                    </div>
                </div>

                {/* Total Hobbies */}
                <div onClick={() => navigation('/hobbies')}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-200 cursor-pointer hover:shadow-lg">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <h2 className="text-3xl font-bold text-gray-600">12</h2>
                            <p className="text-gray-500 text-sm font-medium">Total Hobbies</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                            <i className="fa-regular fa-heart text-pink-600 text-xl"></i>
                        </div>
                    </div>
                </div>

            </div>

            {/* Profile Summary Card */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Summary</h2>

                <div className="flex items-center gap-6">
                    <i class="fa-regular fa-circle-user w-20 h-20 text-2xl"></i>

                    <div>
                        <p className="text-gray-700 font-semibold text-lg">John Doe</p>
                        <p className="text-gray-500 text-sm">Frontend Developer</p>
                        <p className="text-gray-600 mt-2 max-w-[400px]">
                        Passionate about UI/UX, coding beautiful interfaces, and building clean dashboards.
                        </p>
                    </div>
                </div>
            </div>

            {/* Hobbies box */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Hobbies</h2>

                <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    Coding
                </span>

                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Gaming
                </span>

                <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                    Reading
                </span>

                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    Music
                </span>
                </div>
            </div>

        </div>
    );

}

export default Home;
