import { useState } from "react";

// Individual Followers Card
function FollowersCardItem({ user }) {
  const [followers, setFollowers] = useState(user.followers || 0);

  return (
    <div className="flex flex-col justify-center w-full bg-white shadow-lg border border-gray-200 rounded-2xl p-6 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">

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
      <p className="text-gray-500 text-center mb-2">{user.role}</p>

      {/* Email */}
      <p className="text-gray-600 text-center text-sm mb-4">{user.email}</p>

      {/* Followers */}
      <div className="text-center mb-4">
        <p className="text-gray-700">Followers</p>
        <h3 className="text-2xl font-bold text-indigo-600">{followers}</h3>
      </div>

      {/* Follow Button */}
      <button
        onClick={() => setFollowers(followers + 1)}
        className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300"
      >
        Follow
      </button>
    </div>
  );
}

// Followers Section
export default function FollowersCard({ profiles }) {
  return (
    <div className="ml-60 mb-20 p-10">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Followers</h1>

      {/* One-line sentence */}
      <p className="text-gray-500 mb-6">
        See all the users you have followed and keep track of their updates.
      </p>

      {/* Followers Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {profiles.map((user) => (
          <FollowersCardItem key={user.id} user={user} />
        ))}
      </div>

    </div>
  );
}
