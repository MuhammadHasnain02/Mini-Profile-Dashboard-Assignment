import { useNavigate } from "react-router-dom";

function Home({ profiles , hobbies }) {

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

            {/* Profile Summary and Hobbies Cards */}
            <div className="flex flex-row justify-between gap-6 mt-8">

                {/* Profile Summary Card */}
                <div className="bg-white px-8 py-6 rounded-xl shadow-sm cursor-pointer border border-gray-200">
                    
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Summary</h2>

                    {profiles.slice(0 , 2).map((user) => {

                        return (
                            <div key={user.id} onClick={() => navigation('/profile')}
                                className="flex items-center pt-5 mt-4 gap-6 border-t border-gray-300">
                                
                                {/* Image */}
                                <div className="flex justify-center mb-4">
                                    <img
                                    src={user.image}
                                    alt={user.name}
                                    className="w-24 h-24 rounded-full border shadow-sm"
                                    />
                                </div>
                                <div>
                                    <p className="text-gray-700 font-semibold text-lg">{user.name}</p>
                                    <p className="text-gray-500 text-sm">{user.role}</p>
                                    <p className="text-gray-600 mt-2 max-w-[400px]">{user.email}</p>
                                </div>

                            </div>
                        )

                    })}

                </div>

                {/* Hobbies box */}
                <div className="bg-white px-10 py-6 rounded-xl shadow-sm cursor-pointer border border-gray-200">
                    
                    <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-1.5 mb-5">Your Hobbies</h2>

                    {/* Hobbies box */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                
                        {hobbies.slice(0 , 3).map((hobby, index) => (
                            
                            <div key={index} onClick={() => navigation('/hobbies')}
                                className="flex flex-col justify-center w-full bg-white shadow-lg border border-gray-200 rounded-2xl p-8 cursor-pointer hover:shadow-xl">
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

                        <div onClick={() => navigation('/hobbies')}
                        className="flex flex-col justify-center w-full bg-white shadow-lg border border-gray-200 rounded-2xl p-8 cursor-pointer hover:shadow-xl">
                            
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

            </div>

        </div>
    );

}

export default Home;
