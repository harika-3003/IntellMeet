import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold shadow-lg shadow-blue-500/30">
            IM
          </div>

          <h1 className="text-3xl font-bold">
            Welcome back
          </h1>

          <p className="mt-2 text-slate-400">
            Sign in to continue to IntellMeet
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">

          <form className="space-y-5">

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

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-slate-400">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-700 bg-slate-900"
                />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-blue-400 hover:text-blue-300"
              >
                Forgot password?
              </Link>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-500"
            >
              Sign In
            </button>

          </form>

          {/* Register */}
          <p className="mt-6 text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <Link 
            to="/register" 
            className="font-semibold text-blue-400 hover:text-blue-300"
            >
              Create account
            </Link>
          </p>

        </div>

        {/* Back Home */}
        <p className="mt-6 text-center text-sm">
          <button className="text-slate-500 hover:text-white">
            ← Back to Home
          </button>
        </p>

      </div>
    </div>
  )
}

export default Login