import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold shadow-lg shadow-blue-500/30">
            IM
          </div>

          <h1 className="text-3xl font-bold">
            Reset your password
          </h1>

          <p className="mt-2 text-slate-400">
            Create a new password for your IntellMeet account.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">

          <form className="space-y-5">

            {/* New Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                New Password
              </label>

              <input
                type="password"
                placeholder="Enter new password"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Confirm New Password
              </label>

              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-500"
            >
              Reset Password
            </button>

          </form>

          {/* Login */}
          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="text-sm font-semibold text-blue-400 hover:text-blue-300"
            >
              ← Back to Login
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ResetPassword;