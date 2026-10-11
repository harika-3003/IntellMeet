import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-cyan-400 font-semibold">ACCOUNT</p>
          <h1 className="text-3xl font-bold">My Profile</h1>
        </div>

        <Link
          to="/dashboard"
          className="text-cyan-400 hover:text-cyan-300"
        >
          ← Back to Dashboard
        </Link>
      </div>

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-700 rounded-2xl p-8">

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 border-b border-slate-700 pb-8">

          <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-4xl font-bold">
            U
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">
              -
            </h2>

            <p className="text-cyan-400">
              -
            </p>

            <p className="text-slate-400 mt-1">
              -
            </p>
          </div>

        </div>

        {/* Personal Information */}
        <div className="mt-8">

          <h2 className="text-xl font-bold mb-5">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="bg-slate-800 rounded-xl p-4">
              <p className="text-sm text-slate-400">
                Full Name
              </p>
              <p className="font-semibold mt-1">
                -
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              <p className="text-sm text-slate-400">
                Email
              </p>
              <p className="font-semibold mt-1">
                -
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              <p className="text-sm text-slate-400">
                Phone Number
              </p>
              <p className="font-semibold mt-1">
                -
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              <p className="text-sm text-slate-400">
                Role
              </p>
              <p className="font-semibold mt-1">
                -
              </p>
            </div>

          </div>
        </div>

        {/* About */}
        <div className="mt-8">

          <h2 className="text-xl font-bold mb-4">
            About Me
          </h2>

          <div className="bg-slate-800 rounded-xl p-5">
            <p className="text-slate-300 leading-7">
              -
            </p>
          </div>

        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 mt-8">

          <button className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300">
            Edit Profile
          </button>

          <Link
            to="/settings"
            className="border border-slate-600 px-6 py-3 rounded-xl font-semibold hover:bg-slate-800"
          >
            Account Settings
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Profile;