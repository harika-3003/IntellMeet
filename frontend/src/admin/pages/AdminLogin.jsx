import { Link, useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600 flex items-center justify-center text-2xl font-bold">
            IM
          </div>

          <h1 className="text-3xl font-bold mt-4">
            IntellMeet
          </h1>

          <p className="text-blue-400 mt-2">
            Admin Portal
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-2">
            Admin Login
          </h2>

          <p className="text-slate-400 mb-6">
            Sign in to manage the IntellMeet platform
          </p>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm text-slate-300 mb-2">
              Admin Email
            </label>

            <input
              type="email"
              placeholder="Enter admin email"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm text-slate-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
            />
          </div>

          {/* Login */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition-colors"
            onClick={() => navigate("/admin/dashboard")}
          >
            Admin Sign In
          </button>

          {/* Back */}
          <div className="text-center mt-6">
            <Link
              to="/"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              ← Back to IntellMeet
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AdminLogin;