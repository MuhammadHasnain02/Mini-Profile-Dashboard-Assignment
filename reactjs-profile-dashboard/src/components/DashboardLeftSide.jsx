import { useNavigate } from "react-router-dom";


function DashboardLeftSide() {

  const navigation = useNavigate()

  return (
    <div className="fixed left-0 top-0 h-screen w-60 bg-gray-50 text-black border-r border-gray-300 flex flex-col py-6 px-4">

      <div className="flex items-center gap-3 cursor-pointer mb-6 pb-3 border-b border-gray-300"
      onClick={() => navigation('/')}>

        <div className="flex flex-row items-center justify-center bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full w-11 h-11 transition ease-in-out duration-500 hover:scale-105 cursor-pointer p-2 shadow-xl">
          <i className="fa-solid fa-layer-group text-[18px] text-gray-200"></i>
        </div>
        <span className="text-gray-700 text-xl md:text-[22px] font-extrabold">
          Profile <span className="text-indigo-400">Dash</span>
        </span>

      </div>

      {/* Navigation UI (Only UI - No functionality) */}
      <nav className="flex flex-col space-y-4">

        <div className="flex items-center font-semibold text-gray-600 gap-3 p-2 rounded hover:bg-gray-100 transition cursor-pointer"
        onClick={() => navigation('/')}>
          <i className="fa-regular fa-house text-lg"></i>
          Home
        </div>

        <div className="flex items-center font-semibold text-gray-600 gap-3 p-2 rounded hover:bg-gray-100 transition cursor-pointer"
        onClick={() => navigation('/profile')}>
          <i class="fa-regular fa-circle-user text-lg"></i>
          Profile
        </div>

        <div className="flex items-center font-semibold text-gray-600 gap-3 p-2 rounded hover:bg-gray-100 transition cursor-pointer"
        onClick={() => navigation('/followers')}>
          <i class="fa-solid fa-users text-lg"></i>
          Followers
        </div>

        <div className="flex items-center font-semibold text-gray-600 gap-3 p-2 rounded hover:bg-gray-100 transition cursor-pointer"
        onClick={() => navigation('/hobbies')}>
          <i className="fa-regular fa-heart text-lg"></i>
          Hobbies
        </div>

        <div className="flex items-center font-semibold text-gray-600 gap-3 p-2 rounded hover:bg-gray-100 transition cursor-pointer"
        onClick={() => navigation('/setting')}>
          <i className="fa-solid fa-gear text-lg"></i>
          Settings
        </div>

      </nav>
    </div>
  );
}

export default DashboardLeftSide;
