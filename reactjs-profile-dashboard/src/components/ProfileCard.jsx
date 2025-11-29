import { useState } from "react";

function ProfileCardItem({ user }) {

  const [followers, setFollowers] = useState(0);

  return (

    <div className="w-full bg-white shadow-md border border-gray-200 rounded-xl p-6">

      {/* Image */}
      <div className="flex justify-center mb-4">
        <img
          src={user.image}
          alt={user.name}
          className="w-24 h-24 rounded-full border shadow-sm"
        />
      </div>

      {/* Name & Role */}
      <h2 className="text-xl font-bold text-gray-800 text-center">{user.name}</h2>
      <p className="text-gray-500 text-center">{user.role}</p>

      {/* Email */}
      <p className="text-gray-600 text-center text-sm mb-4">{user.email}</p>

      {/* Followers */}
      <div className="text-center mb-4">
        <p className="text-gray-600 font-semibold">Followers : <span className="text-xl font-bold text-indigo-600">{followers}</span></p>
      </div>

      {/* Follow Button */}
      <button onClick={() => setFollowers(followers + 1)}
        className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg cursor-pointer transition duration-300 hover:scale-[0.98]">
        Follow
      </button>

    </div>

  );

}

function ProfileCard({ profiles }) {

  return (

    <div className="ml-60 mb-20 p-10">

      <h1 className="text-3xl font-bold text-gray-800 mb-2">Profiles</h1>
      <p className="text-gray-500 mb-6">
        Here are some profiles including yours and others with their details and followers count.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {profiles.map((user) => (
          <ProfileCardItem key={user.id} user={user} />
        ))}

      </div>

    </div>

  );
}

export default ProfileCard;