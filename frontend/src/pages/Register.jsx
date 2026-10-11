import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold shadow-lg shadow-blue-500/30">
            IM
          </div>

          <h1 className="text-3xl font-bold">
            Create your account
          </h1>

          <p className="mt-2 text-slate-400">
            Join IntellMeet and collaborate smarter
          </p>
        </div>

        {/* Register Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">

          <form className="space-y-4">

            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 pt-2 text-sm text-slate-400">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-700"
              />

              <span>
                I agree to the{" "}
                <span className="text-blue-400">
                  Terms & Conditions
                </span>
              </span>
            </label>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-500"
            >
              Create Account
            </button>

          </form>

          {/* Login */}
          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-blue-400 hover:text-blue-300"
            >
              Sign in
            </Link>
          </p>

        </div>

        {/* Back Home */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-sm text-slate-500 transition hover:text-white"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Register;